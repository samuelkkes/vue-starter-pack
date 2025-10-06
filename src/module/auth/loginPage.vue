<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RiLoader2Line } from '@remixicon/vue'

const { t } = useI18n()
const router = useRouter()

const loading = ref(false)

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  }),
)

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    router.push('/')
  }, 2000)
  loading.value = false
})
</script>

<template>
  <div class="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    <div class="w-full max-w-sm">
      <div class="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{{ t('auth.login.title') }}</CardTitle>
            <CardDescription>{{ t('auth.login.description') }}</CardDescription>
          </CardHeader>
          <CardContent>
            <form @submit="onSubmit">
              <div class="flex flex-col gap-6">
                <FormField v-slot="{ componentField }" name="username">
                  <FormItem>
                    <FormLabel>{{ t('auth.login.username') }}</FormLabel>
                    <FormControl>
                      <Input type="text" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="password">
                  <FormItem>
                    <FormLabel>{{ t('auth.login.password') }}</FormLabel>
                    <FormControl>
                      <Input type="password" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <div class="flex flex-col gap-3">
                  <Button :disabled="loading" type="submit" class="w-full">
                    <RiLoader2Line v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
                    {{ t('auth.login.submit') }}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
