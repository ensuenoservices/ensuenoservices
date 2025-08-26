import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { createEmailTemplate, createAutoReplyTemplate } from "@/lib/email"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY environment variable is not set",
        },
        { status: 500 },
      )
    }

    // Create test form data
    const testData = {
      name: "Test Customer",
      email: "joey.carnicle@gmail.com", // Send test to your own email
      subject: "Test Wedding DJ Inquiry",
      message:
        "This is a test message to verify the email functionality is working correctly. If you receive this email, the contact form system is properly configured!",
      timestamp: new Date().toISOString(),
      ip: "127.0.0.1",
    }

    // Create email templates
    const notificationEmail = createEmailTemplate(testData)
    const autoReplyEmail = createAutoReplyTemplate(testData)

    console.log("Sending test emails...")

    // Send notification email to you
    const notificationResult = await resend.emails.send({
      from: "EnSueño Services <joey.carnicle@gmail.com>",
      to: notificationEmail.to,
      replyTo: notificationEmail.replyTo,
      subject: `[TEST] ${notificationEmail.subject}`,
      html: notificationEmail.html,
    })

    console.log("Notification email result:", notificationResult)

    // Send auto-reply to test email (your email)
    const autoReplyResult = await resend.emails.send({
      from: "DJ EnSueño <joey.carnicle@gmail.com>",
      to: autoReplyEmail.to,
      subject: `[TEST] ${autoReplyEmail.subject}`,
      html: autoReplyEmail.html,
    })

    console.log("Auto-reply email result:", autoReplyResult)

    return NextResponse.json({
      success: true,
      message: "Test emails sent successfully!",
      details: {
        notificationId: notificationResult.data?.id,
        autoReplyId: autoReplyResult.data?.id,
        testData: testData,
      },
    })
  } catch (error) {
    console.error("Test email error:", error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send test emails",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Email test endpoint. Use POST to send test emails.",
    status: "ready",
    hasApiKey: !!process.env.RESEND_API_KEY,
  })
}
