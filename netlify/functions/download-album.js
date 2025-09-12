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
        
        // Example with Cloudflare R2 (S3-compatible):
        /*
        const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
        const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
        
        const R2 = new S3Client({
            region: 'auto',
            endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
            },
        });
        
        const command = new GetObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: 'albums/SPARK_Soundtrack_Complete.zip',
        });
        
        const downloadUrl = await getSignedUrl(R2, command, { expiresIn: 3600 });
        */
        
        // For demonstration, return a mock URL
        const mockDownloadUrl = 'https://your-r2-bucket.r2.cloudflarestorage.com/albums/SPARK_Soundtrack_Complete.zip?presigned=true';
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                downloadUrl: mockDownloadUrl,
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