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
  console.log(x);
  const list = useWordStore();
  const listWord= list.word
  console.log("list word", listWord)
 
  for (let element of  listWord) {
    var x = Math.floor(Math.random() * 520);
    quechua.value = element[x].Quechua;
    espanol.value = element[x].Español;
    console.log(quechua.value);
    console.log(espanol.value);
  }
  const texto = espanol.value
  const palabras = texto.split('; ');
  const primeraPalabra = palabras[0];
  queryWord.value= primeraPalabra
  const query = queryWord.value;
  const response = await axios.get('https://pixabay.com/api/?key=' + key + '&q=' + query + '&image_type=photo')
    .then(response => {
        foto.value = false;
        console.log(response.data.hits[0].largeImageURL);
        firstPhoto.value = response.data.hits[0].largeImageURL;
    })
    .catch(error => {
      firstPhoto.value = seleccionarImagenAleatoria()
        console.log(error);
        foto.value= true;
    });
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
