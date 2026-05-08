import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import connectDB from '@/lib/db'
import User from '@/models/User'

export async function checkPremium() {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  await connectDB()

  const user = await User.findOne({ clerkId: userId })

  if (!user || user.plan !== 'premium') {
    redirect('/upgrade')
  }

  return user
}
