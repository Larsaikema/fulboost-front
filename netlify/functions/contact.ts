import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
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
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@fulboost.nl', // Your business email
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

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
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

    await transporter.sendMail(confirmationMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Bericht succesvol verzonden' 
      })
    };

  } catch (error) {
    console.error('Email error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Er is een fout opgetreden bij het verzenden van het bericht' 
      })
    };
  }
}; 