import Link from 'next/link'

const freeFeatures = [
  { text: 'Email Writer', included: true },
  { text: 'Social Media Posts', included: true },
  { text: 'Secure Account and Dashboard', included: true },
  { text: 'Proposal Generator', included: false },
  { text: 'Contract Summarizer', included: false },
  { text: 'Blog Article Writer', included: false },
  { text: 'Meeting Notes Summarizer', included: false },
]

const premiumFeatures = [
  { text: 'Email Writer', included: true },
  { text: 'Social Media Posts', included: true },
  { text: 'Secure Account and Dashboard', included: true },
  { text: 'Proposal Generator', included: true },
  { text: 'Contract Summarizer', included: true },
  { text: 'Blog Article Writer', included: true },
  { text: 'Meeting Notes Summarizer', included: true },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-14 bg-white">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
        <span className="w-5 h-0.5 bg-green-500" />
        Pricing
      </div>
      <h2 className="font-serif text-5xl text-black mb-12 leading-tight">
        Straightforward Pricing.<br />No Surprises.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
        <div className="border border-gray-100 rounded-2xl p-10 bg-white">
          <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
            Free Forever
          </div>
          <div className="font-serif text-6xl text-black leading-none mb-1">
            $0
            <span className="text-base font-sans font-normal text-gray-400">/mo</span>
          </div>
          <p className="text-sm text-gray-500 mt-3 mb-6 pb-6 border-b border-gray-100 leading-relaxed">
            Get started with the two most essential tools. No credit card, no time limit.
          </p>
          <ul className="space-y-3 mb-8">
            {freeFeatures.map((f) => (
              <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? 'text-gray-700' : 'text-gray-300 line-through'}`}>
                <span className={`font-bold flex-shrink-0 ${f.included ? 'text-green-500' : 'text-gray-300'}`}>
                  {f.included ? 'Yes' : 'No'}
                </span>
                {f.text}
              </li>
            ))}
          </ul>
          <Link href="/sign-up">
            <button className="w-full py-3.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:border-green-500 hover:text-green-700 transition-all">
              Get Started Free
            </button>
          </Link>
        </div>

        <div className="border border-green-400 rounded-2xl p-10 bg-green-50 relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </div>
          <div className="text-xs font-bold tracking-widest uppercase text-green-700 mb-4">
            Premium
          </div>
          <div className="font-serif text-6xl text-black leading-none mb-1">
            $19
            <span className="text-base font-sans font-normal text-gray-400">/mo</span>
          </div>
          <p className="text-sm text-gray-500 mt-3 mb-6 pb-6 border-b border-green-200 leading-relaxed">
            Full access to every tool. Cancel anytime from your account dashboard.
          </p>
          <ul className="space-y-3 mb-8">
            {premiumFeatures.map((f) => (
              <li key={f.text} className="flex items-center gap-2.5 text-sm text-gray-700">
                <span className="text-green-500 font-bold flex-shrink-0">Yes</span>
                {f.text}
              </li>
            ))}
          </ul>
          <Link href="/sign-up">
            <button className="w-full py-3.5 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-all">
              Upgrade to Premium
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
