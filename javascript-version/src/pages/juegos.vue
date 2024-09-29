<script setup>
import { ref } from 'vue'
</script>
<template>
    <div class="home-container">
      <section class="hero-section">
        <!-- Ajuste en la clase de la imagen para controlar su tamaño -->
        <img src="@/assets/images/pages/construccion.webp" alt="Imagen destacada" class="hero-image">
        <div class="text-container">
          <h1 class="hero-title">Trabajashayku</h1>
          <h3 class="hero-subtitle">Esta sección aun no está terminada . Muy pronto tendremos más novedades</h3>
        </div>
      </section>
    </div>
  </template>
  <style scoped>
  .home-container {
    text-align: center;
  }
  
  .hero-section {
    position: relative;
    color: white;
    text-align: center;
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%; /* Ajusta este valor según necesites */
    max-width: 600px; /* Establece un ancho máximo */
    height: auto;
    opacity: 0.8;
    object-fit: cover;
    margin: 0 auto; /* Centra la imagen horizontalmente */
  }
  
  .text-container {
    margin-top: 20px; /* Espacio entre la imagen y los textos */
  }
  
  .hero-title, .hero-subtitle {
    transform: none; /* Remueve transformaciones anteriores para estos elementos */
    font-size: 2em;
    margin: 0; /* Elimina márgenes automáticos para alinear correctamente */
  }
  
  /* Ajustes responsivos */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 1.5em;
    }
  
    .hero-subtitle {
      font-size: 1.2em;
    }
  }
  
  @media (max-width: 480px) {
    .hero-image {
      max-width: 100%; /* La imagen ocupa todo el ancho disponible */
    }
  
    .hero-title {
      font-size: 1.2em;
    }
  
    .hero-subtitle {
      font-size: 1em;
    }
  }
  </style>