import { checkPremium } from '@/lib/checkPremium'
import MeetingClient from './MeetingClient'

export default async function MeetingNotes() {
  await checkPremium()
  return <MeetingClient />
}
