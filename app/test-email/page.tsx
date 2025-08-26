"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, Mail, AlertCircle } from "lucide-react"

interface TestResult {
  success: boolean
  message: string
  details?: any
  error?: string
}

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [testResult, setTestResult] = useState<TestResult | null>(null)

  const runEmailTest = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        message: "Failed to run email test",
        error: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const testContactForm = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "joey.carnicle@gmail.com",
          subject: "Test Contact Form Submission",
          message:
            "This is a test submission through the actual contact form API to verify everything is working correctly.",
        }),
      })

      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        message: "Failed to test contact form",
        error: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 text-palette-cream p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Email System Test</h1>
          <p className="text-palette-cream/80">Test the email functionality for the EnSueño Services contact form.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-slate-700 border-palette-teal/20">
            <CardHeader>
              <CardTitle className="flex items-center text-palette-cream">
                <Mail className="h-5 w-5 mr-2" />
                Direct Email Test
              </CardTitle>
              <CardDescription className="text-palette-cream/70">
                Test the email templates and Resend integration directly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={runEmailTest}
                disabled={isLoading}
                className="w-full bg-palette-pink hover:bg-palette-pink-hover"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending Test Emails...
                  </>
                ) : (
                  "Send Test Emails"
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 border-palette-teal/20">
            <CardHeader>
              <CardTitle className="flex items-center text-palette-cream">
                <Mail className="h-5 w-5 mr-2" />
                Contact Form Test
              </CardTitle>
              <CardDescription className="text-palette-cream/70">
                Test the complete contact form submission flow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={testContactForm}
                disabled={isLoading}
                className="w-full bg-palette-blue hover:bg-palette-blue/80"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Testing Contact Form...
                  </>
                ) : (
                  "Test Contact Form"
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {testResult && (
          <Card className={`mb-8 ${testResult.success ? "border-green-500/50" : "border-red-500/50"}`}>
            <CardHeader>
              <CardTitle className="flex items-center text-palette-cream">
                {testResult.success ? (
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                ) : (
                  <XCircle className="h-5 w-5 mr-2 text-red-400" />
                )}
                Test Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className={`font-medium ${testResult.success ? "text-green-400" : "text-red-400"}`}>
                    {testResult.message}
                  </p>
                </div>

                {testResult.error && (
                  <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3">
                    <p className="text-red-400 text-sm font-medium">Error Details:</p>
                    <p className="text-red-300 text-sm mt-1">{testResult.error}</p>
                  </div>
                )}

                {testResult.details && (
                  <div className="bg-slate-600 rounded-lg p-4">
                    <p className="text-palette-cream font-medium mb-2">Details:</p>
                    <pre className="text-xs text-palette-cream/80 overflow-x-auto">
                      {JSON.stringify(testResult.details, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-slate-700 border-palette-teal/20">
          <CardHeader>
            <CardTitle className="flex items-center text-palette-cream">
              <AlertCircle className="h-5 w-5 mr-2" />
              What to Expect
            </CardTitle>
          </CardHeader>
          <CardContent className="text-palette-cream/80">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-palette-cream mb-2">If emails are working correctly:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>You'll receive a notification email at joey.carnicle@gmail.com</li>
                  <li>You'll receive an auto-reply email at joey.carnicle@gmail.com</li>
                  <li>Both emails will have "[TEST]" in the subject line</li>
                  <li>The test result will show success with email IDs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-palette-cream mb-2">If there are issues:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Check that RESEND_API_KEY is set in Vercel environment variables</li>
                  <li>Verify the API key is valid in your Resend dashboard</li>
                  <li>Check Vercel function logs for detailed error messages</li>
                  <li>Ensure joey.carnicle@gmail.com is verified in Resend (if using custom domain)</li>
                </ul>
              </div>

              <div className="bg-palette-teal/10 border border-palette-teal/30 rounded-lg p-3">
                <p className="text-sm">
                  <strong>Note:</strong> This test page should be removed before going live in production.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
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
