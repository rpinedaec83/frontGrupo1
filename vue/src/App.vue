<script setup>
import { Nav, Alert, Footer } from '@/components';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<script>
    import { ref } from "vue";

    export default {
        data() {
            return {
            show: true
            };
        }
    };
</script>

<template>
    <Nav v-show="show" />
    <Alert />  
    <div class="main-body-section">
        <router-view />
    </div> 
    <Footer v-show="show" /> 
</template>

<style>
@import '@/assets/scss/main.css';
</style>



