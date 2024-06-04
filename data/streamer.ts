'use server'

import { createClient } from '@/lib/supabase/server'
import type { Streamer } from '@/types/streamer'

/**
 * トップページに表示するストリーマーを取得します
 */
export async function getStreamers(): Promise<Streamer[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('streamers')
    .select()
    .neq('icon_url', null)
    .neq('discord_url', null)
    .neq('profile', null)
    .order('created_at', { ascending: false })

  if (error) throw error

  return data ?? []
}

export async function getStreamer(id: string): Promise<Streamer> {
  const supabase = createClient()
  const streamersWithGamesQuery = supabase
    .from('streamers')
    .select(`*, reviews (*), plans (*), available_date_times (*)`)
    .eq('id', id)
    .limit(1)
    .single()

  const { data, error } = await streamersWithGamesQuery
  if (error) throw new Error(error.message)

  return data
}
