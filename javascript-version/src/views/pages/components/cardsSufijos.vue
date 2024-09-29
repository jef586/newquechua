<script setup>
import { ref } from 'vue';
import sufijos from './sufijos.js';

const cards = ref(sufijos);
const dialog = ref(false);
const id = ref(null);
const getId = (card) => {
  id.value = card;
};
const closeDialog = () => {
  dialog.value = false;
};

</script>
<template>
     <v-container>
      <div class="header-container">
        <h3 >Biblioteca de Sufijos</h3>
      </div>
    <v-row>
      <v-dialog
      
        max-width="600"
        v-model="dialog"
      >
        <template v-slot:activator="{ on, attrs }">
    
          <v-col
            v-for="card in cards"
            :key="card.id"
            :cols="card.flex"
            v-bind="attrs"
           
          >
            <v-card
              class="mx-auto"
              width="250"
              @click.stop="dialog = true"
              @click="getId(card)"
              color="primary"
            >
            <v-card-title class="d-flex justify-center mb-6 text-h3">
              {{ card.name }}
            </v-card-title>


              <v-card-actions class="d-flex justify-center mb-6">
                <!-- <v-spacer></v-spacer> -->
                <p >{{ card.value }}</p>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- <modal  :name="card" :visible="dialog"/> -->
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar class="custom-toolbar" dark>
          <v-toolbar-title class="custom-title">
              {{ id.name }}
            </v-toolbar-title>
          </v-toolbar>
            <v-card-title class="text-h5"></v-card-title>
            <v-card-text>
              <p class="font-weight-medium">{{ id.descr }}</p>
              <p class="font-weight-bold">{{ id.qu1 }}</p>
              <p class="font-italic">{{ id.esp1 }}</p>
              <p class="font-weight-bold">{{ id.qu2 }}</p>
              <p class="font-italic">{{ id.esp2 }}</p>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="closeDialog">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<style>
.header-container {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  padding: 20px; /* Agrega algo de espacio alrededor del encabezado */
}


/* .custom-toolbar {
  background-color: map-get($theme-colors-name, 'primary')
} */

.custom-title {
  font-size: 1.5em; /* Tamaño del texto */
  text-align: center; /* Centrar el texto */
  width: 100%; /* Asegurar que el título ocupe toda la barra */
}
</style>