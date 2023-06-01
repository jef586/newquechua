<script setup>
import { ref, onMounted } from 'vue';
// import { useStore } from 'vuex';

const word = ref('');
const translate = ref(null);
const quechua = ref(null);
const espanol = ref(null);
const ingles = ref(null);
const wordList = ref(null);
// const store = useStore();

// const buscar = () => {
//   console.log(x);
//   let list = store.state.word;

//   for (let element of list) {
//     var x = Math.floor(Math.random() * 520);
//     quechua.value = element[x].Quechua;
//     espanol.value = element[x].Español;
//     console.log(quechua.value);
//     console.log(espanol.value);
//   }
// };

// onMounted(() => {
//   buscar();
// });
</script>
<template>
    <v-card class="mx-auto" max-width="344">
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
