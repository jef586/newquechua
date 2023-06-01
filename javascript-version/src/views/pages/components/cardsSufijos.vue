<script setup>
import { ref } from 'vue';
import sufijos from './sufijos.js';

const cards = ref(sufijos);
const dialog = ref(false);
const id = ref(null);

const getId = (id) => {
  id.value = id;
};
</script>
<template>
     <v-container>
        <div><h3>Biblioteca de Sufijos</h3></div>
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
            v-on="on"
          >
            <v-card
              class="mx-auto"
              width="250"
              @click.stop="dialog = true"
              @click="getId(card)"
              color="#26c6da"
            >
              <v-card-title v-text="card.name" class="d-flex justify-center mb-6"></v-card-title>

              <v-card-actions class="d-flex justify-center mb-6">
                <!-- <v-spacer></v-spacer> -->
                <h4 >{{ card.value }}</h4>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- <modal  :name="card" :visible="dialog"/> -->
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>{{ id.name }}</v-toolbar>
            <v-card-title class="text-h5"></v-card-title>
            <v-card-text>
              <p class="font-weight-medium">{{ id.descr }}</p>
              <p class="font-weight-bold">{{ id.qu1 }}</p>
              <p class="font-italic">{{ id.esp1 }}</p>
              <p class="font-weight-bold">{{ id.qu2 }}</p>
              <p class="font-italic">{{ id.esp2 }}</p>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-row>
  </v-container>
</template>
