<script setup>
import { Nav, Alert } from '@/components';
import { useAuthStore } from '@/stores';
import { Carrito } from '@/views';

const authStore = useAuthStore();
</script>

<template>
    <Nav />
    <Alert />
    <div class="main-body-section">
        <router-view />
    </div>
    <!-- <Carrito /> -->
</template>

<style>
@import '@/assets/scss/main.css';
</style>