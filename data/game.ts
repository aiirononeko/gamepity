'use server'

import { Database } from '@/supabase/schema'
import { createClient } from '@/lib/supabase/server'

type Game = Database['public']['Tables']['games']['Row']

export async function getGames(): Promise<Game[]> {
  const supabase = createClient()
  const { data, error } = await supabase.from('games').select('*')

  if (error) throw new Error(error.message)

  return data ?? []
}
