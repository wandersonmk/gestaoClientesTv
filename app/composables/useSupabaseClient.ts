import type { SupabaseClient } from '@supabase/supabase-js'

export function useSupabaseClient(): SupabaseClient {
  const nuxtApp = useNuxtApp()
  
  console.log('[useSupabaseClient] Verificando cliente...', {
    hasSupabase: !!nuxtApp.$supabase,
    nuxtAppKeys: Object.keys(nuxtApp).filter(k => k.startsWith('$'))
  })
  
  if (!nuxtApp.$supabase) {
    console.error('[useSupabaseClient] Cliente não encontrado!')
    throw new Error('Supabase client não foi inicializado. Verifique as variáveis de ambiente.')
  }
  
  console.log('[useSupabaseClient] Cliente encontrado com sucesso')
  return nuxtApp.$supabase as SupabaseClient
}


