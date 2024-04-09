'use server'

import { Database } from '@/supabase/schema'
import { createClient } from '@/lib/supabase/server'

type Streamer = Database['public']['Tables']['streamers']['Row']

export async function getStreamers(): Promise<Streamer[]> {
  const supabase = createClient()
  const { data, error } = await supabase.from('streamers').select('*')

  if (error) throw error

  return data ?? []
}

export async function getStreamer(id: string) {
  const supabase = createClient()
  const streamersWithGamesQuery = supabase
    .from('streamers')
    .select(
      `
      id,
      name,
      icon_url,
      profile,
      stripe_account_id,
      avg_rating,
      youtube_url,
      twitch_url,
      x_url,
      created_at,
      updated_at,
      games (
        id,
        name,
        description,
        icon_url,
        created_at,
        updated_at
      )
    `,
    )
    .eq('id', id)
    .limit(1)

  const { data, error } = await streamersWithGamesQuery
  if (error) throw error

  return data[0]
}
