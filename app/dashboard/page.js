import { UserButton, currentUser } from '@clerk/nextjs'
import Link from 'next/link'

const tools = [
  { icon: '✉️', title: 'Email Writer', desc: 'Write professional emails in seconds.', href: '/tools/email-writer', plan: 'free' },
  { icon: '📱', title: 'Social Media Posts', desc: 'Create scroll-stopping social content.', href: '/tools/social-media', plan: 'free' },
  { icon: '📋', title: 'Proposal Generator', desc: 'Win more deals with polished proposals.', href: '/tools/proposal-generator', plan: 'premium' },
  { icon: '📄', title: 'Contract Summarizer', desc: 'Understand any contract in plain English.', href: '/tools/contract-summarizer', plan: 'premium' },
  { icon: '✍️', title: 'Blog Article Writer', desc: 'Publish SEO-ready blog posts fast.', href: '/tools/blog-writer', plan: 'premium' },
  { icon: '🎙️', title: 'Meeting Notes Summarizer', desc: 'Turn transcripts into clear action items.', href: '/tools/meeting-notes', plan: 'premium' },
]

export default async function Dashboard({ searchParams }) {
  const user = await currentUser()
  const upgraded = searchParams?.upgraded === 'true'

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-14 py-4 flex justify-between items-center">
        <div className="font-serif text-xl text-black">
          AI<span className="text-green-500">-</span>My<span className="text-green-500">-</span>Work
        </div>
        <div className="flex items-center gap-4">
          <Link href="/account">
            <button className="text-sm text-gray-500 hover:text-black transition-colors">
              My Account
            </button>
          </Link>
          <span className="text-sm text-gray-500">
            {user?.firstName ? `Welcome back, ${user.firstName}` : 'Welcome back'}
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Content */}
      <div className="px-14 py-12">

        {/* Upgrade success message */}
        {upgraded && (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-6 py-4 mb-8 flex items-center gap-3">
            <span className="text-2xl">🎉</span>
            <div>
              <div className="font-semibold">Welcome to Premium!</div>
              <div className="text-sm">You now have full access to all 6 AI writing tools.</div>
            </div>
          </div>
        )}

        <h1 className="font-serif text-4xl text-black mb-2">Your AI Tools</h1>
        <p className="text-gray-500 mb-10">Choose a tool to get started. Free tools are available immediately.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link href={tool.href} key={tool.title}>
              <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-green-200 hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center text-xl">
                    {tool.icon}
                  </div>
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    tool.plan === 'free'
                      ? 'bg-gray-100 text-gray-400'
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}>
                    {tool.plan === 'free' ? 'Free' : 'Premium'}
                  </span>
                </div>
                <h3 className="font-bold text-black mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Upgrade banner */}
        <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h3 className="font-serif text-2xl text-black mb-1">Unlock All 6 Tools</h3>
            <p className="text-sm text-gray-500">Upgrade to Premium for $19/month and get full access. Cancel anytime.</p>
          </div>
          <Link href="/upgrade">
            <button className="bg-green-500 text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all">
              Upgrade to Premium →
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
