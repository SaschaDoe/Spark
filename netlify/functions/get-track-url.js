// This function generates presigned URLs for individual track streaming
// In production, this would connect to Cloudflare R2 or AWS S3

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

    try {
        const { trackId } = event.queryStringParameters || {};
        
        if (!trackId) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Track ID is required' }),
            };
        }

        // Cloudflare R2 integration
        const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
        const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

        const R2 = new S3Client({
            region: 'auto',
            endpoint: process.env.R2_ENDPOINT,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
            },
        });

        const command = new GetObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: `tracks/track-${trackId}.mp3`,
        });
        
        const url = await getSignedUrl(R2, command, { expiresIn: 3600 });
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                url: url,
                expiresIn: 3600, // URL expires in 1 hour
                trackId: trackId,
            }),
        };
    } catch (error) {
        console.error('Error generating track URL:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to generate track URL' }),
        };
    }
};