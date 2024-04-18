import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/data/auth'
import Button from '@/app/components/Button'
import { signOut } from '@/actions/auth'

export default async function Page() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/users/signin')
  }

  return (
    <div>
      <p className='mx-auto mt-12 text-center text-game-white'>{`${user.id}のマイページ`}</p>
      <form action={signOut}>
        <Button type='submit'>ログアウト</Button>
      </form>
    </div>
  )
}
