<script setup>
import { ref } from 'vue'
import cholita from '@/assets/images/pages/cholita.jpg'
import axios from 'axios'
import { getAll } from '@/database.js'
import wordStore from '@/store/index.js';
// import { createClient } from 'pexels';


const word = ref('');
const translate = ref(null);
const quechua = ref(null);
const espanol = ref(null);
const ingles = ref(null);
const wordList = ref(null);
const firstPhoto = ref(null);
const errorMessage = ref(false);
const respuesta = ref(true);
const foto = ref(true);
const queryWord = ref(null);
const key ="21835325-2e6ca947912821e07a8eed8c6"
// All requests made with the client will be authenticated

  
     


const buscar = async (word) => {
    console.log(word.value);
    const list = wordStore();
    const listWord= list.word
    if(word.value === undefined || word.value === null || word.value === "") {
        errorMessage.value = true;
        
    }
    for (let element of listWord) {
        for (let i = 0; i < 519; i++) {
            const quechuaWord = element[i].Quechua;
            if (quechuaWord === word) {
                espanol.value = element[i].Español;
                quechua.value = element[i].Quechua;
                ingles.value = element[i].English;
                console.log(element[i].Español);
                errorMessage.value = false;
            }
            
        }
    }
    
    const texto = espanol.value
    const palabras = texto.split('; ');
    const primeraPalabra = palabras[0];
    queryWord.value= primeraPalabra
    
    if (quechua.value === null) {
        errorMessage.value = true;
        respuesta.value = false;
    }
    const query = queryWord.value;
    const size = "large";   

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

const filterByWord = (word) => {
    const list = wordStore();
    const listWord= list.word
    return listWord.filter(function (item) {
        console.log("item", item.Esp)
        return item.Español.includes(word);
    });
};

const newWord = () => {
    // espanol.value = null;
};

</script>
<template>
    

        <!-- <VCol cols="12" sm="6" md="4"> -->
            <VCard class="mx-auto" max-width="500" >                
                <VImg :src="firstPhoto" cover />
                <VImg v-if="foto" :src="cholita" cover />

           
                <VCardItem>
                    <VCardTitle>Diccionario</VCardTitle>
                </VCardItem>

                <VCardText>
                    <form>
                        <v-text-field v-model="word"  label="Escriba aqui una palabra en quechua"
                            @keydown.13="buscar(word)"></v-text-field>

                        <v-btn class="mr-4" @click="buscar(word)"> Traducir </v-btn>
                    </form>
                    <div class="response" v-if="respuesta">
                        <p class="text-h4 text--primary">{{ quechua }}</p>
                        <!-- <p>adjective</p> -->
                        <div class="font-weight-bold">Español:</div>
                        <div class="text--primary">
                            {{ espanol }}
                        </div>
                        <div class="font-weight-bold">Ingles:</div>
                        <div class="text--primary">
                            {{ ingles }}
                        </div>
                    </div>
                    
                    <div v-if="errorMessage">
                        <p>Lo siento , no existe esta palabra</p>
                    </div>
                </VCardText>
            </VCard>
        <!-- </VCol> -->


</template>
