<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';

const schema = Yup.object().shape({
    username: Yup.string()
        .required('El nombre es requerido'),
    email: Yup.string()
        .required('Correo es requerido'),
    password: Yup.string()
        .required('Password es requerido')
        .min(6, 'Password debe ser de al menos 6 caracteres'),
    confirmpassword: Yup.string()
        .required('Confirmar Password')
        .min(6, 'Password debe ser de al menos 6 caracteres'),
});

async function onSubmit(values) {
    const usersStore = useUsersStore();
    const alertStore = useAlertStore();
    try {
        await usersStore.register(values);
        await router.push('/account/login');
        alertStore.success('Registro Satisfactorio');
    } catch (error) { 
        alertStore.error(error);
    }
}
</script>

<template>
    <section class="login-form">
        <div class="login-form-content">
             <div  class="login-form-switch">
                <div class="switch-register ">
                    <router-link to="login" class="btn btn-link titulo-form">Iniciar Sesión</router-link>
                    <div  class="switch-stick"></div>
                </div>
                <div class="switch-login is-active">
                    <span class="titulo-form">Registrar</span>
                    <div  class="switch-stick"></div>
                </div>
            </div>
            <div class="login-in">
                <div  class="login-in-social">
                    <p class="Parrafo">Puedes registrarte con:</p>
                    <div  class="IconBox">
                        <div><img src="@/assets/img/svg/facebok-icon.svg"></div>
                        <div><img  src="@/assets/img/svg/linkedin-icon.svg"></div>
                    </div>
                    <p class="Parrafo">También puedes registrarte con tu correo</p>
                </div>
                <Form class="login-in-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="form-group">
                        <Field name="username" placeholder="Nombres y Apellidos" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
                        <div class="invalid-feedback">{{ errors.username }}</div>
                    </div>
                    <div class="form-group">
                        <Field name="email" placeholder="Correo electrónico" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" />
                        <div class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    <div class="form-group">
                        <Field name="password"  placeholder="Contraseña" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                        <div class="invalid-feedback">{{ errors.password }}</div>
                    </div>
                    <div class="form-group">
                        <Field name="confirmpassword"  placeholder="Repite Contraseña" type="password" class="form-control" :class="{ 'is-invalid': errors.confirmpassword }" />
                        <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                    </div>
                    <div class="form-group">
                        <div class="FormCheck" >
                            <input  type="checkbox" id="registerTerm">
                            <label for="registerTerm" class="Parrafo">Acepto <span class="is-term">Términos y condiciones</span></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary login-button" :disabled="isSubmitting">
                            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            Registrar
                        </button>
                    </div>   
                </Form>
            </div>
        </div>
    </section>
</template>
