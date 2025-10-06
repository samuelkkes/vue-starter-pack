<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebar } from './utils'
import { RiSidebarUnfoldLine, RiSidebarFoldLine } from '@remixicon/vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar, open } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <RiSidebarFoldLine v-if="open" />
    <RiSidebarUnfoldLine v-else />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
