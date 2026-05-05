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

    const { topic, audience, tone, keywords, length } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const wordCount = {
      short: '400-600 words',
      medium: '800-1000 words',
      long: '1200-1500 words',
    }

    const prompt = `You are an expert blog writer. Write a compelling, SEO-optimized blog article with the following details:

Topic: ${topic}
Target audience: ${audience || 'small and mid-sized business owners'}
Tone: ${tone || 'professional and informative'}
Keywords to include: ${keywords || 'not specified'}
Length: ${wordCount[length] || '800-1000 words'}

Write a complete blog article including:
1. An attention-grabbing headline
2. An engaging introduction
3. Well-structured body with subheadings
4. Practical takeaways or tips
5. A strong conclusion with a call to action

Make it SEO-friendly, engaging, and valuable to the reader.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
    })

    const result = completion.choices[0].message.content
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Blog error:', error)
    return NextResponse.json({ error: 'Failed to generate blog post' }, { status: 500 })
  }
}
