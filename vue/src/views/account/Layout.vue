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
                    <router-link to="/" class="login-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="184.284" height="33" viewBox="0 0 184.284 33">
                            <g id="Grupo_17590" data-name="Grupo 17590" transform="translate(-86 -14)">
                                <path id="Trazado_5404" data-name="Trazado 5404" d="M0-84.2H0v22.53L7.813-54.2H22.145l1.078-1.034-2.185-2.525-.225.225H9.146L3.323-63.092v-17.78H26.636v17.78l-.412.39L28.4-60.177l1.564-1.491V-84.2Zm6.653,6.661h0v12.46l4.416,4.211h7.282l-2.859-3.327.015-.008H12.4L9.984-66.509V-74.2h9.991v4.256l3.33,3.859V-77.538Zm6.661,6.668h0v3.334h1.819L26.636-54.2h3.33v-3.334H28.148l-11.5-13.337Zm0,0" transform="translate(86 98.199)" fill="#fff"/>
                                <g id="Grupo_7" data-name="Grupo 7" transform="translate(128 14)">
                                <path id="Trazado_2" data-name="Trazado 2" d="M128.023-55.342h-8v3h8Zm1.99-2h0v7h-9.986v5h-1.989v-12Zm0,0" transform="translate(-118.037 57.344)" fill="#fff"/>
                                <path id="Trazado_3" data-name="Trazado 3" d="M160.932-55.342h-7.987v3h7.987Zm2-2h0v12h-2v-5h-7.987v5h-2v-12Zm0,0" transform="translate(-135.924 57.344)" fill="#fff"/>
                                <path id="Trazado_4" data-name="Trazado 4" d="M195.852-57.344h0v2h-9.986v8h9.986v2H183.877v-12Zm0,0" transform="translate(-153.823 57.344)" fill="#fff"/>
                                <path id="Trazado_5" data-name="Trazado 5" d="M218.786-50.348h0v5h-2v-12h2v5h7.987v-5h2v12h-2v-5Zm0,0" transform="translate(-171.71 57.344)" fill="#fff"/>
                                <path id="Trazado_6" data-name="Trazado 6" d="M259.7-55.342h-7.987v3H259.7Zm2-2h0v12h-2v-5h-7.987v5h-2v-12Zm0,0" transform="translate(-189.609 57.344)" fill="#fff"/>
                                <path id="Trazado_7" data-name="Trazado 7" d="M284.626-44.391h-2v-1.992h2Zm0,0" transform="translate(-207.496 51.386)" fill="#fff"/>
                                <path id="Trazado_8" data-name="Trazado 8" d="M303.667-55.342H295.68v8h2.989v-2h2v2h3Zm2-2h0v12h-5v2h-2v-2h-4.988v-12Zm0,0" transform="translate(-213.504 57.344)" fill="#fff"/>
                                <path id="Trazado_9" data-name="Trazado 9" d="M328.59-44.391h-2v-1.992h2Zm0,0" transform="translate(-231.392 51.386)" fill="#fff"/>
                                <path id="Trazado_10" data-name="Trazado 10" d="M349.63-57.344h0v2h-5v10h-2v-10h-4.988v-2Zm0,0" transform="translate(-237.4 57.344)" fill="#fff"/>
                                <path id="Trazado_11" data-name="Trazado 11" d="M382.539-57.344h0v2h-9.986v3h9.986v1.992h-9.986v3h9.986v2H370.554v-12Zm0,0" transform="translate(-255.287 57.344)" fill="#fff"/>
                                <path id="Trazado_12" data-name="Trazado 12" d="M403.485-57.344h0v12H415.47v-2h-9.986v-8h9.986v-2Zm0,0" transform="translate(-273.186 57.344)" fill="#fff"/>
                                </g>
                                <text id="ESCUELA_DE_CODING" data-name="ESCUELA DE CODING" transform="translate(128 43)" fill="#fff" font-size="12" font-family="Poppins-Regular, Poppins" letter-spacing="0.12em"><tspan x="0" y="0">ESCUELA DE CODING</tspan></text>
                            </g>
                        </svg>
                    </router-link>
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
