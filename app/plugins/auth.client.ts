export default defineNuxtPlugin(() => {
  // Só executa no cliente depois que tudo estiver carregado
  if (process.client) {
    // Usar nextTick para garantir que tudo foi inicializado
    nextTick(async () => {
      console.log('[Auth Plugin] Inicializando após nextTick...')
      
      // Obter estados existentes ou criar novos
      const user = useState('auth_user', () => null)
      const session = useState('auth_session', () => null)
      const loading = useState('auth_loading', () => true)
      
      try {
        // Aguardar um pouco mais para garantir que Supabase está disponível
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        console.log('[Auth Plugin] Tentando obter cliente Supabase...')
        const nuxtApp = useNuxtApp()
        
        if (!nuxtApp.$supabase) {
          console.error('[Auth Plugin] Supabase ainda não disponível')
          loading.value = false
          return
        }
        
        const supabase = nuxtApp.$supabase
        console.log('[Auth Plugin] Cliente Supabase obtido diretamente')
        
        console.log('[Auth Plugin] Verificando sessão salva...')
        // Verificar se existe uma sessão salva
        const { data } = await supabase.auth.getSession()
        console.log('[Auth Plugin] Sessão obtida:', { hasSession: !!data.session, email: data.session?.user?.email })
        
        // Atualizar o estado com a sessão atual
        if (data.session) {
          user.value = data.session.user
          session.value = data.session
          console.log('[Auth Plugin] Usuário restaurado do localStorage:', data.session.user.email)
        } else {
          user.value = null
          session.value = null
          console.log('[Auth Plugin] Nenhuma sessão encontrada')
        }
        loading.value = false
        
        // Escutar mudanças de autenticação
        supabase.auth.onAuthStateChange((event, newSession) => {
          console.log('[Auth Plugin] Auth state changed:', event, newSession?.user?.email)
          user.value = newSession?.user ?? null
          session.value = newSession
          console.log('[Auth Plugin] Estado global atualizado:', { 
            hasUser: !!user.value, 
            hasSession: !!session.value,
            email: user.value?.email 
          })
        })
        
        console.log('[Auth Plugin] Inicialização concluída com sucesso')
        
      } catch (error) {
        console.error('[Auth Plugin] Erro ao inicializar:', error)
        // Definir estado padrão em caso de erro
        user.value = null
        session.value = null
        loading.value = false
      }
    })
  }
})
