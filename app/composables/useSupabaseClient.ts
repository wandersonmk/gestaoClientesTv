import type { SupabaseClient } from '@supabase/supabase-js'

export function useSupabaseClient(): SupabaseClient {
  // Só funciona no cliente
  if (process.server) {
    throw new Error('useSupabaseClient só pode ser usado no cliente')
  }

  const nuxtApp = useNuxtApp()
  
  console.log('[useSupabaseClient] Verificando cliente...', {
    hasSupabase: !!nuxtApp.$supabase,
    nuxtAppKeys: Object.keys(nuxtApp).filter(k => k.startsWith('$'))
  })
  
  // Aguarda um pouco para o plugin carregar se necessário
  if (!nuxtApp.$supabase) {
    console.warn('[useSupabaseClient] Cliente não encontrado imediatamente, aguardando...')
    // Se o cliente não estiver disponível imediatamente, pode estar carregando
    throw new Error('Supabase client não foi inicializado. Aguarde o carregamento.')
  }
  
  console.log('[useSupabaseClient] Cliente encontrado com sucesso')
  return nuxtApp.$supabase as SupabaseClient
}


