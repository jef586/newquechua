<script setup>
import { ref , onMounted } from 'vue'
import Sufijo from '@/views/pages/Sufijo.vue'


onMounted(() => {
  document.documentElement.classList.remove('v-overlay-scroll-blocked');
});

</script>

<template>
  <div class="sufijo-page">
    <VRow>
    <VCol cols="12">
      <Sufijo />
    </VCol>
   
  </VRow>
  </div>
  
</template>
<style>


</style>