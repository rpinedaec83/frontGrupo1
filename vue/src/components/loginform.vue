<script>
  import { Form, Field } from 'vee-validate';
  import { useUsersStore, useAuthStore, useAlertStore } from '@/stores';
  import { router } from '@/router';

  export default {
    components: {
      Form,
      Field
    },
    data() {
      return {
        activeForm: 'login',
        usernameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
      };
    },
    created() {
      this.setActiveForm(this.activeForm);
    },
    methods: {
      setActiveForm(form) {
        this.activeForm = form;
      },
      async onSubmit(values) {
        const usersStore = useUsersStore();
        const alertStore = useAlertStore();
        try {
          if (this.activeForm === 'login') {
            const authStore = useAuthStore();
            const { username, password } = values;
            await authStore.login(username, password);
          } else {
            const { username, email, password, confirmpassword } = values;

            this.usernameError = '';
            this.emailError = '';
            this.passwordError = '';
            this.confirmPasswordError = '';

            if (!username) {
              this.usernameError = 'El nombre es requerido';
            }
            if (!email) {
              this.emailError = 'Correo es requerido';
            }
            if (!password) {
              this.passwordError = 'Password es requerido';
            } else if (password.length < 6) {
              this.passwordError = 'Password debe ser de al menos 6 caracteres';
            }
            if (!confirmpassword) {
              this.confirmPasswordError = 'Confirmar Password es requerido';
            } else if (password !== confirmpassword) {
              this.confirmPasswordError = 'Las contraseñas no coinciden';
            }

            if (this.usernameError || this.emailError || this.passwordError || this.confirmPasswordError) {
              return;
            }

            await usersStore.register(values);
            await router.push('/');
            alertStore.success('Registro Satisfactorio');
          }
        } catch (error) { 
          console.error(error);
        }
      }
    }
  };
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
              <Field name="username" placeholder="Nombres y Apellidos" type="text" class="form-control" :class="{ 'is-invalid': usernameError }" />
              <div class="invalid-feedback">{{ usernameError }}</div>
            </div>
            <div class="form-group">
              <Field name="password" placeholder="Contraseña" type="password" class="form-control" :class="{ 'is-invalid': passwordError }" />
              <div class="invalid-feedback">{{ passwordError }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary login-button" :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    Ingresar
                </button>
            </div>
      </Form>
      <Form class="login-in-form" @submit="onSubmit" v-if="activeForm === 'register'" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <Field name="username" placeholder="Nombres y Apellidos" type="text" class="form-control" :class="{ 'is-invalid': usernameError }" />
          <div class="invalid-feedback">{{ usernameError }}</div>
        </div>
        <div class="form-group">
          <Field name="email" placeholder="Correo electrónico" type="email" class="form-control" :class="{ 'is-invalid': emailError }" />
          <div class="invalid-feedback">{{ emailError }}</div>
        </div>
        <div class="form-group">
          <Field name="password" placeholder="Contraseña" type="password" class="form-control" :class="{ 'is-invalid': passwordError }" />
          <div class="invalid-feedback">{{ passwordError }}</div>
        </div>
        <div class="form-group">
          <Field name="confirmpassword" placeholder="Repite Contraseña" type="password" class="form-control" :class="{ 'is-invalid': confirmPasswordError }" />
          <div class="invalid-feedback">{{ confirmPasswordError }}</div>
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

