const features = [
  {
    icon: '✉️',
    title: 'Email Writer',
    desc: 'Craft professional client emails, follow-ups, and cold outreach in seconds. Describe the situation — AI writes it.',
    plan: 'Free',
    href: '/tools/email-writer',
  },
  {
    icon: '📱',
    title: 'Social Media Posts',
    desc: 'Turn any idea into scroll-stopping posts for LinkedIn, Instagram, and Facebook — captions, hashtags, and CTAs included.',
    plan: 'Free',
    href: '/tools/social-media',
  },
  {
    icon: '📋',
    title: 'Proposal Generator',
    desc: 'Enter your service details and client needs — get a polished, persuasive proposal ready to send. Win more deals.',
    plan: 'Premium',
    href: '/tools/proposal-generator',
  },
  {
    icon: '📄',
    title: 'Contract Summarizer',
    desc: 'Upload any contract and get a plain-English breakdown of key terms, obligations, and red flags — fast and clear.',
    plan: 'Premium',
    href: '/tools/contract-summarizer',
  },
  {
    icon: '✍️',
    title: 'Blog Article Writer',
    desc: 'Generate SEO-ready blog posts that establish your authority and drive traffic. Pick a topic, set the tone, publish in minutes.',
    plan: 'Premium',
    href: '/tools/blog-writer',
  },
  {
    icon: '🎙️',
    title: 'Meeting Notes Summarizer',
    desc: 'Paste your raw meeting transcript and get a clean summary with action items, decisions, and next steps — ready to share.',
    plan: 'Premium',
    href: '/tools/meeting-notes',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-14 bg-white">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-mint-dark mb-4">
        <span className="w-5 h-0.5 bg-mint" />
        AI Tools
      </div>
      <h2 className="font-serif text-5xl text-black mb-3 leading-tight">
        Everything You Need<br />to Run Your Business
      </h2>
      <p className="text-base text-gray-500 max-w-lg mb-12 leading-relaxed">
        Six purpose-built AI writing tools. Free plan gets you started — Premium unlocks the full suite.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white p-8 hover:bg-mint-light transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-xl group-hover:bg-mint-mid transition-colors">
                {f.icon}
              </div>
              <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                f.plan === 'Free'
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-mint-light text-mint-dark border border-mint-mid'
              }`}>
                {f.plan}
              </span>
            </div>
            <h3 className="text-base font-bold text-black mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
