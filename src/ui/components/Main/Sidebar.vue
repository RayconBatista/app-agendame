<template>
    <ul class="space-y-2 font-medium">
      <li v-for="(item, index) in sidebar" :key="index">
        <router-link
          :to="{ name: item.to }"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
          :class="{ 'bg-gray-100 dark:bg-gray-700': isRouteActive(item.to) }"
        >
          <i :class="item.icon"></i>
          <span class="ml-3">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { onMounted, ref } from "vue";
  import router from "@/router";
  import sidebar from "@/config/sidebar.js";
  
  export default {
    name: "Sidebar",
    setup() {
      const store = useStore();
      const loading = ref(false);
  
      onMounted(() => {
        sidebar.menu;
      });
  
      const logout = () => {
        loading.value = true;
        store
          .dispatch("logout")
          .then(() => router.push({ name: "login" }))
          .finally(() => (loading.value = false));
      };
  
      const isRouteActive = (routeName) => {
        // Verifica se a rota atual é a mesma que a rota do item do sidebar
        return router.currentRoute.value.name === routeName;
      };
  
      return {
        logout,
        sidebar: sidebar.menu,
        isRouteActive,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  