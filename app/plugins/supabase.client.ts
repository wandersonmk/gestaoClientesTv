import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export default defineNuxtPlugin({
  name: 'supabase',
  setup() {
  const config = useRuntimeConfig()
  
  console.log('[Supabase Plugin] Inicializando...')
  console.log('[Supabase Plugin] Config disponível:', {
    hasPublicUrl: !!config.public?.supabaseUrl,
    hasPublicKey: !!config.public?.supabaseAnonKey
  })

  const url = config.public?.supabaseUrl as string
  const anonKey = config.public?.supabaseAnonKey as string

  if (!url || !anonKey) {
    console.error('[Supabase] Variáveis de ambiente ausentes.')
    console.error('[Supabase] URL:', url ? 'PRESENTE' : 'AUSENTE')
    console.error('[Supabase] ANON_KEY:', anonKey ? 'PRESENTE' : 'AUSENTE')
    console.error('Por favor, verifique se o arquivo .env está na raiz do projeto com:')
    console.error('NUXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co')
    console.error('NUXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here')
    console.error('E reinicie o servidor de desenvolvimento.')
    
    // Retorna um cliente mock para evitar erros
    return {
      provide: {
        supabase: null
      }
    }
  }

  console.log('[Supabase Plugin] Criando cliente...')
  const supabase: SupabaseClient = createClient(url, anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storage: process.client ? window.localStorage : undefined,
      storageKey: 'agzap-auth-token',
      flowType: 'pkce'
    }
  })

  console.log('[Supabase Plugin] Cliente criado com sucesso')

    return {
      provide: {
        supabase
      }
    }
  }
})


