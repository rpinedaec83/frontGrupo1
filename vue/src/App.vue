<script setup>
import { Nav, Alert, Footer } from '@/components';
import { useAuthStore } from '@/stores';
import { Carrito } from '@/views';

import { accede, Home } from '@/views';

const authStore = useAuthStore();
</script>

<template>
    <Nav  v-if="!hideHeader" />
    <Alert />  
    <div class="main-body-section">
    <router-view /> 
    </div>
    <Footer v-if="!hideFooter" /> 
    <!-- <Carrito /> -->
</template>

<style>
@import '@/assets/scss/main.css';
</style>

<script>
export default {
  computed: {
    hideHeader() {
      return this.$route.meta.hideHeaderFooter === true;
    },
    hideFooter() {
      return this.$route.meta.hideHeaderFooter === true;
    },
  },
};
</script>

