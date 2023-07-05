<script setup>
import { Nav, Alert } from '@/components';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <Nav />
    <Alert />
    <div class="main-body-section">
        <router-view />
    </div>
</template>

<style>
@import '@/assets/scss/main.css';
</style>