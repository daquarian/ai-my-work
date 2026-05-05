import { UserButton, currentUser } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Account() {
  const user = await currentUser()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-14 py-4 flex justify-between items-center">
        <div className="font-serif text-xl text-black">
          AI<span className="text-green-500">-</span>My<span className="text-green-500">-</span>Work
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <button className="text-sm text-gray-500 hover:text-black transition-colors">
              ← Back to Dashboard
            </button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className="px-14 py-12 max-w-2xl">
        <h1 className="font-serif text-4xl text-black mb-2">My Account</h1>
        <p className="text-gray-500 mb-10">Manage your profile and subscription.</p>

        {/* Profile */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-6">
          <h2 className="font-bold text-black mb-6">Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-2xl font-bold text-green-700">
              {user?.firstName?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() || 'U'}
            </div>
            <div>
              <div className="font-semibold text-black">
                {user?.firstName} {user?.lastName}
              </div>
              <div className="text-sm text-gray-500">
                {user?.emailAddresses?.[0]?.emailAddress}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            To update your name, email, or password click the profile icon in the top right corner.
          </p>
        </div>

        {/* Subscription */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-6">
          <h2 className="font-bold text-black mb-6">Subscription</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-black">Current Plan</div>
                <div className="text-sm text-gray-500 mt-1">Manage your subscription below</div>
              </div>
              <Link href="/upgrade">
                <button className="bg-green-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all">
                  Upgrade to Premium
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-black mb-2">Cancel Subscription</h3>
            <p className="text-sm text-gray-500 mb-4">
              To cancel your subscription, click below to access the Stripe customer portal where you can cancel, pause, or update your plan.
            </p>
            <a href="https://billing.stripe.com/p/login/test_28o5kV1Wn3SC4Za144" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold hover:border-red-300 hover:text-red-600 transition-all">
                Manage / Cancel Subscription →
              </button>
            </a>
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-white border border-red-100 rounded-2xl p-8">
          <h2 className="font-bold text-red-600 mb-4">Sign Out</h2>
          <p className="text-sm text-gray-500 mb-4">
            Sign out of your AI-My-Work account on this device.
          </p>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </main>
  )
}
