import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLocaleStore = defineStore("app", () => {
  const local = ref("fr");
  const locales = ref(["en", "fr"]);

  const getCurrentLocal = computed(() => local.value);
  const getLocales = computed(() => locales.value);

  function setLocal(newLocal: string) {
    local.value = newLocal;
  }

  return { getCurrentLocal, getLocales, setLocal };
}, {
  persist: true
});
