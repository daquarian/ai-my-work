import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-14 pt-36 pb-24 relative overflow-hidden bg-white">
      <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-green-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-20 w-80 h-80 rounded-full bg-gray-100 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7">
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
            <button className="bg-green-500 text-white px-9 py-4 rounded-lg text-base font-semibold hover:bg-green-700 transition-all">
              Start Free — No Card Needed
            </button>
          </Link>
          <a href="#features">
            <button className="border border-gray-200 text-gray-500 px-9 py-4 rounded-lg text-base font-medium hover:border-green-500 hover:text-green-700 transition-all">
              See All 6 Tools
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
    </section>
  )
}
