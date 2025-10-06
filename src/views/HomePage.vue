<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div>
    {{ t('dashboard.welcome') }}
  </div>
  <div class="grid auto-rows-min gap-4 md:grid-cols-3">
    <div class="aspect-video rounded-xl bg-muted/50" />
    <div class="aspect-video rounded-xl bg-muted/50" />
    <div class="aspect-video rounded-xl bg-muted/50" />
  </div>
  <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
</template>
