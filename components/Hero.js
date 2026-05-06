import Link from 'next/link'

export default function Hero() {
  const affiliates = [
    {
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#5B21B6"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="serif">f</text>
        </svg>
      ),
      name: 'Fathom',
      category: 'AI Meeting Recorder',
      desc: 'Never take meeting notes again. Fathom records, transcribes, and summarizes your calls automatically.',
      cta: 'Try Free →',
      href: 'https://fathom.video/invite/Dt86jg',
      badge: 'Free Plan Available',
    },
    {
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#FF7A59"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Hs</text>
        </svg>
      ),
      name: 'HubSpot',
      category: 'CRM & Marketing',
      desc: 'The all-in-one CRM platform that helps small businesses grow faster. Free to get started.',
      cta: 'Get Started Free →',
      href: 'https://hubspot.com',
      badge: 'Free Forever Plan',
    },
    {
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#7D2AE8"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Ca</text>
        </svg>
      ),
      name: 'Canva',
      category: 'Design & Branding',
      desc: 'Create stunning graphics, presentations, and marketing materials in minutes. No design skills needed.',
      cta: 'Design for Free →',
      href: 'https://canva.com',
      badge: 'Free Plan Available',
    },
  ]

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 px-14 pt-36 pb-24 relative overflow-hidden bg-white">
      <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-green-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-20 w-80 h-80 rounded-full bg-gray-100 blur-3xl pointer-events-none" />

      {/* Left — Hero content */}
      <div className="relative z-10 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7 w-fit">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          AI Writing Tools for Business
        </div>

        <h1 className="font-serif text-7xl leading-tight tracking-tight text-black mb-7 max-w-2xl">
          Write Less.<br />
          <em className="text-green-700">Do More.</em>
        </h1>

        <p className="text-lg text-gray-500 max-w-lg mb-11 leading-relaxed">
          Six AI-powered writing tools built for small and mid-sized businesses. Emails, proposals, contracts, social posts — done in seconds, not hours.
        </p>

        <div className="flex gap-4 items-center flex-wrap mb-20">
          <Link href="/sign-up">
            <button className="bg-green-500 text-white px-9 py-4 rounded-lg text-base font-semibold hover:bg-green-700 transition-all hover:-translate-y-0.5">
              Start Free — No Card Needed
            </button>
          </Link>
          <a href="#features">
            <button className="border border-gray-200 text-gray-500 px-9 py-4 rounded-lg text-base font-medium hover:border-green-500 hover:text-green-700 transition-all">
              See All 6 Tools →
            </button>
          </a>
        </div>

        <div className="flex max-w-xl border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="flex-1 px-6 py-5 border-r border-gray-100 text-center">
            <div className="font-serif text-4xl text-black">6+</div>
            <div className="text-xs text-gray-400 mt-1 font-medium">AI Tools</div>
          </div>
          <div className="flex-1 px-6 py-5 border-r border-gray-100 text-center">
            <div className="font-serif text-4xl text-black">10x</div>
            <div className="text-xs text-gray-400 mt-1 font-medium">Faster Writing</div>
          </div>
          <div className="flex-1 px-6 py-5 border-r border-gray-100 text-center">
            <div className="font-serif text-4xl text-black">$19</div>
            <div className="text-xs text-gray-400 mt-1 font-medium">Per Month Premium</div>
          </div>
          <div className="flex-1 px-6 py-5 text-center">
            <div className="font-serif text-4xl text-black">2</div>
            <div className="text-xs text-gray-400 mt-1 font-medium">Simple Plans</div>
          </div>
        </div>
      </div>

      {/* Right — Affiliate cards */}
      <div className="relative z-10 flex flex-col justify-center gap-4">
        <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Recommended Tools for Your Business
        </div>
        {affiliates.map((a) => (
          
            key={a.name}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-green-200 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {a.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                  <div>
                    <span className="font-bold text-black text-sm">{a.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{a.category}</span>
                  </div>
                  <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {a.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{a.desc}</p>
                <span className="text-xs font-semibold text-green-600 hover:text-green-800">
                  {a.cta}
                </span>
              </div>
            </div>
          </a>
        ))}
        <p className="text-xs text-gray-300 text-center mt-1">
          * Some links are affiliate links. We may earn a commission at no cost to you.
        </p>
      </div>
    </section>
  )
}
