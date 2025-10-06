<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RiMoonLine, RiSunLine } from '@remixicon/vue'
import { useColorMode } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        <RiMoonLine
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <RiSunLine
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>{{ t('theme.theme') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="mode">
        <DropdownMenuRadioItem value="light">
          {{ t('theme.light') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">
          {{ t('theme.dark') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="auto">
          {{ t('theme.system') }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
