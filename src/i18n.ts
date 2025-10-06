import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

function getCurrentLocale(): string {
  if (localStorage.getItem('last-locale')) {
    return localStorage.getItem('last-locale') || "fr"
  }
  return "fr"
}

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  locale: getCurrentLocale(),
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'fr': fr
  }
})
