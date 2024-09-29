<template>
  <div class="home-container">
    <section class="hero-section">
      <!-- Imagen de fondo o destacada -->
      <img src="@/assets/images/pages/quechua.webp" alt="Imagen destacada" class="hero-image">
      <div class="text-container">
        <h1 class="hero-title">¡Allin Jamusqas!</h1>
        <!-- Logo centrado -->
        <img src="@/assets/logo.png" alt="Logo Yachakuy" class="logo">
        <h3 class="hero-subtitle">Tu portal interactivo para aprender Quechua Boliviano.</h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

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
  width: 100%;
  max-width: 600px;
  height: auto;
  opacity: 0.8;
  object-fit: cover;
  margin: 0 auto;
}

.text-container {
  margin-top: 20px;
}

.hero-title, .hero-subtitle {
  transform: none;
  font-size: 2em;
  margin: 0;
}

.logo {
  width: 200px; /* Ajusta este valor según el tamaño deseado para tu logo */
  height: auto;
  display: block; /* Asegura que el logo sea un bloque para centrarlo */
  margin: 20px auto; /* Espacio arriba y abajo, y auto para centrar horizontalmente */
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
    max-width: 100%;
  }

  .hero-title {
    font-size: 1.2em;
  }

  .hero-subtitle {
    font-size: 1em;
  }
}
</style>
