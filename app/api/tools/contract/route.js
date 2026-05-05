import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { contractText } = await req.json()

    if (!contractText) {
      return NextResponse.json({ error: 'Missing contract text' }, { status: 400 })
    }

    const prompt = `You are a legal document analyst. Analyze the following contract and provide a clear, plain-English summary.

Contract text:
${contractText}

Provide a structured summary including:
1. **Parties Involved** — Who are the parties in this contract?
2. **Key Terms** — What are the main terms and conditions?
3. **Obligations** — What does each party need to do?
4. **Payment Terms** — Any payment details or financial obligations?
5. **Duration & Termination** — How long is the contract and how can it be ended?
6. **Red Flags** — Any concerning clauses or unusual terms to be aware of?
7. **Overall Summary** — A 2-3 sentence plain English summary of what this contract means.

Note: This is an AI-generated summary for informational purposes only and does not constitute legal advice.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1200,
    })

    const result = completion.choices[0].message.content
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Contract error:', error)
    return NextResponse.json({ error: 'Failed to summarize contract' }, { status: 500 })
  }
}
