import { createPlan } from "@/actions/plan";
import { getGames } from "@/data/game";
import { getStreamer } from "@/data/streamer";

export default async function Page() {
  const streamer = await getStreamer('185f2f83-d63a-4c9b-b4a0-7e4a885799e3')
  const games = await getGames()

  return (
    <form className='mx-auto mt-20 w-full max-w-sm' action={createPlan}>
      <div className='mb-6 flex flex-col'>
        <label className='mb-1 block pr-4 text-left font-bold text-game-gray-500'>
          プラン名
        </label>
        <input
          className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
          name='name'
          type='text'
          placeholder='ガチランクプラン'
        />
      </div>
      <div className='mb-6 flex flex-col'>
        <label className='mb-1 block pr-4 text-left font-bold text-gray-500'>
          プラン説明
        </label>
        <textarea
          className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
          name='description'
          placeholder='ガチでランク回しましょう！Apexダイヤランク以上推奨です。'
        />
      </div>
      <div className='mb-10 flex flex-col'>
        <label className='mb-1 block pr-4 text-left font-bold text-gray-500'>
          値段
        </label>
        <input
          className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
          name='amount'
          type='number'
          placeholder='3000'
        />
      </div>
      <div className='mb-10 flex flex-col'>
        <label className='mb-1 block pr-4 text-left font-bold text-gray-500'>
          ゲームタイトル(複数選択可)
        </label>
        <select name='gameIds' multiple>
          {games.map((game) => <option key={game.id} value={game.id}>{game.name}</option> )}
        </select>
      </div>
      <input name='streamerId' type='text' value={streamer.id} hidden readOnly />
      <div className='md:flex md:items-center'>
        <button
          className='w-full rounded border-2 border-solid border-game-white bg-gradient-to-r from-[#FFB13C] to-[#EF3CFF] px-8 py-3 text-game-white'
          type='submit'
        >
          プラン作成
        </button>
      </div>
    </form>
  )
}
