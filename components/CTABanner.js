import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-24 px-14 bg-mint-light border-t border-b border-mint-mid text-center">
      <h2 className="font-serif text-6xl text-black mb-4 leading-tight">
        Stop Doing It All.<br />Let AI Help.
      </h2>
      <p className="text-lg text-gray-500 mb-9">
        Join businesses saving hours every week with AI-powered writing tools.
      </p>
      <Link href="/sign-up">
        <button className="bg-mint text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-mint-dark hover:-translate-y-0.5 transition-all">
          Start Free — It's Yours →
        </button>
      </Link>
    </section>
  )
}
