<script setup>
import { ref } from 'vue';
import uyuni from '@/assets/images/pages/uyuni.jpg'

const valid = ref(true);
const verbo = ref('');

const verbRules = [
    (v) => !!v || 'El verbo es requerido',
    // (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    //tiene que terminar en y
    (v) => v.charAt(v.length - 1) === 'y' || 'El verbo debe terminar en y',
];
const email = ref('');
const emailRules = [
    (v) => !!v || 'E-mail is required',
    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];
const selectPron = ref(null);
const selectVerb = ref(null);
const pronombres = [
    {
        title: 'yo',
        value: 'noqa',
    },
    {
        title: 'tu',
        value: 'qan',
    },
    {
        title: 'él, ella',
        value: 'pay',
    },
    {
        title: 'nosotros (inclusivo)',
        value: 'noqanchej',
    },
    {
        title: 'nosotros (exclusivo)',
        value: 'noqayku',
    },
    {
        title: 'ustedes',
        value: 'qankuna',
    },
    {
        title: 'ellos',
        value: 'paykuna',
    },
];

const tiempo = [
    {
        title: 'Presente',
        value: ' ',
    },
    {
        title: 'Pretérito Perfecto',
        value: 'rqa',
    },
    {
        title: 'Pretérito Pluscuamperfecto',
        value: 'sqa',
    },
    {
        title: 'Pretérito Imperfecto',
        value: 'j ka',
    },
    {
        title: 'Futuro',
        value: 'nqa',
    },
    {
        title: 'Modo Potencial',
        value: 'man',
    },
    {
        title: 'Obligativo presente',
        value: ' tiyan',
    },
    {
        title: 'Obligativo Pasado',
        value: ' karqa',
    },
    {
        title: 'Obligativo Futuro',
        value: ' kanqa',
    },
    {
        title: 'Modo Imperativo',
        value: 'y',
    },
];
const descin = [
    {
        value: 'noqa',
        conj: 'ni',
    },
    {
        value: 'qan',
        conj: 'nki',
    },
    {
        value: 'pay',
        conj: ' ',
    },
    {
        value: 'noqanchej',
        conj: 'nchej',
    },
    {
        value: 'noqayku',
        conj: 'yku',
    },
    {
        value: 'qankuna',
        conj: 'nkichej',
    },
    {
        value: 'paykuna',
        conj: 'nku',
    },
];
const checkbox = ref(false);
const quechua = ref(null);
const espanol = ref(null);
const sufijo = ref(null);

const validate = () => {
    $refs.form.validate();
};

const reset = () => {
    $refs.form.reset();
};

const resetValidation = () => {
    $refs.form.resetValidation();
};

const conjugar = () => {
    for (let i = 0; i < descin.length; i++) {
        if (descin[i].value == selectPron.value) {
            sufijo.value = descin[i].conj;
        }
    }

    let raiz = verbo.value.substring(0, verbo.value.length - 1);
    console.log(raiz);
    
    if (selectPron == 'pay') {
        quechua.value = quechua.value.substring(0, quechua.value.length - 1);
    }
    //ultima letra de raiz
    let ultima = raiz.charAt(raiz.length - 1);
    console.log(ultima);
    if(selectVerb.value == 'rqa' && ultima ==="i"){
        //cambiar la i por una e
        raiz = raiz.substring(0, raiz.length - 1);
        raiz = raiz + 'e';
    }
    if(selectVerb.value == 'rqa' && ultima ==="u"){
        //cambiar la i por una o
        raiz = raiz.substring(0, raiz.length - 1);
        raiz = raiz + 'o';
    }
    if(selectVerb.value == 'nqa' && ultima ==="i"){
        //cambiar la i por una e
        raiz = raiz.substring(0, raiz.length - 1);
        raiz = raiz + 'e';
    }
    if(selectVerb.value == 'nqa' && ultima ==="u"){
        //cambiar la i por una o
        raiz = raiz.substring(0, raiz.length - 1);
        raiz = raiz + 'o';
    }
    if(selectVerb.value == ' '){
        selectVerb.value = '';
    }
    //
    if(selectVerb.value=="man"){
        selectVerb.value = sufijo.value 
        sufijo.value = "man";
        if(selectPron.value=="noqa"){
            selectVerb.value = "y";
        }

    }
    quechua.value = selectPron.value + ' ' + raiz + selectVerb.value + sufijo.value;
    if(selectVerb.value==" "){
       selectVerb.value = ' ';  
    }
   
};
</script>
<template>
    <v-card class="mx-auto" max-width="800">
        <VImg :src="uyuni" cover />
        <v-card-title>
            <VCardItem>
                <VCardTitle>Conjugador de Verbos</VCardTitle>
            </VCardItem>

            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="verbo" :counter="10" :rules="verbRules" label="Escriba un verbo en infinitivo"
                    required></v-text-field>

                <v-select v-model="selectPron" :items="pronombres" item-title="title" item-value="value"
                    :rules="[(v) => !!v || 'Item is required']" label="Elija un pronombre personal" required></v-select>

                <v-select v-model="selectVerb" :items="tiempo" item-title="title" item-value="value"
                    :rules="[(v) => !!v || 'Item is required']" label="Elija el tiempo verbal" required></v-select>

                <v-btn :disabled="!valid"  class="mr-4" @click="conjugar">
                    Conjugar!
                </v-btn>
            </v-form>
            <h2 class="text-h3 title--primary">{{ quechua }}</h2>
            <!-- <p>adjective</p> -->
            <div class="title--primary">
                {{ espanol }}
            </div>
        </v-card-title>
    </v-card>
</template>