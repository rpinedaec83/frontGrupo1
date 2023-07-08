<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/normalize.css">
        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../scss/plantilla/main.css">
        <link href="https://css.gg/css" rel="stylesheet" />
        <title>Plantillas Shop</title>
    </head>

    <body>
        <div class="header-carrito">
            <a href="@/">
                <i class="gg-arrow-left --icon"></i>
            </a>
            <p class="texto-form">Carrito de Compra</p>
        </div>
        <div class="product-shop">
            <div class="list_products">
                <div class="card-product">
                    <div class="product__img">
                        <img src="@/assets/img/jpg/cursos.jpg" alt="" srcset="" class="imagen-product">
                    </div>
                    <div class="product__info">
                        <p class="title-product">Gestión de Envases, Empaques y Embalajes</p>
                        <p class="discount-product">Dto. 30%</p>
                        <a href="" class="delate-product">Eliminar</a>
                        <p class="price-product">s/504.00</p>
                    </div>
                </div>
                <div class="card-product">
                    <div class="product__img">
                        <img src="@/assets/img/jpg/cursos.jpg" alt="" srcset="" class="imagen-product">
                    </div>
                    <div class="product__info">
                        <p class="title-product">Gestión de Envases, Empaques y Embalajes</p>
                        <p class="discount-product">Dto. 30%</p>
                        <a href="" class="delate-product">Eliminar</a>
                        <p class="price-product">s/504.00</p>
                    </div>
                </div>
                <div class="card-product">
                    <div class="product__img">
                        <img src="@/assets/img/jpg/cursos.jpg" alt="" srcset="" class="imagen-product">
                    </div>
                    <div class="product__info">
                        <p class="title-product">Gestión de Envases, Empaques y Embalajes</p>
                        <p class="discount-product">Dto. 30%</p>
                        <a href="" class="delate-product">Eliminar</a>
                        <p class="price-product">s/504.00</p>
                    </div>
                </div>
                <div class="card-product">
                    <div class="product__img">
                        <img src="@/assets/img/jpg/cursos.jpg" alt="" srcset="" class="imagen-product">
                    </div>
                    <div class="product__info">
                        <p class="title-product">Gestión de Envases, Empaques y Embalajes</p>
                        <p class="discount-product">Dto. 30%</p>
                        <a href="" class="delate-product">Eliminar</a>
                        <p class="price-product">s/504.00</p>
                    </div>
                </div>

            </div>
            <div class="box-paycard">
                <div class="price_finaly">
                    <p class="texto-form">
                        SubTotal
                    </p>
                    <p class="texto-form">
                        S/600.00
                    </p>
                </div>
                <div class="input-form">
                    <input type="text" name="discount" id="discount" class="input-form__discount"
                        placeholder="Código de descuento">
                    <img src="../source/img/imput_send.svg" alt="" srcset="" class="input-form__icon-send">
                </div>
                <div class="form-cardpay">
                    <a href="" class="a-button btn_finaly">
                        <button type="button" class="a-button__paymentMethod --activate">
                            Continuar
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </body>

    </html>
</template>

<style>
@import '@/assets/scss/carrito/main.css';
</style>