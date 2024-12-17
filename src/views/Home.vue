<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-2">
    <!-- Título principal -->
    <div class="animate-fade-in flex items-center flex-col justify-center">
      <h1 class="text-4xl md:text-5xl font-bold drop-shadow-md">
        Parabéns! 🎉
      </h1>
      <p class="mt-4 text-lg md:text-xl">
        Você encontrou o <span class="text-yellow-300 font-semibold">gênio da lâmpada que é seu namorado</span>! 🪔
      </p>
      <p class="mt-2 text-lg">
        Você pode realizar um desejo. O que será?
      </p>
      <p class="mt-3 text-sm ">
        Dica: hj o ifood tem promoção
      </p>
    </div>

    <!-- Formulário do Desejo -->
    <div class="mt-10 w-full max-w-md bg-white rounded-lg shadow-xl p-6 text-black animate-slide-in px-2">
      <form @submit.prevent="submitWish">
        <label for="wish" class="block text-lg font-semibold mb-2">
          Escreva seu desejo:
        </label>
        <textarea
            id="wish"
            v-model="wish"
            class="w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 p-4 resize-none"
            placeholder="Escreva aqui..."
            rows="4"
        ></textarea>
        <button
            type="submit"
            class="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:opacity-90 transition-transform transform hover:scale-105 px-2"
        >
          Enviar Desejo
        </button>
      </form>
    </div>

    <!-- Mensagem de Confirmação -->
    <div
        v-if="showMessage"
        class="mt-10 text-xl bg-pink-600 bg-opacity-75 rounded-lg p-4 animate-pulse"
    >
      ✨ Seu desejo foi enviado! Agora é só esperar que ele se realize! ❤️
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com"; // Adicione o EmailJS

export default {
  data() {
    return {
      wish: "",
      showMessage: false,
    };
  },
  methods: {
    async submitWish() {
      if (this.wish.trim()) {
        // Configurar dados do EmailJS
        const emailParams = {
          wish: this.wish,
          email_to: "matheus.grawe12@gmail.com", // Destinatário
        };

        try {
          await emailjs.send(
              "service_z61hy0c", // Substitua pelo ID do serviço
              "template_jagf3w4", // Substitua pelo ID do template
              emailParams,
              "V3kiiM0usqn0Iyy-t" // Substitua pela chave pública
          );

          // Exibe mensagem de sucesso
          this.showMessage = true;

          // Reseta o formulário após 5 segundos
          setTimeout(() => {
            this.wish = "";
            this.showMessage = false;
          }, 5000);
        } catch (error) {
          console.error("Erro ao enviar o e-mail:", error);
          alert("Houve um problema ao enviar o desejo. Tente novamente mais tarde.");
        }
      } else {
        alert("Por favor, escreva um desejo!");
      }
    },
  },
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

.animate-slide-in {
  animation: slideIn 1.5s ease-in-out;
}
</style>
