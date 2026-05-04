import Link from 'next/link'

const freeFeatures = [
  { text: 'Email Writer', included: true },
  { text: 'Social Media Posts', included: true },
  { text: 'Secure Account & Dashboard', included: true },
  { text: 'Proposal Generator', included: false },
  { text: 'Contract Summarizer', included: false },
  { text: 'Blog Article Writer', included: false },
  { text: 'Meeting Notes Summarizer', included: false },
]

const premiumFeatures = [
  { text: 'Email Writer', included: true },
  { text: 'Social Media Posts', included: true },
  { text: 'Secure Account & Dashboard', included: true },
  { text: 'Proposal Generator', included: true },
  { text: 'Contract Summarizer', included: true },
  { text: 'Blog Article Writer', included: true },
  { text: 'Meeting Notes Summarizer', included: true },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-14 bg-white">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-mint-dark mb-4">
        <span className="w-5 h-0.5 bg-mint" />
        Pricing
      </div>
      <h2 className="font-serif text-5xl text-black mb-12 leading-tight">
        Straightforward Pricing.<br />No Surprises.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
        {/* Free Plan */}
        <div className="border border-gray-100 rounded-2xl p-10 bg-white">
          <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
            Free Forever
          </div>
          <div className="font-serif text-6xl text-black leading-none mb-1">
            <sup className="text-2xl font-sans font-semibold align-top mt-3 inline-block">$</sup>0
            <sub className="text-base font-sans font-normal text-gray-400">/mo</sub>
          </div>
          <p className="text-sm text-gray-500 mt-3 mb-6 pb-6 border-b border-gray-100 leading-relaxed">
            Get started with the two most essential tools. No credit card, no time limit.
          </p>
          <ul className="space-y-3 mb-8">
            {freeFeatures.map((f) => (
              <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? 'text-gray-700' : 'text-gray-300 line-through'}`}>
                <span className={`font-bold flex-shrink-0 ${f.included ? 'text-mint' : 'text-gray-300'}`}>
                  {f.included ? '✓' : '✗'}
                </span>
                {f.text}
              </li>
