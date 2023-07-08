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
                <div class="floating-form">
                    <div class="floating-form-inner">
                        <form action="">
                            <div class="heading-wrapper">
                                <h4 class="heading-tag">Postula y obtén un 10% de descuento en el programa</h4>
                            </div>
                            <input type="text" name="name" id="name" placeholder="Nombre">
                            <input type="text" name="phone" id="phone" placeholder="Celular">
                            <input type="text" name="email" id="email" placeholder="Correo Electrónico">
                            <input type="text" name="programa" id="prog" placeholder="Programa">
                            <span>
                                <input type="checkbox" name="terms" id="terms">
                                <label for="terms">Acepto las Políticas de privacidad.</label>
                            </span>
                            <button>Quiero postular</button>
                        </form>
                    </div>
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
    <div class="section alternate-section gradient-section">
        <div class="container">
            <div class="content">
                <div class="content-wrapper">
                    <img src="@/assets/img/png/Asset-gradient-section.png" alt="" class="overlay">
                    <div class="column">
                        <div class="heading-wrapper">
                            <h3 class="heading-tag">
                                Sé parte de la comunidad
                            </h3>
                        </div>
                        <div class="text-box">
                            <br>
                            <p>
                                Programas semi-presenciales para el desarrollo de habilidades de programación a lo largo 
                                de todo el Stack tecnológico.
                            </p>
                            <br>
                            <p>
                                Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del 
                                funcionamiento de una aplicación, así como formar parte de una gran comunidad de 
                                desarrolladores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section main-section beneficios-section">
        <div class="container">
            <div class="content">
                <div class="heading-wrapper">
                    <h3 class="heading-tag">
                        Beneficios
                    </h3>
                </div>
                <div class="beneficios-grid">
                    <div class="beneficios-grid-inner">
                        <div class="beneficios-item">
                            <div class="beneficios-item-inner">
                                <div class="icon-wrapper">
                                    <div class="icon-inner">
                                        <img src="@/assets/img/png/icon-users.png" alt="">
                                    </div>
                                </div>
                                <div class="content-wrapper">
                                    <div class="heading-wrapper">
                                        <h4 class="heading-tag">
                                            Aprende de Expertos
                                        </h4>
                                    </div>
                                    <div class="text-box">
                                        <p>
                                            Aprende directamente de expertos del mercado a través del análisis y solución de problemas de 
                                            programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="beneficios-item">
                            <div class="beneficios-item-inner">
                                <div class="icon-wrapper">
                                    <div class="icon-inner">
                                        <img src="@/assets/img/png/icon-screen.png" alt="">
                                    </div>
                                </div>
                                <div class="content-wrapper">
                                    <div class="heading-wrapper">
                                        <h4 class="heading-tag">
                                            Aprende de Expertos
                                        </h4>
                                    </div>
                                    <div class="text-box">
                                        <p>
                                            Aprende directamente de expertos del mercado a través del análisis y solución de problemas de 
                                            programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="beneficios-item">
                            <div class="beneficios-item-inner">
                                <div class="icon-wrapper">
                                    <div class="icon-inner">
                                        <img src="@/assets/img/png/icon-bag.png" alt="">
                                    </div>
                                </div>
                                <div class="content-wrapper">
                                    <div class="heading-wrapper">
                                        <h4 class="heading-tag">
                                            Aprende de Expertos
                                        </h4>
                                    </div>
                                    <div class="text-box">
                                        <p>
                                            Aprende directamente de expertos del mercado a través del análisis y solución de problemas de 
                                            programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-form">
                    <form action="">
                            <div class="heading-wrapper">
                                <h4 class="heading-tag">Postula y obtén un 10% de descuento en el programa</h4>
                            </div>
                            <input type="text" name="name" id="name" placeholder="Nombre">
                            <input type="text" name="phone" id="phone" placeholder="Celular">
                            <input type="text" name="email" id="email" placeholder="Correo Electrónico">
                            <input type="text" name="programa" id="prog" placeholder="Programa">
                            <span>
                                <input type="checkbox" name="terms" id="terms">
                                <label for="terms">Acepto las Políticas de privacidad.</label>
                            </span>
                            <button>Quiero postular</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>
