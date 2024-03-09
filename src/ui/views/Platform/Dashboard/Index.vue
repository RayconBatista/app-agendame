<template>
  <div>
    Dashboard
    <br><br>
    <pre>{{ user?.name }}</pre>
    <pre>{{ user?.email }}</pre>
    <br>
    Tá logado jovem? {{ isLoggedIn }}
  </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useMeStore } from "@/store/me";

export default {
  name: "Dashboard",
  setup() {
    const meStore     = useMeStore();
    const user        = computed(() => meStore.user);
    const isLoggedIn  = computed(() => meStore.isLoggedIn);

    onMounted(() => {
      meStore.getMe();
    })


    return {
      user,
      isLoggedIn
    }
  }
}
</script>