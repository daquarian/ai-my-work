const tools = [
  'Email Writer',
  'Social Media Posts',
  'Proposal Generator',
  'Contract Summarizer',
  'Blog Article Writer',
  'Meeting Notes Summarizer',
]

export default function Marquee() {
  return (
    <div className="bg-mint-light border-t border-b border-mint-mid py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tools, ...tools].map((tool, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 px-8 border-r border-mint-mid text-xs font-semibold tracking-widest uppercase text-mint-dark"
          >
            <span className="w-1.5 h-1.5 bg-mint rounded-full flex-shrink-0" />
            {tool}
          </div>
        ))}
      </div>
    </div>
  )
}
