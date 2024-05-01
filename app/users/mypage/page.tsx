import { redirect } from 'next/navigation'
import Reservation from './components/Reservation'
import { signOut } from '@/actions/auth'
import { getCurrentUser } from '@/data/auth'
import { getCompletedReservations, getReservations } from '@/data/reservation'

export default async function Page() {
  const user = await getCurrentUser()
  if (!user) redirect('/signin')

  const reservations = await getReservations(user.id)
  const completedReservations = await getCompletedReservations(user.id)

  return (
    <div className='container mx-auto mt-10 grid space-y-10'>
      <div className=''>
        <h2 className='text-xl font-bold text-game-white'>お支払い済みの予約</h2>
        <div className='mt-6 grid grid-cols-4 gap-6'>
          {reservations.length > 0 ? (
            <>
              {reservations.map((reservation) => (
                <Reservation key={reservation.id} reservation={reservation} />
              ))}
            </>
          ) : (
            <p className='text-game-gray-300'>予約がありません</p>
          )}
        </div>
      </div>
      <div className=''>
        <h2 className='text-xl font-bold text-game-white'>完了した予約</h2>
        <div className='mt-6 grid grid-cols-4 gap-6'>
          {completedReservations.length > 0 ? (
            <>
              {completedReservations.map((reservation) => (
                <Reservation key={reservation.id} reservation={reservation} />
              ))}
            </>
          ) : (
            <p className='text-game-gray-300'>完了した予約がありません</p>
          )}
        </div>
      </div>
      <div className=''>
        <h2 className='text-xl font-bold text-game-white'>ユーザーID</h2>
        <p className='mt-6 text-game-white'>{user.id}</p>
      </div>
      <form action={signOut} className=''>
        <button type='submit' className='text-game-gray-500 underline'>ログアウト</button>
      </form>
      {/* <form action={withdrawal} className=''> */}
      {/*   <button type='submit' className='text-game-gray-500 underline'>退会</button> */}
      {/* </form> */}
    </div>
  )
}
