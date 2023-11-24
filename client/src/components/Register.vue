<template>
    <div>
        <h1>Register</h1>

        <input 
            type="email"
            name="email"
            placeholder="email"
            v-model="email"
        >
        <br>
        <input 
            type="text"
            name="password"
            placeholder="password"
            v-model="password"
        >
        <br>
        <button
            @click="register"
        >Register</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import AuthenticationService from '@/services/AuthenticationService'

const email = ref('')
const password = ref('')

watch(email, (value) => {
    console.log("email changed", value);
})

async function register() {
    const response = await AuthenticationService.register({
        email: email.value,
        password: password.value
    })
    console.log(response.data);

    console.log('register button was clicked');
}
</script>

<style scoped>

</style>