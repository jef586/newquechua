<template>
  <div class="w-100 h-100 d-flex flex-column flex-md-row align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex flex-column flex-md-row align-center mb-2 mb-md-0">
      &copy;
      {{ new Date().getFullYear() }}
      Made With
      <VIcon
        icon="mdi-heart-outline"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="https://ezequiel-flores.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >Ezequiel Flores</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-flex flex-column flex-md-row gap-x-4 align-items-center" >
      <a href="http://link.mercadopago.com.ar/ezequielflores11" class="text-align-right text-md-primary text-info mb-2 mb-md-0" >Invitame un api con buñuelos(Donación)</a>
      <a href="https://pixabay.com/es/" class="text-align-right text-primary d-none d-md-block">Photos provided by Pixabay</a>
    </span>
  </div>
</template>

<style scoped>
@media (max-width: 767.98px) { /* Bootstrap small breakpoint */
  .text-black {
    color: #be3535 !important;
  }
}

/* Resto de tus estilos aquí */
</style>
