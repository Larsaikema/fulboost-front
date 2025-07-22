import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('Quote function called with method:', event.httpMethod);

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

    // Log the data (this will be visible in Netlify Function logs)
    console.log('=== NEW QUOTE REQUEST ===');
    console.log('Company:', companyName);
    console.log('Contact Person:', contactPerson);
    console.log('Email:', email);
    console.log('Website:', website || 'Not provided');
    console.log('Monthly Orders:', monthlyOrders);
    console.log('Additional Message:', additionalMessage || 'None');
    console.log('Timestamp:', new Date().toISOString());
    console.log('==========================');

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
        message: 'Offerte aanvraag succesvol ontvangen! We sturen je binnen 24 uur een persoonlijke offerte.' 
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