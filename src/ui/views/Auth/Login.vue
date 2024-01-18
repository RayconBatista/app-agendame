<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.stop.prevent="submit">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email
                            </label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :class="{ 'focus:border-blue border-2 dark:border-red-500': errors.email }"
                                placeholder="name@company.com" v-model="email" :error-messages="errors.email">
                            <span class="text-red-500" v-if="!!errors">{{ errors.email }}</span>

                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" v-model="password" :error-messages="errors.password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :class="{ 'focus:border-blue border-2 dark:border-red-500': errors.password }">
                            <span class="text-red-500" v-if="!!errors">{{ errors.password }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot
                                password?</a>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                            in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <router-link class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                :to="{ name: 'register' }">Sign up</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";
import { useRouter, useRoute } from "vue-router";
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup'

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const schema = object({
            email: string().required().email().label('E-mail'),
            password: string().required().min(6).label('Senha')
        })

        const { handleSubmit, errors } = useForm({
            validationSchema: schema,
            initialValues: {
                email: '',
                password: ''
            }
        })

        const submit = handleSubmit(async (values) => {
            try {
                await store
                    .dispatch("auth", {
                        email: values.email,
                        password: values.password
                    }).then(() => {
                        notify({
                            title: "Deu certo!",
                            type: "success",
                        });
                    }).finally(() => {
                        router.push({ name: "dashboard" })
                    })
            } catch (e) {
                let msgError = "Falha na requisição";
                notify({
                    title: "Falha ao autenticar",
                    text: msgError,
                    type: "warn",
                });
            }
        })

        const { value: email } = useField('email')
        const { value: password } = useField('password')

        return {
            email,
            password,
            errors,
            submit
        }
    }
}
</script>