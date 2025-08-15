export default defineNuxtRouteMiddleware(async (to, from) => {
  // No servidor, não precisa verificar autenticação detalhada
  if (process.server) {
    return
  }
  
  try {
    console.log('[Auth Middleware] Iniciando verificação...')
    
    // Aguardar o plugin de auth ter executado
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const { isAuthenticated, user, isLoading } = useAuth()
    
    console.log('[Auth Middleware] Estado inicial:', { 
      isAuthenticated: isAuthenticated.value, 
      hasUser: !!user.value,
      isLoading: isLoading.value,
      email: user.value?.email
    })
    
    // Aguarda o carregamento ser concluído se ainda estiver carregando
    let attempts = 0
    const maxAttempts = 20 // 2 segundos máximo adicionais
    
    while (isLoading.value && attempts < maxAttempts) {
      console.log(`[Auth Middleware] Aguardando loading... tentativa ${attempts + 1}`)
      await new Promise(resolve => setTimeout(resolve, 100))
      attempts++
    }
    
    console.log('[Auth Middleware] Estado final:', { 
      isAuthenticated: isAuthenticated.value, 
      hasUser: !!user.value,
      isLoading: isLoading.value,
      email: user.value?.email,
      attempts 
    })
    
    // Se não está autenticado, redireciona para login
    if (!isAuthenticated.value || !user.value) {
      console.log('[Auth Middleware] Usuário não autenticado, redirecionando para login')
      return navigateTo('/login')
    }
    
    console.log('[Auth Middleware] Usuário autenticado, permitindo acesso')
  } catch (error) {
    // Se houver erro na inicialização, redireciona para login
    console.error('[Auth Middleware] Erro:', error)
    return navigateTo('/login')
  }
})
