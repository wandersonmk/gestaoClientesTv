export default defineNuxtRouteMiddleware(async (to, from) => {
  // No servidor, não precisa verificar autenticação detalhada
  if (process.server) {
    return
  }
  
  try {
    const { isAuthenticated, user, isLoading } = useAuth()
    
    console.log('Guest middleware - ANTES:', { 
      isAuthenticated: isAuthenticated.value, 
      hasUser: !!user.value,
      isLoading: isLoading.value,
      email: user.value?.email 
    })
    
    // Aguarda apenas um curto período se ainda estiver carregando
    if (isLoading.value) {
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    
    console.log('Guest middleware - DEPOIS:', { 
      isAuthenticated: isAuthenticated.value, 
      hasUser: !!user.value,
      isLoading: isLoading.value,
      email: user.value?.email 
    })
    
    // Se já está autenticado, redireciona para a página principal
    if (isAuthenticated.value && user.value) {
      console.log('Guest middleware: Redirecionando para /')
      return navigateTo('/')
    }
  } catch (error) {
    // Se houver erro na inicialização, permite acesso à página de login
    console.error('Erro no middleware guest:', error)
    // Não redireciona, permite que o usuário veja a página de login
  }
})
