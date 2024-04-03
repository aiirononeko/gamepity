import { Database } from '@/supabase/schema'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  streamer: Database['public']['Tables']['User']['Row']
}

export default function StreamerCard(data: Props) {
  const { streamer } = data

  return (
    <div>
      {streamer.iconUrl ? (
        <Image
          alt={`${streamer.name}のアイコン`}
          src={streamer.iconUrl}
          width={250}
          height={200}
        />
      ) : (
        <div className='h-52 w-64 rounded-t-xl bg-game-gray-500 text-game-gray-300'></div>
      )}
      <div className='h-48 w-64 rounded-b-xl bg-game-gray-700 p-6'>
        <p className='mb-4 text-xl font-bold text-game-white'>{streamer.name}</p>
        <p className='mb-6 line-clamp-3 text-xs text-game-gray-300'>{streamer.profile}</p>
        <div className='flex w-full justify-center'>
          <Link href={`/streamers/${streamer.id}`}>
            <button className='rounded border-2 border-solid border-game-white bg-gradient-to-r from-[#FFB13C] to-[#EF3CFF] px-2 py-1 text-xs text-game-white'>
              詳細はこちら
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}