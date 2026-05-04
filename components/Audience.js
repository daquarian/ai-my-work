const cards = [
  {
    icon: '🏢',
    title: 'Small Business Owners',
    desc: "You're wearing every hat — sales, marketing, operations, and everything in between. Let AI handle the writing so you can focus on what only you can do.",
    items: [
      'Write client proposals in one click',
      'Generate professional follow-up emails instantly',
      'Create social content for every channel',
      'Summarize contracts in plain English',
      'Publish polished blog posts without a writer',
    ],
  },
  {
    icon: '📈',
    title: 'Mid-Sized Business Teams',
    desc: "Your team is stretched thin and the to-do list never stops growing. AI-My-Work automates the busywork so your people can focus on the work that actually moves the needle.",
    items: [
      'Turn meeting notes into action items instantly',
      'Keep brand voice consistent across all content',
      'Produce more proposals with the same sales team',
      'Reduce time-to-send on every client communication',
      'Free your team to focus on high-value work',
    ],
  },
]

export default function Audience() {
  return (
    <section id="audience" className="py-24 px-14 bg-gray-50">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-mint-dark mb-4">
        <span className="w-5 h-0.5 bg-mint" />
        Who It's For
      </div>
      <h2 className="font-serif text-5xl text-black mb-12 leading-tight">
        Stop Doing It All.<br />Let AI Help.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-gray-100 rounded-2xl p-10 hover:shadow-lg hover:border-mint-mid hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 bg-mint-light rounded-xl flex items-center justify-center text-2xl mb-5">
              {card.icon}
            </div>
            <h3 className="font-serif text-2xl text-black mb-3">{card.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.desc}</p>
            <ul className="space-y-2.5">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
