import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('Quote function called with method:', event.httpMethod);
  console.log('Event body:', event.body);

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
    
    const { companyName, contactPerson, email, website, monthlyOrders, additionalMessage } = body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !monthlyOrders) {
      console.log('Missing fields:', { 
        companyName: !!companyName, 
        contactPerson: !!contactPerson, 
        email: !!email, 
        monthlyOrders: !!monthlyOrders 
      });
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Log the data
    console.log('Quote request submitted successfully:', { 
      companyName, 
      contactPerson, 
      email, 
      website, 
      monthlyOrders, 
      additionalMessage 
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Offerte aanvraag succesvol ontvangen (debug mode)' 
      })
    };

  } catch (error) {
    console.error('Quote form error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verwerken van de offerte aanvraag',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 