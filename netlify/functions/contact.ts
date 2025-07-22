import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

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

    // Log the data
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('=====================================');

    // Send email via SendGrid if API key is configured
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Email to business
        const businessEmail = {
          to: 'hello@fulboost.nl',
          from: 'hello@fulboost.nl', // Must be verified in SendGrid
          subject: `Nieuw contactformulier bericht van ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #DC2626;">Nieuw Contactformulier Bericht</h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Contactgegevens:</h3>
                <p><strong>Naam:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Bedrijf:</strong> ${company}</p>
              </div>
              
              <div style="background-color: #fff; padding: 20px; border-left: 4px solid #DC2626; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Bericht:</h3>
                <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #2d5a2d; font-size: 14px;">
                  <strong>Automatisch gegenereerd bericht</strong><br>
                  Verzonden op: ${new Date().toLocaleString('nl-NL')}
                </p>
              </div>
            </div>
          `
        };

        await sgMail.send(businessEmail);
        console.log('Business email sent successfully');

        // Confirmation email to customer
        const confirmationEmail = {
          to: email,
          from: 'hello@fulboost.nl',
          subject: 'Bedankt voor je bericht - Fulboost',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #DC2626;">Bedankt voor je bericht!</h2>
              
              <p>Hallo ${name},</p>
              
              <p>We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.</p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Jouw bericht:</h3>
                <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <p>Met vriendelijke groet,<br>
              <strong>Team Fulboost</strong></p>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #666;">
                Fulboost - Jouw Groei, Onze Missie<br>
                Jagerserf 32, Ermelo<br>
                hello@fulboost.nl
              </p>
            </div>
          `
        };

        await sgMail.send(confirmationEmail);
        console.log('Confirmation email sent successfully');

      } catch (emailError) {
        console.error('SendGrid email error:', emailError);
        // Continue even if email fails
      }
    } else {
      console.log('SendGrid API key not configured, skipping email sending');
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
        message: 'Bericht succesvol verzonden! We nemen binnen 24 uur contact met je op.' 
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