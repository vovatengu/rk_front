<template>
    <v-card :width="width" :disabled="loading">
        <v-card-title>Выполните вход</v-card-title>
        <v-form @submit.prevent="onLoging">
            <v-card-text>
                <LoginTextField v-model="login" label="Имя пользователя" placeholder="Victor123456" />
                <LoginTextField v-model="password" label="Пароль" type="password" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text type="submit" color="primary" :loading="loading">Войти</v-btn>
            </v-card-actions>
        </v-form>
        <v-snackbar
            :value="error"
            color="red darken-2"
            dark
        >
            <v-icon>mdi-alert-circle-outline</v-icon>
            {{ error }}
        </v-snackbar>
    </v-card>
</template>

<script>
import LoginTextField from './LoginTextField.vue'

export default {
    props: ["width"],
    data: () => ({
        loading: false,
        error: undefined,
        login: '',
        password: ''
    }),
    computed: {
        creds(){
            return {
                login: this.login,
                password: this.password
            }
        }
    },
    methods: {
        async onLoging(){
            this.loading = true
            try {
                try {
                    await this.$store.dispatch('login', this.creds)
                } catch (e) {
                    this.showError(e.message)
                }
            } finally {
                this.loading = false
            }
        },
        showError(e) {
            this.error = e
            setTimeout(() => this.error = undefined, 7000)
        }
    },
    components: {
        LoginTextField
    }
}
</script>