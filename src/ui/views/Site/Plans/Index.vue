<template>
    <section class="bg-white dark:bg-gray-900">
        <div v-if="isLoading">
            <Spinner :loading="isLoading" />
        </div>
        <template v-else>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Experimente o Novo App de Agendamento de Barbearia!
                    </h2>
                    <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Você está cansado de esperar na fila por um corte de cabelo ou barba? Dê adeus a isso com nosso novo
                        sistema de agendamento de barbearia! Com apenas alguns toques na tela do seu celular, você pode
                        marcar seu próximo corte de cabelo ou barba de onde quer que esteja.
                    </p>
                </div>
                
                <SubscriberSection />
            </div>
        </template>
    </section>
</template>
<script>
import Spinner from '@/ui/components/Spinner.vue';
import SubscriberSection from '@/ui/components/SubscriberSection.vue';

export default {
    name: "Plans",
    components: {
        Spinner,
        SubscriberSection
    },
}
</script>