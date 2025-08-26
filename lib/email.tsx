// Email configuration and utilities
// You can integrate with services like Resend, SendGrid, or Nodemailer

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
}

// Email templates
export const createEmailTemplate = (data: EmailData) => {
  return {
    to: "Joey.Carnicle@gmail.com", // Your email
    from: "joey.carnicle@gmail.com", // Updated sender domain
    replyTo: data.email,
    subject: `Wedding DJ Inquiry: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #E91E63;">New Wedding DJ Inquiry</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Date:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #E91E63;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            This inquiry was submitted through the EnSueño Services website contact form.
          </p>
        </div>
      </div>
    `,
    text: `
New Wedding DJ Inquiry

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Date: ${new Date(data.timestamp).toLocaleString()}

Message:
${data.message}

---
This inquiry was submitted through the EnSueño Services website.
    `,
  }
}

// Auto-reply template
export const createAutoReplyTemplate = (data: EmailData) => {
  return {
    to: data.email,
    from: "joey.carnicle@gmail.com", // Updated sender domain
    subject: "Thank you for your wedding DJ inquiry - EnSueño Services",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #E91E63;">Thank you for your inquiry!</h2>
        
        <p>Hi ${data.name},</p>
        
        <p>Thank you for reaching out to EnSueño Services for your wedding DJ needs. We've received your message and will get back to you within 24 hours.</p>
        
        <div style="background: #f8f4e3; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Your inquiry details:</h3>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        
        <p>In the meantime, feel free to check out our <a href="https://www.instagram.com/dj_ensueno/" style="color: #E91E63;">Instagram</a> for recent performances and <a href="https://soundcloud.com/carnicle" style="color: #E91E63;">SoundCloud</a> for music samples.</p>
        
        <p>Looking forward to making your special day unforgettable!</p>
        
        <p>Best regards,<br>
        DJ EnSueño<br>
        EnSueño Services</p>
        
        <div style="margin-top: 30px; padding: 15px; background: #e3f2fd; border-radius: 8px; font-size: 14px; color: #666;">
          <p>EnSueño Services - Professional Wedding DJ & Event Entertainment</p>
          <p>Email: Joey.Carnicle@gmail.com | Website: www.ensuenoservices.com</p>
        </div>
      </div>
    `,
  }
}
