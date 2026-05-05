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

    const { notes, meetingName, attendees } = await req.json()

    if (!notes) {
      return NextResponse.json({ error: 'Missing meeting notes' }, { status: 400 })
    }

    const prompt = `You are an expert meeting facilitator. Summarize the following meeting notes into a clear, actionable summary.

Meeting name: ${meetingName || 'Team Meeting'}
Attendees: ${attendees || 'not specified'}

Raw meeting notes:
${notes}

Provide a structured summary including:
1. **Meeting Overview** — Brief description of the meeting purpose and context
2. **Key Discussion Points** — Main topics discussed
3. **Decisions Made** — Any decisions or agreements reached
4. **Action Items** — Specific tasks with owner and deadline if mentioned
5. **Next Steps** — What happens next
6. **Follow-up Required** — Any items needing follow-up

Keep it concise, clear and actionable.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    })

    const result = completion.choices[0].message.content
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Meeting notes error:', error)
    return NextResponse.json({ error: 'Failed to summarize meeting notes' }, { status: 500 })
  }
}
