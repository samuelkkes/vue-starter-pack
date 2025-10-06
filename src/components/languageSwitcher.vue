<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RiFileWordLine } from '@remixicon/vue'
import { Button } from '@/components/ui/button'
import { useI18n } from 'vue-i18n'

const {t, locale} = useI18n()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon">
        <RiFileWordLine/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>{{t('locale.languages')}}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="locale">
        <DropdownMenuRadioItem value="en">
          {{t('locale.english')}}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="fr">
          {{t('locale.french')}}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
