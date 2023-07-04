<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
    username: Yup.string().required('Username es requerido'),
    password: Yup.string().required('Password es requerido')
});

async function onSubmit(values) {
    const authStore = useAuthStore();
    const { username, password } = values;
    await authStore.login(username, password);
}
</script>

<template>
     <section class="login-form">
        <div class="login-form-content">
            <div  class="login-form-switch">
                <div class="switch-login is-active">
                    <span class="titulo-form">Iniciar Sesión</span>
                    <div class="switch-stick"></div>
                </div>
                <div  class="switch-register">
                    <router-link to="register" class="btn btn-link titulo-form">Registrar</router-link>
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
                        <Field name="username" placeholder="Usuario" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
                        <div class="invalid-feedback">{{ errors.username }}</div>
                    </div>
                    <div class="form-group">
                        <Field name="password" placeholder="Contraseña" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                        <div class="invalid-feedback">{{ errors.password }}</div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary login-button" :disabled="isSubmitting">
                            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            Ingresar
                        </button>
                    </div>
                </Form>
            </div>
        </div>  
    </section> 
</template>
