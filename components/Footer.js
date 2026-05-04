export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 px-14 py-9 flex flex-wrap justify-between items-center gap-4">
      <div className="font-serif text-lg text-black">
        AI<span className="text-mint">-</span>My<span className="text-mint">-</span>Work
      </div>

      <div className="flex gap-6 flex-wrap">
        <a href="#audience" className="text-sm text-gray-400 hover:text-mint-dark transition-colors">About</a>
        <a href="#features" className="text-sm text-gray-400 hover:text-mint-dark transition-colors">Tools</a>
        <a href="#pricing" className="text-sm text-gray-400 hover:text-mint-dark transition-colors">Pricing</a>
        <a href="#" className="text-sm text-gray-400 hover:text-mint-dark transition-colors">Privacy</a>
        <a href="#" className="text-sm text-gray-400 hover:text-mint-dark transition-colors">Terms</a>
      </div>

      <div className="text-xs text-gray-300">
        © 2026 AI-My-Work.com — All Rights Reserved
      </div>
    </footer>
  )
}
