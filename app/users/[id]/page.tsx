import { getUser } from '@/app/data/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await getUser()
  if (!user) {
    redirect('/signin')
  }

  return (
    <p className='mx-auto mt-10 text-center text-game-white'>{`${user.id}のマイページ`}</p>
  )
}
