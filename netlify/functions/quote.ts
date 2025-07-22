import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

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

    // Log the data
    console.log('=== NEW QUOTE REQUEST ===');
    console.log('Company:', companyName);
    console.log('Contact Person:', contactPerson);
    console.log('Email:', email);
    console.log('Website:', website || 'Not provided');
    console.log('Monthly Orders:', monthlyOrders);
    console.log('Additional Message:', additionalMessage || 'None');
    console.log('Timestamp:', new Date().toISOString());
    console.log('==========================');

    // Send email via SendGrid if API key is configured
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Email to business
        const businessEmail = {
          to: 'hello@fulboost.nl',
          from: 'hello@fulboost.nl', // Must be verified in SendGrid
          subject: `Nieuwe offerte aanvraag van ${companyName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #DC2626;">Nieuwe Offerte Aanvraag</h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Bedrijfsgegevens:</h3>
                <p><strong>Bedrijfsnaam:</strong> ${companyName}</p>
                <p><strong>Contactpersoon:</strong> ${contactPerson}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Website:</strong> ${website || 'Niet opgegeven'}</p>
                <p><strong>Maandelijkse orders:</strong> ${monthlyOrders}</p>
              </div>
              
              ${additionalMessage ? `
              <div style="background-color: #fff; padding: 20px; border-left: 4px solid #DC2626; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Aanvullende informatie:</h3>
                <p style="line-height: 1.6; color: #555;">${additionalMessage.replace(/\n/g, '<br>')}</p>
              </div>
              ` : ''}
              
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
          subject: 'Offerte aanvraag ontvangen - Fulboost',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #DC2626;">Offerte Aanvraag Ontvangen!</h2>
              
              <p>Hallo ${contactPerson},</p>
              
              <p>We hebben je offerte aanvraag ontvangen en gaan er direct mee aan de slag.</p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Jouw aanvraag:</h3>
                <p><strong>Bedrijf:</strong> ${companyName}</p>
                <p><strong>Maandelijkse orders:</strong> ${monthlyOrders}</p>
                ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
                ${additionalMessage ? `<p><strong>Extra info:</strong> ${additionalMessage}</p>` : ''}
              </div>
              
              <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                <h3 style="color: #333; margin-top: 0;">Wat gebeurt er nu?</h3>
                <ul style="color: #555; line-height: 1.6;">
                  <li>We analyseren jouw specifieke behoeften</li>
                  <li>We maken een persoonlijke offerte op maat</li>
                  <li>We sturen je binnen 24 uur een gedetailleerde prijsopgave</li>
                  <li>We plannen een vrijblijvend gesprek om alles toe te lichten</li>
                </ul>
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
        message: 'Offerte aanvraag succesvol verzonden! We sturen je binnen 24 uur een persoonlijke offerte.' 
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