<template>
        <TheHeader />
        <RouterView />
</template>
<script>
import TheHeader from '../components/Site/TheHeader.vue';
export default {
    name: 'WebSite',
    components: {
        TheHeader
    }
}
</script>