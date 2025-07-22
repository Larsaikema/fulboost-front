import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('Test function called!');
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ 
      success: true, 
      message: 'Test function is working!',
      timestamp: new Date().toISOString()
    })
  };
}; 