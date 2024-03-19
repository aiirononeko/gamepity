'use client'

import Link from 'next/link'

import CommonButton from '@/app/_components/button/CommonButton'

export default async function Header() {
  const user = undefined // TODO

  const loginModalOpen = () => {
    console.log('open login modal!') // TODO
  }

  return (
    <nav className='bg-gradient-to-r from-game-gray-900 via-game-gray-700 to-game-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
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
                href='#'
                className='hover:game-white block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
                aria-current='page'
              >
                TOP
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='hover:game-white block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
              >
                ストリーマー
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='hover:game-white block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
              >
                遊び方
              </Link>
            </li>
            {user ? (
              <li>
                <Link
                  href='#'
                  className='hover:game-white block rounded px-3 py-2 font-bold leading-10 text-game-white hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
                >
                  マイページ
                </Link>
              </li>
            ) : (
              <CommonButton onClick={loginModalOpen}>ログイン</CommonButton>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
