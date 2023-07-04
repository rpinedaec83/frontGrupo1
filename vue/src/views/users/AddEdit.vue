<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';

const usersStore = useUsersStore();
const alertStore = useAlertStore();
const route = useRoute();
const id = route.params.id;

let title = 'Add User';
let user = null;
if (id) {
    // edit mode
    title = 'Edit User';
    ({ user } = storeToRefs(usersStore));
    usersStore.getById(id);
}

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
        .min(6, 'Password debe ser de al menos 6 caracteres')
});


async function onSubmit(values) {
    try {
        let message;
        if (user) {
            await usersStore.update(user.value.id, values)
            message = 'User updated';
        } else {
            await usersStore.register(values);
            message = 'User added';
        }
        await router.push('/users');
        alertStore.success(message);
    } catch (error) {
        alertStore.error(error);
    }
}
</script>

<template>
    <h1>{{title}}</h1>
    <template v-if="!(user?.loading || user?.error)">
        <Form @submit="onSubmit" :validation-schema="schema" :initial-values="user" v-slot="{ errors, isSubmitting }">
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
            <div class="FormCheck">
                <input type="checkbox" id="registerTerm" required="required">
                <label for="registerTerm" class="Parrafo">Acepto <span class="is-term">Términos y condiciones</span></label>
            </div>
            <input type="submit" value="Registrarse" class="titulo-form">
        </Form>
    </template>
    <template v-if="user?.loading">
        <div class="text-center m-5">
            <span class="spinner-border spinner-border-lg align-center"></span>
        </div>
    </template>
    <template v-if="user?.error">
        <div class="text-center m-5">
            <div class="text-danger">Error cargando usuario: {{user.error}}</div>
        </div>
    </template>
</template>
