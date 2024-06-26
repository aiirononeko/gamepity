'use server'

import { createClient } from '@/lib/supabase/server'
import { searchGamesSchema } from '@/schemas/game'
import type { Game } from '@/types/game'

export async function getTopPageGames(): Promise<Game[]> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('games')
    .select('*')
    .order('plans_count', { ascending: false })
    .order('name', { ascending: true })
    .limit(20)

  if (error) {
    console.error(error.message)
    throw error
  }

  return data ?? []
}

export async function getGames(): Promise<Game[]> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('games')
    .select('*')
    .order('plans_count', { ascending: false })
    .order('name', { ascending: true })

  if (error) {
    console.error(error.message)
    throw error
  }

  return data ?? []
}

export async function getGame(gameId: number): Promise<Game> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('id', gameId)
    .limit(1)
    .single()

  if (error) {
    console.error(error.message)
    throw error
  }

  return data
}

export const getGamesWithPlanId = async (planId: number): Promise<Game[]> => {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('plans_games')
    .select('*')
    .eq('plan_id', planId)
  if (error) throw error

  const getRelatedGames = data.map(async (plansGame) => {
    return getGame(plansGame.game_id)
  })

  return await Promise.all(getRelatedGames)
}

export const searchGames = async (name: string) => {
  const result = searchGamesSchema.safeParse({ name })
  if (!result.success) return

  const supabase = createClient()
  const { data, error } = await supabase
    .from('games')
    .select()
    .ilike('name', `${name}%`)

  if (error) {
    console.error(error)
    throw error
  }

  return data
}
