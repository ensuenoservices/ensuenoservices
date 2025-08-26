"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createEmailTemplate, createAutoReplyTemplate } from "@/lib/email"

export default function EmailPreviewPage() {
  const [activeTemplate, setActiveTemplate] = useState<"notification" | "autoreply">("notification")

  // Sample data for preview
  const sampleData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    subject: "Wedding DJ for June 15th, 2024",
    message: `Hi DJ EnSueño,

I'm getting married on June 15th, 2024 at the Denver Botanic Gardens and I'm looking for a wedding DJ. 

Our reception will be from 6 PM to 11 PM with about 120 guests. We love disco, funk, and classic hits that get people dancing, but we also want some romantic songs for dinner and our first dance.

Could you let me know your availability and pricing? We'd love to hear some samples of your work too.

Looking forward to hearing from you!

Best regards,
Sarah`,
    timestamp: new Date().toISOString(),
  }

  const notificationEmail = createEmailTemplate(sampleData)
  const autoReplyEmail = createAutoReplyTemplate(sampleData)

  return (
    <div className="min-h-screen bg-slate-800 text-palette-cream p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Email Template Preview</h1>
          <p className="text-palette-cream/80">Preview how your emails will look to recipients.</p>
        </div>

        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => setActiveTemplate("notification")}
            variant={activeTemplate === "notification" ? "default" : "outline"}
            className={
              activeTemplate === "notification"
                ? "bg-palette-pink hover:bg-palette-pink-hover"
                : "border-palette-teal hover:bg-palette-teal/20"
            }
          >
            Notification Email
          </Button>
          <Button
            onClick={() => setActiveTemplate("autoreply")}
            variant={activeTemplate === "autoreply" ? "default" : "outline"}
            className={
              activeTemplate === "autoreply"
                ? "bg-palette-pink hover:bg-palette-pink-hover"
                : "border-palette-teal hover:bg-palette-teal/20"
            }
          >
            Auto-Reply Email
          </Button>
        </div>

        <Card className="bg-slate-700 border-palette-teal/20 mb-6">
          <CardHeader>
            <CardTitle className="text-palette-cream">
              {activeTemplate === "notification" ? "Notification Email (to you)" : "Auto-Reply Email (to customer)"}
            </CardTitle>
            <div className="text-sm text-palette-cream/70 space-y-1">
              <p>
                <strong>From:</strong>{" "}
                {activeTemplate === "notification"
                  ? "EnSueño Services <joey.carnicle@gmail.com>"
                  : "DJ EnSueño <joey.carnicle@gmail.com>"}
              </p>
              <p>
                <strong>To:</strong> {activeTemplate === "notification" ? notificationEmail.to : autoReplyEmail.to}
              </p>
              <p>
                <strong>Subject:</strong>{" "}
                {activeTemplate === "notification" ? notificationEmail.subject : autoReplyEmail.subject}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: activeTemplate === "notification" ? notificationEmail.html : autoReplyEmail.html,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={() => (window.location.href = "/test-email")}
            variant="outline"
            className="border-palette-teal hover:bg-palette-teal/20 mr-4"
          >
            Back to Email Test
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="border-palette-teal hover:bg-palette-teal/20"
          >
            Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  )
}
