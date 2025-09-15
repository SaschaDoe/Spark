// This function generates a presigned URL for downloading the complete album
// The album file (200MB) is stored in Cloudflare R2 or AWS S3

const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

exports.handler = async (event, context) => {
    console.log('Download album function called');
    console.log('HTTP Method:', event.httpMethod);
    console.log('Headers:', event.headers);
    
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        console.log('Handling OPTIONS preflight request');
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        console.log('Invalid method:', event.httpMethod);
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        console.log('Starting Cloudflare R2 integration');
        
        // Check if required environment variables are present
        if (!process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
            console.error('Missing R2 credentials in environment variables');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ 
                    error: 'Server configuration error: Missing R2 credentials' 
                }),
            };
        }
        
        console.log('R2 credentials found, initializing S3 client');
        
        // Cloudflare R2 integration
        const R2 = new S3Client({
            region: 'auto',
            endpoint: 'https://576174baf004f97bc745e85efb36b7e8.r2.cloudflarestorage.com',
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
            },
        });
        
        console.log('S3 client initialized, creating GetObjectCommand');
        
        const command = new GetObjectCommand({
            Bucket: 'sashbot',
            Key: 'albums/SPARK_Soundtrack_Complete.zip',
            ResponseContentDisposition: 'attachment; filename="SPARK_Soundtrack_Complete.zip"',
        });
        
        console.log('Generating presigned URL with 1 hour expiration');
        
        const downloadUrl = await getSignedUrl(R2, command, { expiresIn: 3600 });
        
        console.log('Successfully generated presigned URL');
        console.log('URL length:', downloadUrl.length);
        console.log('URL starts with:', downloadUrl.substring(0, 50) + '...');
        
        const response = {
            downloadUrl: downloadUrl,
            fileName: 'SPARK_Soundtrack_Complete.zip',
            fileSize: '200MB',
            expiresIn: 3600, // URL expires in 1 hour
        };
        
        console.log('Returning successful response');
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(response),
        };
    } catch (error) {
        console.error('Error generating download URL:', error);
        console.error('Error details:', {
            message: error.message,
            name: error.name,
            code: error.code,
            stack: error.stack
        });
        
        // Provide more specific error messages based on error type
        let errorMessage = 'Failed to generate download URL';
        let statusCode = 500;
        
        if (error.name === 'CredentialsProviderError') {
            errorMessage = 'Authentication failed with Cloudflare R2';
            statusCode = 403;
        } else if (error.name === 'NoSuchBucket') {
            errorMessage = 'Storage bucket not found';
            statusCode = 404;
        } else if (error.name === 'NoSuchKey') {
            errorMessage = 'Album file not found in storage. Please upload SPARK_Soundtrack_Complete.zip to the albums/ folder in your R2 bucket.';
            statusCode = 404;
        } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
            errorMessage = 'Cannot connect to storage service';
            statusCode = 503;
        }
        
        return {
            statusCode: statusCode,
            headers,
            body: JSON.stringify({ 
                error: errorMessage,
                details: error.message 
            }),
        };
    }
};