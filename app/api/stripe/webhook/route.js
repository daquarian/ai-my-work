import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import connectDB from '@/lib/db'
import User from '@/models/User'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  await connectDB()

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      const userId = session.metadata?.userId
      const customerId = session.customer
      const subscriptionId = session.subscription

      if (userId) {
        await User.findOneAndUpdate(
          { clerkId: userId },
          {
            clerkId: userId,
            email: session.customer_email || '',
            plan: 'premium',
            stripeCustomerId: customerId,
            stripeSubscriptionId: subscriptionId,
            updatedAt: new Date(),
          },
          { upsert: true, new: true }
        )
        console.log(`User ${userId} upgraded to premium`)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object
      const customerId = subscription.customer

      await User.findOneAndUpdate(
        { stripeCustomerId: customerId },
        { plan: 'free', stripeSubscriptionId: null, updatedAt: new Date() }
      )
      console.log(`Subscription cancelled for customer ${customerId}`)
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
