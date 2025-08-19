# Guia Essencial: @nuxtjs/supabase

**Atençao**: Isso é apenas um guia para ajudar, siga as instrucoes do desenvolvedor.

## Instalação e Configuração

### Instalação
```bash
npx nuxi@latest module add supabase
```

### Configuração básica (nuxt.config.ts)
```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  supabase: {
    // Opções opcionais
  }
})
```

### Variáveis de ambiente (.env)
```bash
SUPABASE_URL="https://example.supabase.co"
SUPABASE_KEY="<your_key>"
SUPABASE_SERVICE_KEY="<service_key>" # Opcional
```

## Opções Principais

- **`useSsrCookies`** (padrão: `true`): Permite acesso à sessão no servidor via cookies
- **`redirect`** (padrão: `true`): Redirecionamento automático para login
- **`redirectOptions`**: Configuração de rotas de login/callback
  ```ts
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    exclude: [], // Páginas sem autenticação
    include: undefined, // Apenas páginas específicas
    saveRedirectToCookie: false // Salva página original no cookie
  }
  ```
- **`types`** (padrão: `./types/database.types.ts`): Path para tipos TypeScript

## Autenticação - Fluxo PKCE

### 1. Página de Login (/login)
```vue
<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
}
</script>
<template>
  <div>
    <input v-model="email" type="email" />
    <button @click="signInWithOtp">Sign In</button>
  </div>
</template>
```

### 2. Página de Confirmação (/confirm)
```vue
<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })
</script>
<template>
  <div>Waiting for login...</div>
</template>
```

### 3. Redirecionamento com Cookie
```vue
<script setup lang="ts">
// No confirm.vue
const user = useSupabaseUser()
const redirectInfo = useSupabaseCookieRedirect()

watch(user, () => {
  if (user.value) {
    const path = redirectInfo.pluck() // Pega e limpa o cookie
    return navigateTo(path || '/')
  }
}, { immediate: true })
</script>
```

## Reset de Senha

### 1. Solicitar reset
```vue
<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')

const requestResetPassword = async () => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'https://example.com/password/update',
  })
}
</script>
```

### 2. Atualizar senha
```vue
<script setup lang="ts">
const supabase = useSupabaseClient()
const newPassword = ref('')

const updateUserPassword = async () => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword.value
  })
}
</script>
```

## Composables Principais

- **`useSupabaseClient()`**: Cliente Supabase
- **`useSupabaseUser()`**: Usuário atual (reativo)
- **`useSupabaseCookieRedirect()`**: Gerencia redirecionamento via cookie
- **`serverSupabaseClient()`**: Cliente no servidor
- **`serverSupabaseServiceRole()`**: Cliente com privilégios admin

## Observações Importantes

- Configure URLs de redirect no dashboard do Supabase
- Ative os provedores de autenticação desejados
- Para `useSsrCookies: false`, perde-se suporte a SSR
- O módulo usa PKCE por padrão para segurança
- TypeScript types são gerados automaticamente do schema