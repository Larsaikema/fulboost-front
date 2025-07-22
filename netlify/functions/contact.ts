import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
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
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // For now, just log the data and return success
    console.log('Contact form submitted:', { name, email, company, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Bericht succesvol ontvangen (test mode)' 
      })
    };

  } catch (error) {
    console.error('Contact form error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verwerken van het bericht' 
      })
    };
  }
}; 