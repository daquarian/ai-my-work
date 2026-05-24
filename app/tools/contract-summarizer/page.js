import { checkPremium } from '@/lib/checkPremium'
import ContractClient from './ContractClient'

export default async function ContractSummarizer() {
  await checkPremium()
  return <ContractClient />
}
