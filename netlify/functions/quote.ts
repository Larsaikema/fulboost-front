import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

// Email transporter setup for TransIP
const transporter = nodemailer.createTransporter({
  host: 'smtp.transip.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

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

    // Email content for business
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@fulboost.nl', // Your business email
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

    // Send email to business
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
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

    await transporter.sendMail(confirmationMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Offerte aanvraag succesvol verzonden' 
      })
    };

  } catch (error) {
    console.error('Email error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verzenden van de offerte aanvraag' 
      })
    };
  }
}; 