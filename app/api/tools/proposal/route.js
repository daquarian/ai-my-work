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

    const { service, clientName, clientNeeds, budget, timeline } = await req.json()

    if (!service || !clientNeeds) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const prompt = `You are a professional business proposal writer. Write a compelling business proposal with the following details:

Service/Product offered: ${service}
Client name: ${clientName || 'the client'}
Client needs: ${clientNeeds}
Budget: ${budget || 'not specified'}
Timeline: ${timeline || 'not specified'}

Write a complete, professional proposal including:
1. Executive Summary
2. Understanding of Client Needs
3. Proposed Solution
4. Deliverables
5. Timeline
6. Investment/Pricing
7. Next Steps

Keep it professional, persuasive, and concise.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1200,
    })

    const result = completion.choices[0].message.content
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Proposal error:', error)
    return NextResponse.json({ error: 'Failed to generate proposal' }, { status: 500 })
  }
}
