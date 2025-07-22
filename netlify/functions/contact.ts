import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  console.log('Contact function called with method:', event.httpMethod);
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
    
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      console.log('Missing fields:', { name: !!name, email: !!email, company: !!company, message: !!message });
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Log the data
    console.log('Contact form submitted successfully:', { name, email, company, message });

    // Try to send email via webhook (you can use services like Zapier, Make.com, or webhook.site)
    try {
      const webhookUrl = process.env.WEBHOOK_URL || 'https://webhook.site/your-unique-url';
      
      const emailData = {
        to: 'hello@fulboost.nl',
        from: email,
        subject: `Nieuw contactformulier bericht van ${name}`,
        name: name,
        email: email,
        company: company,
        message: message,
        timestamp: new Date().toISOString()
      };

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      console.log('Webhook response status:', webhookResponse.status);
    } catch (webhookError) {
      console.log('Webhook failed, but continuing:', webhookError);
    }

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