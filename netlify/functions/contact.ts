import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('Contact function called with method:', event.httpMethod);

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body || '{}');
    console.log('Parsed body:', body);
    
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      console.log('Missing fields:', { name: !!name, email: !!email, company: !!company, message: !!message });
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Log the data (this will be visible in Netlify Function logs)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('=====================================');

    // You can also store this in a database or send to a webhook here
    // For now, we'll just log it and return success

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Bericht succesvol ontvangen! We nemen binnen 24 uur contact met je op.' 
      })
    };

  } catch (error) {
    console.error('Contact form error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verwerken van het bericht',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 