// This function generates a presigned URL for downloading the complete album
// The album file (200MB) is stored in Cloudflare R2 or AWS S3

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        // In production, you would:
        // 1. Optionally validate user access or track download analytics
        // 2. Connect to Cloudflare R2 or AWS S3
        // 3. Generate a presigned URL for the 200MB album file
        
        // Cloudflare R2 integration
        const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
        const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
        
        const R2 = new S3Client({
            region: 'auto',
            endpoint: 'https://576174baf004f97bc745e85efb36b7e8.r2.cloudflarestorage.com',
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
            },
        });
        
        const command = new GetObjectCommand({
            Bucket: 'sashbot',
            Key: 'albums/SPARK_Soundtrack_Complete.zip',
            ResponseContentDisposition: 'attachment; filename="SPARK_Soundtrack_Complete.zip"',
        });
        
        const downloadUrl = await getSignedUrl(R2, command, { expiresIn: 3600 });
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                downloadUrl: downloadUrl,
                fileName: 'SPARK_Soundtrack_Complete.zip',
                fileSize: '200MB',
                expiresIn: 3600, // URL expires in 1 hour
            }),
        };
    } catch (error) {
        console.error('Error generating download URL:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to generate download URL' }),
        };
    }
};