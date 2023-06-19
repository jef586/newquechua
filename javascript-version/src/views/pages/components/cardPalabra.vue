<script setup>
import { ref, onMounted } from 'vue';
import wordStore from '@/store/index.js';
import cholita from '@/assets/images/pages/cholita.jpg';
import axios from 'axios';

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

const buscar = async () => {
  console.log(x);
  const list = wordStore();
  const listWord= list.word
 
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
        console.log(error);
        foto.value= true;
    });
};

onMounted(() => {
  buscar();
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
