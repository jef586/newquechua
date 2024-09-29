<script setup>
import aguayo from '@/assets/images/pages/aguayo.jpg';
import cactus from '@/assets/images/pages/cactus.webp';
import camino from '@/assets/images/pages/camino.jpg';
import cholita from '@/assets/images/pages/cholita.jpg';
import comida from '@/assets/images/pages/comida.webp';
import cueca from '@/assets/images/pages/cueca.webp';
import llama from '@/assets/images/pages/llama.jpg';
import llamasypasano from '@/assets/images/pages/llamasypasano.webp';
import trabajocampo from '@/assets/images/pages/trabajocampo.webp';
import uyuni from '@/assets/images/pages/uyuni.jpg';
import useWordStore from '@/store/index.js';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const word = ref('');
const translate = ref(null);
const quechua = ref(null);
const espanol = ref(null);
const ingles = ref(null);
const wordList = ref(null);
const key ="21835325-2e6ca947912821e07a8eed8c6"
const foto = ref(true);
const queryWord = ref(null);
const firstPhoto = ref(null);
// const store = useStore();

const imagenes = [
  uyuni,
  llama,
  aguayo,
  camino,
  cholita,
  cactus,
  comida, 
  cueca,
  llamasypasano,
  trabajocampo
];

const imagenSeleccionada = ref('');

const seleccionarImagenAleatoria = () => {
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  imagenSeleccionada.value = imagenes[indiceAleatorio];
  return imagenSeleccionada.value
};

const buscar = async () => {
  const store = useWordStore(); // Asegúrate de que esto sincroniza y recupera los datos correctamente
  const listWord = store.word.flat(); // Aplana la lista si es necesario

  console.log("list word", listWord);

  if (listWord.length > 0) {
    const randomIndex = Math.floor(Math.random() * listWord.length); // Asegura un índice válido
    const selectedWord = listWord[randomIndex]; // Accede de manera segura

    if (selectedWord) {
      quechua.value = selectedWord.Quechua;
      espanol.value = selectedWord.Español;

      console.log(quechua.value, espanol.value);

      const query = espanol.value.split('; ')[0]; // Asume que quieres buscar la primera palabra del español
      try {
        const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo`);
        if (response.data.hits.length > 0) {
          firstPhoto.value = response.data.hits[0].largeImageURL;
          foto.value = false;
        } else {
          throw new Error('No image found');
        }
      } catch (error) {
        console.error('Fetching image failed', error);
        firstPhoto.value = seleccionarImagenAleatoria(); // Función de respaldo
        foto.value = true;
      }
    } else {
      console.error('Selected word is undefined');
    }
  } else {
    console.error('Word list is empty or not loaded');
  }
};


onMounted(() => {
  buscar();
  seleccionarImagenAleatoria();
});
</script>
<template>
    <v-card class="mx-auto" max-width="344">
      <VImg :src="firstPhoto" cover />
      <!-- <VImg v-if="foto" :src="cholita" cover /> -->

    
    <v-card-text>
      <div>Palabra del Día</div>
      <p class="text-h4 text--primary">{{quechua}}</p>
      
      <div class="text--primary">
        {{espanol}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4" @click="buscar()"> Aprende otra!</v-btn>
    </v-card-actions>
  </v-card>
</template>
