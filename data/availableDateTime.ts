'use server'

import { createClient } from '@/lib/supabase/server'
import type { AvailableDateTime } from '@/types/availableDateTime'
import { addDay, date } from '@formkit/tempo'

export async function getAvailableDateTimes(
  streamerId: string,
): Promise<AvailableDateTime[]> {
  const supabase = createClient()
  const startDateTime = addDay(date(), 1)
  const { data, error } = await supabase
    .from('available_date_times')
    .select()
    .gte('start_date_time', startDateTime.toUTCString())
    .eq('streamer_id', streamerId)

  if (error) throw new Error(error.message)

  return data ?? []
}

export async function getAvailableDateTime(
  availableDateTimeId: number,
): Promise<AvailableDateTime> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('available_date_times')
    .select()
    .eq('id', availableDateTimeId)
    .limit(1)
    .single()

  if (error) throw new Error(error.message)

  return data
}
