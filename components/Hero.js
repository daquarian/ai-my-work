import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-14 pt-36 pb-24 relative overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute -top-24 -right-16 w-[650px] h-[650px] rounded-full bg-mint-light opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-20 w-[400px] h-[400px] rounded-full bg-gray-100 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-mint-light border border-mint-mid text-mint-dark px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7">
          <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse" />
          AI Writing Tools for Business
        </div>

        {/* Headline */}
        <h1 className="font-serif text-7xl leading-tight tracking-tight text-black mb-7 max-w-2xl">
          Write Less.<br />
          <em className="text-mint-dark">Do More.</em>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-500 max-w-lg mb-11 leading-relaxed">
          Six AI-powered writing tools built for small and mid-sized businesses. Emails, proposals, contracts, social posts — done in seconds, not hours.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 items-center flex-wrap mb-20">
          <Link href="/sign-up">
            <button className="bg-mint text-white px-9 py-4 rounded-lg text-base font-semibold hover:bg-mint-dark transition-all hover:-translate-y-0.5">
              Start Free — No Card Needed
            </button>
          </Link>
          <a href="#features">
            <button className="border border-gray-200 text-gray-500 px-9 py-4 rounded-lg text-base font-medium hover:border-mint hover:text-mint-dark transition-all">
              See All 6 Tools →
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="flex max-w-xl border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="flex-1 px-6 py-5 border-r border-gray-100 text-center">
            <div className="font-serif text-4xl text-black">6<span className="text-mint">+</span></div>
            <div className="text-xs text-gray-400 mt-1 font-medium tracking-wide">AI Tools</div>
          </div>
          <div className="flex-1 px-6 py-5 border-r border-gray-100 text-center">
            <div className="font-serif tex
