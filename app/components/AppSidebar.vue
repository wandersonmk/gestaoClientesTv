<template>
  <div class="flex">
    <!-- Sidebar -->
    <div 
      clas                      <svg 
                class="w-6 h-6 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>g 
                class="w-6 h-6 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>left-0 top-0 h-full bg-background text-foreground transition-all duration-300 ease-in-out z-50 shadow-2xl flex flex-col"
      :class="[
        isCollapsed ? 'w-16' : 'w-64',
        'border-r border-border'
      ]"
    >
      <!-- Header com logo e botão toggle -->
      <div class="flex items-center justify-between p-4 border-b border-border">
        <div v-if="!isCollapsed" class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-lg font-bold">Agzap</h1>
            <p class="text-xs text-muted-foreground">Gestão de Clientes</p>
          </div>
        </div>
        
        <!-- Botão de toggle -->
        <button 
          @click="toggleSidebar"
          class="p-2 rounded-lg hover:bg-muted transition-colors"
          :class="isCollapsed ? 'mx-auto' : ''"
        >
          <svg 
            class="w-5 h-5 transition-transform duration-300" 
            :class="isCollapsed ? 'rotate-180' : ''"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      <!-- Menu de navegação -->
      <nav class="flex-1 px-4 py-2">
        <ul class="space-y-1">
          <!-- Dashboard -->
          <li>
            <NuxtLink 
              to="/"
              class="flex items-center rounded-lg text-sm font-medium transition-colors hover:bg-muted group relative"
              :class="[
                $route.path === '/' ? 'bg-primary text-primary-foreground' : 'text-foreground',
                isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'
              ]"
              :title="isCollapsed ? 'Dashboard' : ''"
            >
              <svg 
                class="w-6 h-6 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v0a2 2 0 012-2h4a2 2 0 012 2v0"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Dashboard</span>
            </NuxtLink>
          </li>

          <!-- Clientes -->
          <li>
            <button 
              class="flex items-center w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
              :title="isCollapsed ? 'Clientes' : ''"
            >
              <svg 
                class="w-5 h-5 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Clientes</span>
            </button>
          </li>

          <!-- Analytics -->
          <li>
            <button 
              class="flex items-center w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
              :title="isCollapsed ? 'Analytics' : ''"
            >
              <svg 
                class="w-5 h-5 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Analytics</span>
            </button>
          </li>

          <!-- Relatórios -->
          <li>
            <button 
              class="flex items-center w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
              :title="isCollapsed ? 'Relatórios' : ''"
            >
              <svg 
                class="w-5 h-5 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Relatórios</span>
            </button>
          </li>

          <!-- Configurações -->
          <li>
            <button 
              class="flex items-center w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
              :title="isCollapsed ? 'Configurações' : ''"
            >
              <svg 
                class="w-5 h-5 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Configurações</span>
            </button>
          </li>

          <!-- Notificações -->
          <li>
            <button 
              class="flex items-center w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
              :title="isCollapsed ? 'Notificações' : ''"
            >
              <svg 
                class="w-5 h-5 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM15 17H9a6 6 0 01-6-6V7a6 6 0 016-6h6a6 6 0 016 6v4"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Notificações</span>
            </button>
          </li>

          <!-- Suporte -->
          <li>
            <button 
              class="flex items-center w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
              :title="isCollapsed ? 'Suporte' : ''"
            >
              <svg 
                class="w-5 h-5 transition-all duration-200" 
                :class="isCollapsed ? '' : 'mr-3'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span v-if="!isCollapsed" class="transition-opacity duration-200">Suporte</span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Seção inferior com informações do usuário e botão sair -->
      <div class="mt-auto">
        <!-- Informações do usuário -->
        <div v-if="isLoggedIn" class="p-4 border-t border-border">
          <div v-if="!isCollapsed" class="flex items-center space-x-3 mb-3">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span class="text-sm font-medium text-white">
                {{ userEmail ? userEmail.charAt(0).toUpperCase() : 'U' }}
              </span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-foreground truncate">
                {{ userEmail || 'Usuário' }}
              </p>
              <p class="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div v-else class="flex justify-center mb-3">
            <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span class="text-xs font-medium text-white">
                {{ userEmail ? userEmail.charAt(0).toUpperCase() : 'U' }}
              </span>
            </div>
          </div>
          
          <!-- Botão Sair -->
          <button 
            @click="handleLogout"
            class="flex items-center w-full rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors"
            :class="isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2'"
            :title="isCollapsed ? 'Sair' : ''"
          >
            <svg 
              class="w-5 h-5 transition-all duration-200" 
              :class="isCollapsed ? '' : 'mr-3'"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            <span v-if="!isCollapsed" class="transition-opacity duration-200">Sair</span>
          </button>
        </div>
        
        <!-- Loading state quando usuário ainda está carregando -->
        <div v-else class="p-4 border-t border-border">
          <div v-if="!isCollapsed" class="flex items-center space-x-3 mb-3">
            <div class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center animate-pulse">
              <span class="text-sm font-medium text-white">...</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="h-4 bg-gray-600 rounded animate-pulse mb-1"></div>
              <div class="h-3 bg-gray-500 rounded animate-pulse w-16"></div>
            </div>
          </div>
          <div v-else class="flex justify-center mb-3">
            <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center animate-pulse">
              <span class="text-xs font-medium text-white">...</span>
            </div>
          </div>
          
          <!-- Botão Sair placeholder -->
          <div class="h-9 bg-gray-600 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Overlay para mobile quando sidebar está aberta -->
    <div 
      v-if="!isCollapsed && isMobile"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

// Composables - abordagem simplificada
const userEmail = ref<string | null>(null)
const isLoggedIn = ref(false)

// Toast
const toast = ref<any>(null)
if (process.client) {
  onMounted(async () => {
    toast.value = await useToastSafe()
    
    // Buscar email do localStorage ou sessão
    checkUserSession()
  })
}

// Função para verificar sessão do usuário
const checkUserSession = () => {
  if (process.client) {
    try {
      // Método mais simples - verificar email salvo
      const savedEmail = localStorage.getItem('user_email')
      if (savedEmail) {
        userEmail.value = savedEmail
        isLoggedIn.value = true
        console.log('[AppSidebar] Email encontrado:', savedEmail)
        return
      }
      
      // Tentar pegar do localStorage do Supabase
      const authData = localStorage.getItem('agzap-auth-token')
      if (authData) {
        const parsed = JSON.parse(authData)
        if (parsed.user && parsed.user.email) {
          userEmail.value = parsed.user.email
          isLoggedIn.value = true
          console.log('[AppSidebar] Usuário encontrado no Supabase:', userEmail.value)
          return
        }
      }
      
      // Tentar pegar do estado global se disponível
      const globalUser = useState('auth_user') as any
      if (globalUser.value && globalUser.value.email) {
        userEmail.value = globalUser.value.email
        isLoggedIn.value = true
        console.log('[AppSidebar] Usuário do estado global:', userEmail.value)
        return
      }
      
      console.log('[AppSidebar] Nenhum usuário encontrado')
    } catch (error) {
      console.error('[AppSidebar] Erro ao verificar sessão:', error)
    }
  }
}

// Estado do sidebar
const isCollapsed = ref(false)
const isMobile = ref(false)

// Função para alternar sidebar
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

// Função para detectar se é mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (isMobile.value) {
    isCollapsed.value = true
  }
}

// Função de logout simplificada
const handleLogout = async () => {
  try {
    console.log('[AppSidebar] Iniciando logout...')
    
    // Limpar localStorage completamente
    if (process.client) {
      localStorage.removeItem('user_email')
      localStorage.removeItem('agzap-auth-token')
      localStorage.removeItem('sb-wynjuzsrydsvkmyhjfhu-auth-token')
      // Limpar todos os itens relacionados ao auth
      Object.keys(localStorage).forEach(key => {
        if (key.includes('auth') || key.includes('supabase') || key.includes('sb-')) {
          localStorage.removeItem(key)
        }
      })
    }
    
    // Limpar estado global
    const globalUser = useState('auth_user')
    const globalSession = useState('auth_session')
    const globalLoading = useState('auth_loading')
    
    globalUser.value = null
    globalSession.value = null
    globalLoading.value = false
    
    // Limpar estado local
    userEmail.value = null
    isLoggedIn.value = false
    
    console.log('[AppSidebar] Estados limpos')
    
    // Mostrar toast de sucesso
    if (toast.value && toast.value.success) {
      toast.value.success('Deslogado com sucesso!', {
        position: 'top-right',
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      })
    }
    
    // Pequeno delay para garantir que tudo foi limpo
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Redirecionar para login com force reload
    console.log('[AppSidebar] Redirecionando para login...')
    await navigateTo('/login', { replace: true })
    
    // Force reload para garantir que a página seja totalmente recarregada
    if (process.client) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 100)
    }
    
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    
    // Mostrar toast de erro
    if (toast.value && toast.value.error) {
      toast.value.error('Erro ao fazer logout. Tente novamente.', {
        position: 'top-right',
        timeout: 5000
      })
    }
    
    // Em caso de erro, force a navegação mesmo assim
    if (process.client) {
      window.location.href = '/login'
    }
  }
}

// Lifecycle
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// Expor estado para componente pai
defineExpose({
  isCollapsed,
  toggleSidebar
})
</script>
