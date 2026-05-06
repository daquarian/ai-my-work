import Link from 'next/link'

const affiliates = [
  {
    name: 'Fathom',
    category: 'AI Meeting Recorder',
    desc: 'Never take meeting notes again. Fathom records, transcribes, and summarizes your calls automatically.',
    cta: 'Try Free',
    href: 'https://fathom.video/invite/Dt86jg',
    badge: 'Free Plan',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#6C3BFF"/>
        <path d="M12 14h16v3H12zM12 20h10v3H12zM12 26h13v3H12z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    category: 'CRM and Marketing',
    desc: 'The all-in-one CRM platform that helps small businesses grow faster. Free to get started.',
    cta: 'Get Started Free',
    href: 'https://hubspot.com',
    badge: 'Free Forever',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#FF7A59"/>
        <circle cx="24" cy="14" r="4" fill="white"/>
        <path d="M24 18v4M17 22a7 7 0 1 0 14 0 7 7 0 0 0-14 0z" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="22" r="2.5" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    category: 'eCommerce Platform',
    desc: 'Start, grow, and manage your online business with the worlds most trusted eCommerce platform.',
    cta: 'Start Free Trial',
    href: 'https://shopify.pxf.io/GbZ7XE',
    badge: 'Free Trial',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#96BF48"/>
        <path d="M26 11c0 0-0.3-0.2-0.8-0.2c-0.4 0-1 0.1-1.6 0.5C23 9.7 22 9 20.8 9c-3.2 0-4.8 4-5.3 6c-1.3 0.4-2.2 0.7-2.3 0.7c-0.7 0.2-0.7 0.2-0.8 0.9C12.3 17.1 10 31 10 31l14 2.5L30 31c0 0-3.8-19.5-4-20zM23 12c-0.5 0.2-1.1 0.3-1.7 0.5c0.4-1.6 1.2-2.4 1.9-2.7C23.4 10.4 23.2 11.4 23 12zM20.8 9.8c0.2 0 0.4 0 0.5 0.1c-0.8 0.4-1.7 1.4-2.1 3.4c-0.5 0.2-1 0.3-1.5 0.5C18.2 11.9 19.4 9.8 20.8 9.8zM20 26c-1.1 0-2-0.9-2-2s0.9-2 2-2s2 0.9 2 2S21.1 26 20 26z" fill="white"/>
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 px-14 pt-36 pb-24 relative overflow-hidden bg-white">
      <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-green-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-20 w-80 h-80 rounded-full bg-gray-100 blur-3xl pointer-events-none" />
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
          Six AI-powered writing tools built for small and mid-sized businesses. Emails, proposals, contracts, social posts done in seconds, not hours.
        </p>
        <div className="flex gap-4 items-center flex-wrap mb-20">
          <Link href="/sign-up">
            <button className="bg-green-500 text-white px-9 py-4 rounded-lg text-base font-semibold hover:bg-green-700 transition-all">
              Start Free No Card Needed
            </button>
          </Link>
          <Link href="#features">
            <button className="border border-gray-200 text-gray-500 px-9 py-4 rounded-lg text-base font-medium hover:border-green-500 hover:text-green-700 transition-all">
              See All 6 Tools
            </button>
          </Link>
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
      <div className="relative z-10 flex flex-col justify-center gap-4">
        <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Recommended Tools for Your Business
        </div>
        {affiliates.map((item) => (
          <div key={item.name} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-green-200 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {item.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                  <div>
                    <span className="font-bold text-black text-sm">{item.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{item.category}</span>
                  </div>
                  <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="text-xs font-semibold text-green-600">{item.cta} →</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <p className="text-xs text-gray-300 text-center mt-1">
          Some links are affiliate links. We may earn a commission at no cost to you.
        </p>
      </div>
    </section>
  )
}
