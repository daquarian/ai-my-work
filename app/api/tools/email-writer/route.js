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

    const { tone, context, recipient, purpose } = await req.json()

    if (!context || !purpose) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const prompt = `You are a professional business email writer. Write a ${tone || 'professional'} email with the following details:

Recipient: ${recipient || 'the recipient'}
Purpose: ${purpose}
Context: ${context}

Write a complete email with subject line and body. Format it as:
SUBJECT: [subject line]

[email body]

Keep it concise, professional, and action-oriented.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 800,
    })

    const result = completion.choices[0].message.content

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Email writer error:', error)
    return NextResponse.json({ error: 'Failed to generate email' }, { status: 500 })
  }
}
