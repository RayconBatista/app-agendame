<template>
    <section class="container mx-auto flex flex-wrap py-6">
        <!-- Coluna de texto -->
        <div class="w-full md:w-1/2 px-4 flex items-center">
          <div class="text-left">
            <h2 class="text-2xl font-bold mb-2">Sistema para barbearia completo e descomplicado</h2>
            <!-- <p class="text-gray-700">FAÇA SEU NEGÓCIO DECOLAR</p> -->
            <router-link class="text-gray-700" :to="{ name: 'site.pricing'}">FAÇA SEU NEGÓCIO DECOLAR</router-link>
          </div>
        </div>
        <!-- Coluna de imagem -->
        <div class="w-full md:w-1/2 px-4">
          <img class="object-cover w-full h-full" src="@/ui/assets/images/site/barber.svg" alt="Descrição da Imagem">
        </div>
      </section>
      
</template>