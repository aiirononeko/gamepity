import { Database } from '@/supabase/schema'
import ReviewCard from '@/app/streamers/[id]/components/ReviewCard'

type Props = {
  reviews: Database['public']['Tables']['reviews']['Row'][]
  streamer: Database['public']['Tables']['streamers']['Row']
}

export default function Review(props: Props) {
  const { reviews, streamer } = props

  return (
    <div className='flex h-72 w-full flex-row items-center justify-center gap-16 bg-game-gray-600'>
      <div className='space-y-3'>
        <p className='text-5xl font-bold text-game-white'>{streamer.avg_rating}</p>
        <p className='text-game-gray-300'>{reviews.length}レビュー</p>
      </div>
      <div className='w-1/2 space-y-3'>
        {reviews.slice(0, 2).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
