import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

export const handler: Handler = async (event) => {
  console.log('=== TEST EMAIL FUNCTION CALLED ===');
  console.log('SendGrid API Key exists:', !!process.env.SENDGRID_API_KEY);
  console.log('SendGrid API Key length:', process.env.SENDGRID_API_KEY?.length || 0);
  
  if (process.env.SENDGRID_API_KEY) {
    console.log('API Key starts with:', process.env.SENDGRID_API_KEY.substring(0, 10) + '...');
  }

  try {
    // Initialize SendGrid
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      console.log('SendGrid initialized successfully');
    } else {
      console.log('No SendGrid API key found');
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          success: false, 
          message: 'SendGrid API key not configured',
          debug: {
            hasApiKey: false,
            envVars: Object.keys(process.env).filter(key => key.includes('SENDGRID'))
          }
        })
      };
    }

    // Test email
    const testEmail = {
      to: 'hello@fulboost.nl',
      from: 'hello@fulboost.nl',
      subject: 'Test Email van Fulboost Website',
      text: 'Dit is een test email om te controleren of SendGrid werkt.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DC2626;">Test Email - Fulboost Website</h2>
          <p>Dit is een test email om te controleren of SendGrid correct is geconfigureerd.</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString('nl-NL')}</p>
          <p><strong>API Key configured:</strong> ${!!process.env.SENDGRID_API_KEY}</p>
        </div>
      `
    };

    console.log('Attempting to send test email...');
    const result = await sgMail.send(testEmail);
    console.log('SendGrid response:', result);
    console.log('Email sent successfully!');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Test email verzonden! Check hello@fulboost.nl',
        debug: {
          hasApiKey: true,
          apiKeyLength: process.env.SENDGRID_API_KEY?.length,
          sendGridResponse: result
        }
      })
    };

  } catch (error) {
    console.error('SendGrid test error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'SendGrid test failed',
        details: error instanceof Error ? error.message : 'Unknown error',
        debug: {
          hasApiKey: !!process.env.SENDGRID_API_KEY,
          apiKeyLength: process.env.SENDGRID_API_KEY?.length,
          errorType: error.constructor.name
        }
      })
    };
  }
}; 