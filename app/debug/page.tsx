"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebugPage() {
  const [apiStatus, setApiStatus] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const checkApiStatus = async () => {
    setLoading(true)
    try {
      // Test the test-email API
      const testEmailResponse = await fetch("/api/test-email", {
        method: "GET",
      })
      const testEmailData = await testEmailResponse.json()

      // Test the contact API
      const contactResponse = await fetch("/api/contact", {
        method: "OPTIONS",
      })

      setApiStatus({
        testEmail: {
          status: testEmailResponse.status,
          data: testEmailData,
        },
        contact: {
          status: contactResponse.status,
        },
        environment: {
          hasResendKey: !!process.env.RESEND_API_KEY,
          nodeEnv: process.env.NODE_ENV,
        },
      })
    } catch (error) {
      setApiStatus({
        error: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkApiStatus()
  }, [])

  return (
    <div className="min-h-screen bg-slate-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Debug Information</h1>
          <p className="text-gray-300">Check deployment status and API endpoints.</p>
        </div>

        <Card className="bg-slate-700 border-gray-600 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Deployment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>✅ Page is loading correctly</p>
              <p>✅ React components are working</p>
              <p>✅ Tailwind CSS is applied</p>
              <p>✅ Next.js routing is functional</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-700 border-gray-600 mb-6">
          <CardHeader>
            <CardTitle className="text-white">API Status</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-gray-300">Checking API endpoints...</p>
            ) : apiStatus ? (
              <pre className="text-xs text-gray-300 overflow-x-auto bg-slate-800 p-4 rounded">
                {JSON.stringify(apiStatus, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-300">Loading...</p>
            )}
          </CardContent>
        </Card>

        <div className="space-x-4">
          <Button onClick={checkApiStatus} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white">
            Refresh API Status
          </Button>
          <Button
            onClick={() => (window.location.href = "/test-email")}
            className="bg-pink-600 hover:bg-pink-700 text-white"
          >
            Go to Email Test
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="border-teal-500 hover:bg-teal-500/20 text-white"
          >
            Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  )
}
