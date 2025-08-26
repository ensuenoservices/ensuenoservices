import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { createEmailTemplate, createAutoReplyTemplate } from "@/lib/email"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Simple rate limiting function
function rateLimit(ip: string, limit = 5, windowMs: number = 15 * 60 * 1000) {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

// Validation function
function validateFormData(data: any) {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long")
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please provide a valid email address")
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.push("Subject must be at least 3 characters long")
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  }

  return errors
}

// Email sending function using Resend
async function sendEmails(formData: any) {
  try {
    // Create email templates
    const notificationEmail = createEmailTemplate(formData)
    const autoReplyEmail = createAutoReplyTemplate(formData)

    // Send notification email to you
    const notificationResult = await resend.emails.send({
      from: "EnSueño Services <noreply@ensuenoservices.com>", // Updated sender
      to: notificationEmail.to,
      replyTo: notificationEmail.replyTo,
      subject: notificationEmail.subject,
      html: notificationEmail.html,
    })

    // Send auto-reply to customer
    const autoReplyResult = await resend.emails.send({
      from: "DJ EnSueño <noreply@ensuenoservices.com>", // Updated sender
      to: autoReplyEmail.to,
      subject: autoReplyEmail.subject,
      html: autoReplyEmail.html,
    })

    return {
      success: true,
      notificationId: notificationResult.data?.id,
      autoReplyId: autoReplyResult.data?.id,
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set")
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please contact us directly at joey.carnicle@gmail.com",
        },
        { status: 500 },
      )
    }

    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

    // Apply rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Parse form data
    const formData = await request.json()

    // Validate form data
    const validationErrors = validateFormData(formData)
    if (validationErrors.length > 0) {
      return NextResponse.json({ success: false, errors: validationErrors }, { status: 400 })
    }

    // Sanitize data
    const sanitizedData = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
      ip: ip,
    }

    // Send emails
    const emailResult = await sendEmails(sanitizedData)

    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send email")
    }

    // Log successful submission
    console.log("Form submission successful:", {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      timestamp: sanitizedData.timestamp,
      notificationId: emailResult.notificationId,
      autoReplyId: emailResult.autoReplyId,
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We've sent you a confirmation email and will get back to you soon.",
      messageId: emailResult.notificationId,
    })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong sending your message. Please try again or contact us directly at joey.carnicle@gmail.com",
      },
      { status: 500 },
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
