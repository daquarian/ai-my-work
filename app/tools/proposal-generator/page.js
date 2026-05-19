import { checkPremium } from '@/lib/checkPremium'
import ProposalClient from './ProposalClient'

export default async function ProposalGenerator() {
  await checkPremium()
  return <ProposalClient />
}
