<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
    <div class="section alternate-section hero-section">
        <div class="container">
            <div class="content">
                <div class="heading-wrapper">
                    <h1 class="heading-tag">¡Explota todo tu potencialtecnológico!</h1>
                </div>
                <div class="heading-wrapper">
                    <h3 class="heading-tag">Con nuestros programas de especialización</h3>
                </div>
            </div>
        </div>
    </div>
</template>
