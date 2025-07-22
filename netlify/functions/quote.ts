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
    const { companyName, contactPerson, email, website, monthlyOrders, additionalMessage } = body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !monthlyOrders) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // For now, just log the data and return success
    console.log('Quote request submitted:', { companyName, contactPerson, email, website, monthlyOrders, additionalMessage });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Offerte aanvraag succesvol ontvangen (test mode)' 
      })
    };

  } catch (error) {
    console.error('Quote form error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verwerken van de offerte aanvraag' 
      })
    };
  }
}; 