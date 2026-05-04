import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 h-16 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="font-serif text-xl text-black">
        AI<span className="text-mint">-</span>My<span className="text-mint">-</span>Work
      </div>

      <ul className="hidden md:flex gap-9 list-none">
        <li><a href="#audience" className="text-gray-400 text-sm font-medium hover:text-black transition-colors">Who It's For</a></li>
        <li><a href="#features" className="text-gray-400 text-sm font-medium hover:text-black transition-colors">Tools</a></li>
        <li><a href="#how" className="text-gray-400 text-sm font-medium hover:text-black transition-colors">How It Works</a></li>
        <li><a href="#pricing" className="text-gray-400 text-sm font-medium hover:text-black transition-colors">Pricing</a></li>
      </ul>

      <div className="flex gap-3 items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border border-gray-200 text-gray-600 px-5 py-2 rounded-md text-sm font-medium hover:border-mint hover:text-mint-dark transition-all">
              Log In
            </button>
          </SignInButton>
          <Link href="/sign-up">
            <button className="bg-mint text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-mint-dark transition-all">
              Get Started Free
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">
            <button className="bg-mint text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-mint-dark transition-all">
              Dashboard
            </button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  )
}
