<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
    <!-- Título principal -->
    <div class="animate-fade-in flex items-center flex-col justify-center">
      <h1 class="text-4xl md:text-5xl font-bold drop-shadow-md">
        Oi, meu amor! 💖
      </h1>
      <p class="mt-4 text-lg md:text-xl">
        Eu vi que você postou um story dizendo que quando vc me faz um pedido eu faço e isso é verdade kkk. Então, eu vim aqui de uma forma diferente e divertida para realizar um desejo seu! 🪔✨
      </p>
    </div>

    <!-- Botão para redirecionar -->
    <div class="mt-10">
      <router-link
          to="/wish"
          class="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:opacity-90 transition-transform transform hover:scale-105"
      >
        <span class="mr-2">Clique aqui para fazer seu desejo!</span>
        <span>🧞‍♂️</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out;
}
</style>
