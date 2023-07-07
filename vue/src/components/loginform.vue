<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore, useAuthStore } from '@/stores';
import { router } from '@/router';

const registerSchema = Yup.object().shape({
    username: Yup.string()
        .required('El nombre es requerido'),
    email: Yup.string()
        .required('Correo es requerido'),
    password: Yup.string()
        .required('Password es requerido')
        .min(6, 'Password debe tener al menos 6 caracteres'),
    confirmpassword: Yup.string()
        .required('Confirmar Password')
        .min(6, 'Password debe tener al menos 6 caracteres'),
});

const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username es requerido'),
    password: Yup.string().required('Password es requerido')
});

async function onSubmit(values) {
    if (activeForm === 'login') {
        onLoginSubmit(values);
    } else {
        onRegisterSubmit(values);
    }
}

async function onRegisterSubmit(values) {
    const usersStore = useUsersStore();
    const alertStore = useAlertStore();
    try {
        await usersStore.register(values);
        await router.push('/views/accede');
        alertStore.success('Registro Satisfactorio');
    } catch (error) { 
        alertStore.error(error);
    }
}

async function onLoginSubmit(values) {
    const authStore = useAuthStore();
    const { username, password } = values;
    await authStore.login(username, password);
}
</script>


<template>
  <div class="login-form-content">
    <div class="login-form-switch">
      <div class="switch-login" >
        <a class="btn btn-link titulo-form" :class="{ 'is-active': activeForm === 'login' }" @click="activeForm = 'login'">Iniciar Sesión</a>
        <div class="switch-stick"></div>
      </div>
      <div class="switch-register">
        <a class="btn btn-link titulo-form" :class="{ 'is-active': activeForm === 'register' }" @click="activeForm = 'register'">Registrar</a>
        <div class="switch-stick"></div>
      </div>
    </div>
    <div class="login-in">
      <div class="login-in-social">
        <p class="Parrafo"> Puedes registrarte con: </p>
        <div class="IconBox">
            <div><img src="@/assets/img/svg/facebok-icon.svg"></div>
            <div><img  src="@/assets/img/svg/linkedin-icon.svg"></div>
        </div>
        <p class="Parrafo">También puedes registrarte con tu correo</p>
      </div>
      <Form class="login-in-form" @submit="onSubmit" :validation-schema="schema" v-if="activeForm === 'login'" v-slot="{ errors, isSubmitting }">
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
      <Form class="login-in-form" @submit="onSubmit" :validation-schema="schema" v-else v-slot="{ errors, isSubmitting }">
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
</template>


<script>
   export default {
        data() {
            return {
            activeForm: 'login' 
            };
        },
    };
</script>