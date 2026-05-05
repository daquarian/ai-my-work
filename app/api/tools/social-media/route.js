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

    const { topic, business, platform, tone, goal } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const platformGuide = {
      linkedin: 'LinkedIn (professional network, 1300 char limit, use line breaks, 3-5 hashtags)',
      instagram: 'Instagram (visual platform, 2200 char limit, 10-15 hashtags, engaging caption)',
      facebook: 'Facebook (conversational, 63,206 char limit, 1-2 hashtags, encourage engagement)',
      twitter: 'X/Twitter (280 char limit, punchy, 1-2 hashtags)',
    }

    const prompt = `You are a social media expert. Create a ${tone} post for ${platformGuide[platform] || platform}.

Business/Brand: ${business || 'the business'}
Topic: ${topic}
Goal: ${goal || 'engage the audience'}

Write a complete social media post including:
- The main post content
- Relevant hashtags
- A call to action

Make it compelling and optimized for ${platform}.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 600,
    })

    const result = completion.choices[0].message.content

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Social media error:', error)
    return NextResponse.json({ error: 'Failed to generate post' }, { status: 500 })
  }
}
