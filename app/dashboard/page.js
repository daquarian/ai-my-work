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

export default async function Dashboard() {
  const user = await currentUser()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-14 py-4 flex justify-between items-center">
        <div className="font-serif text-xl text-black">
          AI<span className="text-mint">-</span>My<span className="text-mint">-</span>Work
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {user?.firstName ? `Welcome back, ${user.firstName}` : 'Welcome back'}
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Content */}
      <div className="px-14 py-12">
        <h1 className="font-serif text-4xl text-black mb-2">Your AI Tools</h1>
        <p className="text-gray-500 mb-10">Choose a tool to get started. Free tools are available immediately.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link href={tool.href} key={tool.title}>
              <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-mint-mid hover:-translate-y-0.5 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-11 h-11 bg-mint-light rounded-xl flex items-center justify-center text-xl">
                    {tool.icon}
                  </div>
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    tool.plan === 'free'
                      ? 'bg-gray-100 text-gray-400'
                      : 'bg-mint-light text-mint-dark border border-mint-mid'
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
        <div className="mt-10 bg-mint-light border border-mint-mid rounded-2xl p-8 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h3 className="font-serif text-2xl text-black mb-1">Unlock All 6 Tools</h3>
            <p className="text-sm text-gray-500">Upgrade to Premium for $19/month and get full access. Cancel anytime.</p>
          </div>
          <Link href="/upgrade">
            <button className="bg-mint text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-mint-dark transition-all">
              Upgrade to Premium →
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
