'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContractSummarizer() {
  const [form, setForm] = useState({
    contractText: '',
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
      const res = await fetch('/api/tools/contract', {
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
            📄
          </div>
          <h1 className="font-serif text-4xl text-black">Contract Summarizer</h1>
        </div>
        <p className="text-gray-500 mb-2">
          Paste any contract and get a plain-English breakdown in seconds.
        </p>
        <p className="text-xs text-gray-400 mb-10">
          Note: This tool provides an AI-generated summary for informational purposes only and does not constitute legal advice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <h2 className="font-bold text-black mb-6">Paste your contract</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Contract text *
                </label>
                <textarea
                  rows={12}
                  required
                  placeholder="Paste your contract text here..."
                  value={form.contractText}
                  onChange={(e) => setForm({ ...form, contractText: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 text-white py-3 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyzing contract...' : 'Summarize Contract →'}
              </button>
            </form>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <h2 className="font-bold text-black mb-6">Plain-English Summary</h2>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-4">
                {error}
              </div>
            )}
            {loading && (
              <div className="flex items-center justify-center h-48 text-gray-400">
                <div className="text-center">
                  <div className="text-3xl mb-3 animate-pulse">📄</div>
                  <p className="text-sm">Analyzing your contract...</p>
                </div>
              </div>
            )}
            {!loading && !result && !error && (
              <div className="flex items-center justify-center h-48 text-gray-300 border-2 border-dashed border-gray-100 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl mb-3">📄</div>
                  <p className="text-sm">Your summary will appear here</p>
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
