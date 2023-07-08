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
    <div class="section main-section courses-section">
        <div class="container">
            <div class="content">
                <div class="img-wrapper sponsore-wrapper">
                    <img src="@/assets/img/png/sponsor.png" alt="">
                </div>
                <div class="heading-wrapper heading-is-purple">
                    <h3 class="heading-tag">Conoce nuestros Programas de Especialización</h3>
                </div>
                <div class="cursos-wrapper">
                    <div class="cursos-wrapper-inner">
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                        <div class="cursos-item">
                            <div class="curso-inner">
                                <div class="img-wrapper">
                                    <img src="@/assets/img/jpg/cursos.jpg" alt="">
                                </div>
                                <div class="heading-wrapper">
                                    <h3 class="heading-tag">Desarrollo Front-End</h3>
                                </div>
                                <div class="button-wrapper">
                                    <a href="#" class="button">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
