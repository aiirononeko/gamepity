import Link from 'next/link'
import { createLoginLink } from '@/actions/stripe'
import Button from '@/app/components/Button'
import { getCurrentUser, isStreamer } from '@/data/auth'
import { getStreamer } from '@/data/streamer'

export default async function Header() {
  const user = await getCurrentUser()

  const streamer = user && isStreamer(user) ? await getStreamer(user.id) : undefined
  const stripeLoginLink = streamer
    ? await createLoginLink(streamer.stripe_account_id ?? '')
    : undefined

  return (
    <header className='bg-gradient-to-r from-game-gray-900 via-game-gray-700 to-game-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-6'>
        <Link
          href='/'
          className='self-center whitespace-nowrap text-4xl font-bold text-game-white'
        >
          Gamepity
        </Link>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'>
            <li>
              <Link
                href='/about'
                className='block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
              >
                遊び方
              </Link>
            </li>
            <li>
              <Link
                href='/streamers'
                className='block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
              >
                ストリーマー
              </Link>
            </li>
            {stripeLoginLink && (
              <>
                <li>
                  <a
                    href={stripeLoginLink.url}
                    target='_blank'
                    className='block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
                  >
                    売上管理
                  </a>
                </li>
                <li>
                  <Link
                    href='/streamers/reservations'
                    className='block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
                  >
                    予約管理
                  </Link>
                </li>
              </>
            )}
            {user ? (
              <li>
                <Link
                  href={'/users/mypage'}
                  className='block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
                >
                  マイページ
                </Link>
              </li>
            ) : (
              <Link href='/signin'>
                <Button>ログイン</Button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}
