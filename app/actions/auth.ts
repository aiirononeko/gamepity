'use server'

import type { User, Session } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/service/supabase/server'

export async function signUpUserWithEmail(formData: FormData): Promise<
  | {
      user: User | null
      session: Session | null
    }
  | {
      user: null
      session: null
    }
> {
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!name || !email || !password) {
    return {
      user: null,
      session: null,
    }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        is_streamer: false,
        name,
      },
      emailRedirectTo: 'https://gamepity.com/'
    },
  })

  if (error) {
    console.error(error)
    return {
      user: null,
      session: null,
    }
  }

  redirect('/users/signup/completed')
}

export async function signUpStreamerWithEmail(formData: FormData): Promise<
  | {
      user: User | null
      session: Session | null
    }
  | {
      user: null
      session: null
    }
> {
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!name || !email || !password) {
    return {
      user: null,
      session: null,
    }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        is_streamer: true,
        name,
      },
      emailRedirectTo: 'https://gamepity.com/'
    },
  })

  if (error) {
    console.error(error)
    return {
      user: null,
      session: null,
    }
  }

  redirect('/streamers/signup/completed')
}

export async function signInWithEmail(formData: FormData) {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    return
  }

  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  redirect('/')
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    return
  }

  redirect('/')
}
