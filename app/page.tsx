import Link from 'next/link'
import Game from '@/components/Game'
import Streamer from '@/components/Streamer'
import { getGames } from '@/data/game'
import { getStreamers } from '@/data/streamer'

export default async function Home() {
  // TODO: 全件検索ではなく、注目ストリーマーと最新ストリーマー10件ずつ取得するよう修正する
  const streamers = await getStreamers()
  const games = await getGames()

  return (
    <>
      <div className='mb-12 flex flex-col items-center bg-gradient-to-r from-[#F0DA53] via-[#EA5E7F] to-[#3D7CEA] pb-8 pt-10'>
        <p className='mb-5 text-center text-xl font-bold text-game-white'>
          憧れのストリーマーとゲームができる
          <br />
          ゲーマー向けマッチングプラットフォーム
        </p>
        <p className='mb-10 text-center text-7xl font-bold text-game-white'>Gamepity</p>
        <div className='flex w-full justify-center'>
          <Link href='/users/signup'>
            <button className='rounded border-2 border-solid border-game-white bg-gradient-to-r from-[#FFB13C] to-[#EF3CFF] px-8 py-3 text-game-white'>
              新規登録はこちら
            </button>
          </Link>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-5'>
          <div className='col-span-4'>
            <h2 className='mb-1 text-xl font-bold text-game-white'>注目ストリーマー</h2>
            <p className='mb-2 text-xs text-game-gray-300'>
              注目のストリーマーと一緒にゲームを楽しもう！
            </p>
          </div>
          <Link
            href='/streamers'
            className='col-span-1 pt-3 text-end text-game-white underline'
          >
            すべてのストリーマーをみる →
          </Link>
        </div>
        <div className='flex flex-nowrap space-x-6 overflow-y-auto py-3'>
          {streamers.map((streamer) => (
            <Streamer key={streamer.id} streamer={streamer} width={'w-80'} />
          ))}
        </div>
        <div className='mt-10 grid grid-cols-5'>
          <div className='col-span-4'>
            <h2 className='mb-1 text-xl font-bold text-game-white'>注目ゲームタイトル</h2>
            <p className='mb-2 text-xs text-game-gray-300'>
              注目のゲームタイトルからストリーマーを探そう！
            </p>
          </div>
        </div>
        <div className='flex h-20 flex-row space-x-4 overflow-y-auto py-3'>
          {games.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
        <div className='mt-10 grid grid-cols-5'>
          <div className='col-span-4'>
            <h2 className='mb-1 text-xl font-bold text-game-white'>
              すべてのストリーマー
            </h2>
            <p className='mb-5 text-xs text-game-gray-300'>
              お気に入りのストリーマーを見つけよう！
            </p>
          </div>
          <Link
            href='/streamers'
            className='col-span-1 pt-3 text-end text-game-white underline'
          >
            すべてのストリーマーをみる →
          </Link>
        </div>
        <div className='grid grid-cols-4 gap-6'>
          {streamers.slice(0, 8).map((streamer) => (
            <Streamer key={streamer.id} streamer={streamer} width={'w-full'} />
          ))}
        </div>
      </div>
    </>
  )
}
