import Image from 'next/image'
import IconUploadForm from './components/IconUploadForm'
import PlanCard from '@/app/streamers/[id]/components/PlanCard'
import SnsCard from '@/app/streamers/[id]/components/SnsCard'
import Game from '@/components/Game'
import { getAvailableDateTimes } from '@/data/availableDateTime'
import { getStreamer } from '@/data/streamer'
// import { getUser } from '@/data/auth'

// TODO: gamesとplansがStreamerの型として認識されていない問題を修正する
export default async function Page() {
  // const streamer = await getUser()
  // if (!streamer || streamer.user_metadata.is_streamer) {
  //   // TODO: アクセス不可
  // }

  const streamer = await getStreamer('185f2f83-d63a-4c9b-b4a0-7e4a885799e3')
  const availableDateTimes = await getAvailableDateTimes(
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e3',
  )
  // @ts-ignore
  const { games, plans } = streamer

  return (
    <div className='container mx-auto mt-12'>
      <div className='flex flex-row px-32 pb-12'>
        <IconUploadForm userId={streamer.id} initialIconUrl={streamer.icon_url} />
        <div className='relative basis-3/5 space-y-6 pl-10'>
          <p className='text-3xl font-bold text-game-white'>{streamer.name}</p>
          <p className='text-game-white'>{streamer.profile}</p>
          <div className='absolute right-0 top-56 flex flex-row items-center space-x-6'>
            {streamer.youtube_url && (
              <SnsCard
                sns_url={streamer.youtube_url}
                image_src={'/sns/youtube_logo.png'}
              />
            )}
            {streamer.twitch_url && (
              <SnsCard sns_url={streamer.twitch_url} image_src={'/sns/twitch_logo.png'} />
            )}
            {streamer.x_url && (
              <SnsCard sns_url={streamer.x_url} image_src={'/sns/x_logo.png'} />
            )}
          </div>
        </div>
      </div>
      {games && games.length > 0 && (
        <div className='mb-10'>
          <div className='flex flex-row space-x-6 overflow-y-auto'>
            {/* @ts-ignore */}
            {games.map((game) => (
              <Game key={game.id} game={game} size={'size-20'} />
            ))}
          </div>
        </div>
      )}
      {plans && plans.length > 0 && (
        <div className='mb-10'>
          <h2 className='mb-4 text-2xl font-bold text-game-white'>プラン</h2>
          <div className='space-y-6'>
            {/* @ts-ignore */}
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
