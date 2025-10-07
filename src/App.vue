<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useColorMode } from '@vueuse/core'

useColorMode()
</script>

<template>
  <router-view />
  <VueQueryDevtools />
</template>
