<template>
  <div class="min-h-screen bg-background">
    <!-- Sidebar -->
    <AppSidebar ref="sidebarRef" />
    
    <!-- Conteúdo principal -->
    <div 
      class="transition-all duration-300 ease-in-out min-h-screen"
      :class="[
        'lg:ml-16',
        !sidebarRef?.isCollapsed ? 'lg:ml-64' : 'lg:ml-16'
      ]"
    >
      <!-- Header simplificado (opcional) -->
      <header class="bg-card border-b border-border px-6 py-4 lg:hidden">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-semibold text-foreground">Agzap</h1>
          <button 
            @click="sidebarRef?.toggleSidebar()"
            class="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </header>

      <!-- Conteúdo da página -->
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Referência do sidebar
const sidebarRef = ref()
</script>
