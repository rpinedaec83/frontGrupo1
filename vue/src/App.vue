<script setup>
import { Nav, Alert } from '@/components';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <Nav />
    <Alert />
    <div class="login-view">
        <router-view />
    </div>
</template>

<style>
@import '@/assets/scss/main.css';
</style>