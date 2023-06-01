<script setup>
import { ref } from 'vue'
import cholita from '@/assets/images/pages/cholita.jpg'

// import { getAll } from '../database.js'
// import WordStore from '../store/index';

const word = ref('');
const translate = ref(null);
const quechua = ref(null);
const espanol = ref(null);
const ingles = ref(null);
const wordList = ref(null);
const errorMessage = ref(false);

const buscar = (word) => {
    console.log(word.value);
    const list = WordStore.data.word;

    for (let element of list) {
        for (let i = 0; i < 519; i++) {
            const quechuaWord = element[i].Quechua;
            if (quechuaWord === word.value) {
                espanol.value = element[i].Español;
                quechua.value = element[i].Quechua;
                ingles.value = element[i].English;
                console.log(element[i].Español);
                errorMessage.value = false;
            }
        }
    }

    if (quechua.value === null) {
        errorMessage.value = true;
    }

    const filteredJson = filterByWord(word.value);
    console.log(filteredJson);
};

const filterByWord = (word) => {
    const json = WordStore.data.word;
    return json.filter(function (item) {
        return item.Español.includes(word);
    });
};

const newWord = () => {
    // espanol.value = null;
};

</script>
<template>
    

        <VCol cols="12" sm="6" md="4">
            <VCard class="mx-auto" max-width="500" >
                <VImg :src="cholita" cover />

                <VCardItem>
                    <VCardTitle>Diccionario</VCardTitle>
                </VCardItem>

                <VCardText>
                    <form>
                        <v-text-field v-model="word" :error-messages="nameErrors" label="Escriba aqui"
                            @keydown.13="buscar(word)"></v-text-field>

                        <v-btn class="mr-4" @click="buscar(word)"> Traducir </v-btn>
                    </form>
                    <p class="text-h4 text--primary">{{ quechua }}</p>
                    <!-- <p>adjective</p> -->
                    <div class="text--primary">
                        {{ espanol }}
                    </div>
                    <div class="text--primary">
                        {{ ingles }}
                    </div>
                    <div v-if="errorMessage">
                        <p>Lo siento , no existe esta palabra</p>
                    </div>
                </VCardText>
            </VCard>
        </VCol>


</template>
