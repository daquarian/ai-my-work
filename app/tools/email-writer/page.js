'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function EmailWriter() {
  const [form, setForm] = useState({
    purpose: '',
    recipient: '',
    context: '',
    tone: 'professional',
  })
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult('')

    try {
      const res = await fetch('/api/tools/email-writer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setResult(data.result)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    alert('Copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-14 py-4 flex justify-between items-center">
        <div className="font-serif text-xl text-black">
          AI<span className="text-green-500">-</span>My<span className="text-green-500">-</span>Work
        </div>
        <Link href="/dashboard">
          <button className="text-sm text-gray-500 hover:text-black transition-colors">
            ← Back to Dashboard
          </button>
        </Link>
      </div>

      <div className="px-14 py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl">
            ✉️
          </div>
          <h1 className="font-serif text-4xl text-black">Email Writer</h1>
        </div>
        <p className="text-gray-500 mb-10">
          Describe your situation and we'll write a professional email for you in seconds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <h2 className="font-bold text-black mb-6">Tell us about your email</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  What is the purpose of this email? *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Follow up on a proposal I sent last week"
                  value={form.purpose}
                  onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Who are you sending it to?
                </label>
                <input
                  type="text"
                  placeholder="e.g. A potential client named Sarah"
                  value={form.recipient}
                  onChange={(e) => setForm({ ...form, recipient: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Any additional context?
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. We met at a conference last month. She showed interest in our marketing services but hasn't responded to my last email."
                  value={form.context}
                  onChange={(e) => setForm({ ...form, context: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tone
                </label>
                <select
                  value={form.tone}
                  onChange={(e) => setForm({ ...form, tone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 transition-colors"
                >
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="persuasive">Persuasive</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 text-white py-3 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Writing your email...' : 'Generate Email →'}
              </button>
            </form>
          </div>

          {/* Result */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <h2 className="font-bold text-black mb-6">Your generated email</h2>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-4">
                {error}
              </div>
            )}
            {loading && (
              <div className="flex items-center justify-center h-48 text-gray-400">
                <div className="text-center">
                  <div className="text-3xl mb-3 animate-pulse">✉️</div>
                  <p className="text-sm">Writing your email...</p>
                </div>
              </div>
            )}
            {!loading && !result && !error && (
              <div className="flex items-center justify-center h-48 text-gray-300 border-2 border-dashed border-gray-100 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl mb-3">✉️</div>
                  <p className="text-sm">Your email will appear here</p>
                </div>
              </div>
            )}
            {result && (
              <div>
                <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-sans bg-gray-50 rounded-xl p-5 mb-4 max-h-96 overflow-y-auto">
                  {result}
                </pre>
                <button
                  onClick={handleCopy}
                  className="w-full border border-green-400 text-green-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-50 transition-all"
                >
                  Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
