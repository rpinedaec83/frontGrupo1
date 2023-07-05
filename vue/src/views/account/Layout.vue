<script setup>
import { useAuthStore } from '@/stores';
import { router } from '@/router';

// redirect home if already logged in
const authStore = useAuthStore();
if (authStore.user) {
    router.push('/');
}
</script>

<script>
export default {
  mounted() {
    // Function to check if the header element is present and hide it if it is
    const hideHeaderIfLoginViewPresent = () => {
      const loginViewElement = document.querySelector('.login-view');
      const headerElement = document.querySelector('.header');

      if (loginViewElement && headerElement) {
        headerElement.style.display = 'none';
      }
    };

    // Call the function when the component is mounted
    hideHeaderIfLoginViewPresent();
  },
};
</script>

<template>
    <div class="login-view">
        <div class="login-hero-section">
            <section  class="loginhero container-full">
                <div  class="login-hero-bg"><img src="@/assets/img/png/hero_desktop.png"></div>
                <div class="login-hero-content section-type-1">
                    <div class="login-header"><img src="@/assets/img/svg/logo.svg"></div>
                    <div class="login-hero-text">
                        <h1 class="titulo-1">¡Explota todo tu potencial<br>tecnológico!</h1>
                        <p class="subtitulo">Con nuestros programas<br>de especialización</p>
                    </div>
                    <div class="login-footer">
                        <div  class="respaldo section-type-1">
                            <p  class="title-respaldo">Con el respaldo de:</p>
                            <div  class="respaldo-box-logos">
                                <img src="@/assets/img/svg/whiteintercorp.svg" alt="">
                                <img src="@/assets/img/svg/whiteidat.svg" alt="">
                                <img src="@/assets/img/svg/whitezegel.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="login-log-form">
            <router-view />
        </div>
    </div>
</template>
