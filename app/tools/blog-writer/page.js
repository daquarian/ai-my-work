import { checkPremium } from '@/lib/checkPremium'
import BlogClient from './BlogClient'

export default async function BlogWriter() {
  await checkPremium()
  return <BlogClient />
}
