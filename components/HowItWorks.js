const steps = [
  {
    num: '01',
    title: 'Create Account',
    desc: 'Sign up in seconds with your email or Google account. No credit card required for the free plan.',
  },
  {
    num: '02',
    title: 'Pick Your Tool',
    desc: 'Choose from Email Writer, Social Posts, Proposals, Contracts, Blog Writer, or Meeting Notes.',
  },
  {
    num: '03',
    title: 'Enter Details',
    desc: 'Describe your situation or paste your content. Takes less than a minute to get a polished result.',
  },
  {
    num: '04',
    title: 'Use It Instantly',
    desc: 'Copy, download, or share your AI-generated content. Send it, post it, or publish it — done.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-14 bg-gray-50">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-mint-dark mb-4">
        <span className="w-5 h-0.5 bg-mint" />
        How It Works
      </div>
      <h2 className="font-serif text-5xl text-black mb-12 leading-tight">
        Up and Running<br />in Minutes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md hover:border-mint-mid hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-5xl text-mint-light leading-none mb-4">
              {step.num}
            </div>
            <h3 className="text-base font-bold text-black mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
