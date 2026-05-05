'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Upgrade() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleUpgrade = async () => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      // Redirect to Stripe checkout
      window.location.href = data.url
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Back link */}
        <Link href="/dashboard">
          <button className="text-sm text-gray-400 hover:text-black transition-colors mb-8 block">
            ← Back to Dashboard
          </button>
        </Link>

        {/* Card */}
        <div className="bg-white border border-green-200 rounded-2xl p-10 text-center">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
            ⚡
          </div>
          <h1 className="font-serif text-4xl text-black mb-3">
            Upgrade to Premium
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Get full access to all 6 AI writing tools. Cancel anytime directly from your account dashboard.
          </p>

          {/* Features */}
          <ul className="text-left space-y-3 mb-8">
            {[
              'Email Writer',
              'Social Media Posts',
              'Proposal Generator',
              'Contract Summarizer',
              'Blog Article Writer',
              'Meeting Notes Summarizer',
            ].map((tool) => (
              <li key={tool} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-500 font-bold">✓</span>
                {tool}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="bg-green-50 rounded-xl p-5 mb-8">
            <div className="font-serif text-5xl text-black mb-1">
              $19<span className="text-lg font-sans font-normal text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-500">Cancel anytime. No hidden fees.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-4">
              {error}
            </div>
          )}

          <button
            onClick={handleUpgrade}
            disabled={loading}
            className="w-full bg-green-500 text-white py-4 rounded-xl text-base font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Redirecting to checkout...' : 'Upgrade Now — $19/month →'}
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Secured by Stripe. Cancel anytime from your dashboard.
          </p>
        </div>
      </div>
    </main>
  )
}
