<script setup>
import aguayo from '@/assets/images/pages/aguayo.jpg'
import cactus from '@/assets/images/pages/cactus.webp'
import camino from '@/assets/images/pages/camino.jpg'
import cholita from '@/assets/images/pages/cholita.jpg'
import comida from '@/assets/images/pages/comida.webp'
import cueca from '@/assets/images/pages/cueca.webp'
import diccionario from '@/assets/images/pages/diccionario.webp'
import llama from '@/assets/images/pages/llama.jpg'
import llamasypasano from '@/assets/images/pages/llamasypasano.webp'
import manakanchu from '@/assets/images/pages/manakanchu.webp'
import trabajocampo from '@/assets/images/pages/trabajocampo.webp'
import uyuni from '@/assets/images/pages/uyuni.jpg'
import { ref } from 'vue'

import useWordStore from '@/store/index.js'
import axios from 'axios'
// import { createClient } from 'pexels';

const word = ref('')
const translate = ref(null)
const quechua = ref(null)
const espanol = ref(null)
const ingles = ref(null)
const wordList = ref(null)
const firstPhoto = ref(null)
const errorMessage = ref(false)
const respuesta = ref(true)
const foto = ref(true)
const queryWord = ref(null)
const key = '21835325-2e6ca947912821e07a8eed8c6'
// All requests made with the client will be authenticated

const imagenes = [uyuni, llama, aguayo, camino, cholita, cactus, comida, cueca, llamasypasano, trabajocampo , diccionario]
const filteredWords = ref([]);
const wordStore = useWordStore();

const onInput = (event) => {
  const newVal = event.target.value; // Captura el valor del input directamente
  if (typeof newVal !== 'string') {
    console.warn('Valor no es un string:', newVal);
    return;  // Si no es un string, no hacemos nada
  }

  console.log('Valor ingresado:', newVal);
  const query = newVal.trim();
  if (query.length >= 2) {
    const result = wordStore.allQuechuaWords.filter(quechuaWord => {
      console.log(`Comparando ${quechuaWord.toLowerCase()} con ${query.toLowerCase()}`);
      return quechuaWord.toLowerCase().startsWith(query.toLowerCase());
    }).slice(0, 10);
    filteredWords.value = result;
    console.log('Palabras filtradas:', filteredWords.value);
  } else {
    filteredWords.value = [];
  }
}
const buscar = async () => {
  const result = wordStore.buscarPalabra(word.value);
  if (result) {
    quechua.value = result.quechua;
    espanol.value = result.espanol;
    ingles.value = result.ingles;
    queryWord.value = espanol.value.split('; ')[0];
    respuesta.value = true;
    errorMessage.value = false;

    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${queryWord.value}&image_type=photo`);
      if (response.data.hits && response.data.hits.length > 0) {
        firstPhoto.value = response.data.hits[0].largeImageURL;
      } else {
        firstPhoto.value = seleccionarImagenAleatoria();
      }
    } catch (error) {
      console.log(error);
      firstPhoto.value = seleccionarImagenAleatoria();
    }
  } else {
    errorMessage.value = true;
    respuesta.value = false;
    firstPhoto.value = manakanchu;
  }
};
</script>

<template>
  <VCard class="mx-auto" max-width="500">
    <VImg :key="firstPhoto" :src="firstPhoto" cover />
    <!-- Mostrar la segunda imagen solo si firstPhoto no está definida o es null -->
    <VImg v-if="!firstPhoto" :src="diccionario" cover />


    <VCardItem>
      <VCardTitle>Diccionario</VCardTitle>
    </VCardItem>

    <VCardText>
      <form @submit.prevent="buscar">
        <v-autocomplete
          v-model="word"
          :items="filteredWords"
          label="Escribe una palabra en quechua"
          class="mb-3"
          @input="onInput"
        ></v-autocomplete>
        <v-btn class="mr-4" @click="buscar">Buscar</v-btn>
      </form>

      <div v-if="respuesta">
        <p class="text-h4 text--primary">{{ quechua }}</p>
        <div class="text--primary">{{ espanol }}</div>
      </div>

      <div v-if="errorMessage">
        <p>
          Lo siento, no existe esta palabra. Verifique si escribió correctamente la palabra. Si es un verbo, escríbalo en infinitivo, es decir, que el verbo termine con la letra "y".
        </p>
      </div>
    </VCardText>
  </VCard>
</template>