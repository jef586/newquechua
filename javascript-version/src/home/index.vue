<script setup>
import aguayo from '@/assets/images/pages/aguayo.jpg'
import camino from '@/assets/images/pages/camino.jpg'
import cholita from '@/assets/images/pages/cholita.jpg'
import lapaz from '@/assets/images/pages/lapaz.jpg'
import llama from '@/assets/images/pages/llama.jpg'
import uyuni from '@/assets/images/pages/uyuni.jpg'
import { getAll } from '@/database.js'
import useWordStore from '@/store/index.js'
import { gsap } from 'gsap'
import Observer from 'gsap/Observer'
import TextPlugin from 'gsap/TextPlugin'
import { setupLayouts } from 'virtual:generated-layouts'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import generatedRoutes from '~pages'

gsap.registerPlugin(TextPlugin, Observer)

let observerInstance = null;
const router = useRouter()
const store = useWordStore()
// let Observer;
let slideInterval
const currentTextRef = ref(null) // Asegúrate de tener esta referencia en tu template

const getList = async () => {
  let list = await getAll()
  // this.wordList= list

  store.addnewdata(list)
  console.log(store.word)
}

const section1 = ref(null)
const section2 = ref(null)
const currentText = ref('Bienvenidos a Yachakuy, tu Portal Interactivo para Aprender Quechua')

const textForSlides = [
  'Bienvenidos a Yachakuy, tu Portal Interactivo para Aprender Quechua',
  'Diccionario: Explora miles de palabras en quechua con sus significados y ejemplos.',
  'Conjugador: Domina las complejidades de la gramática quechua.',
  'Palabra del Día: Cada día, descubre una nueva palabra quechua.',
  // ... otros textos para los slides restantes
]
// ... referencias para otras secciones

onMounted(async () => {
  // Aquí va la lógica de la animación
  // Observer = await import('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/Observer.min.js').then(module => module.default);
  // ... más animaciones para otras secciones
  // console.clear();

  const sections = gsap.utils.toArray('.slide')
  const images = gsap.utils.toArray('.image').reverse()
  const slideImages = gsap.utils.toArray('.slide__img')
  const outerWrappers = gsap.utils.toArray('.slide__outer')
  const innerWrappers = gsap.utils.toArray('.slide__inner')
  const count = document.querySelector('.count')
  const wrap = gsap.utils.wrap(0, sections.length)
  let animating
  let currentIndex = 0

  gsap.set(outerWrappers, { xPercent: 100 })
  gsap.set(innerWrappers, { xPercent: -100 })
  gsap.set('.slide:nth-of-type(1) .slide__outer', { xPercent: 0 })
  gsap.set('.slide:nth-of-type(1) .slide__inner', { xPercent: 0 })

  function gotoSection(index, direction) {
    animating = true
    index = wrap(index)

    let tl = gsap.timeline({
      defaults: { duration: 1, ease: 'expo.inOut' },
      onComplete: () => {
        animating = false
      },
    })

    let currentSection = sections[currentIndex]
    let heading = currentSection.querySelector('.slide__heading')
    let nextSection = sections[index]
    let nextHeading = nextSection.querySelector('.slide__heading')
    const currentTextElement = currentTextRef.value

    gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 })
    gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 })
    gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 })

    tl.set(count, { text: index + 1 }, 0.32)
      .fromTo(
        outerWrappers[index],
        {
          xPercent: 100 * direction,
        },
        { xPercent: 0 },
        0,
      )
      .fromTo(
        innerWrappers[index],
        {
          xPercent: -100 * direction,
        },
        { xPercent: 0 },
        0,
      )
      .to(
        heading,
        {
          '--width': 800,
          xPercent: 30 * direction,
        },
        0,
      )
      .fromTo(
        nextHeading,
        {
          '--width': 800,
          xPercent: -30 * direction,
        },
        {
          '--width': 200,
          xPercent: 0,
        },
        0,
      )
      .fromTo(
        images[index],
        {
          xPercent: 125 * direction,
          scaleX: 1.5,
          scaleY: 1.3,
        },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0,
      )
      .fromTo(
        images[currentIndex],
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        {
          xPercent: -125 * direction,
          scaleX: 1.5,
          scaleY: 1.3,
        },
        0,
      )
      .fromTo(
        slideImages[index],
        {
          scale: 2,
        },
        { scale: 1 },
        0,
      )
      .timeScale(0.8)
    currentText.value = textForSlides[wrap(index)]
    currentIndex = index
    gsap.fromTo(
      currentTextElement,
      { x: -200, autoAlpha: 0 }, // Comienza desde la izquierda y oculto
      { x: 0, autoAlpha: 1, duration: 2.5, ease: 'expo.out' }, // Termina en la posición original y visible
    )
  }

  observerInstance = Observer.create({
    type: 'wheel,touch,pointer',
    preventDefault: true,
    wheelSpeed: -1,
    onUp: () => {
      console.log('down')
      if (animating) return
      gotoSection(currentIndex + 1, +1)
    },
    onDown: () => {
      console.log('up')
      if (animating) return
      gotoSection(currentIndex - 1, -1)
    },
    tolerance: 10,
  })

  document.addEventListener('keydown', logKey)

  function logKey(e) {
    console.log(e.code)
    if ((e.code === 'ArrowUp' || e.code === 'ArrowLeft') && !animating) {
      gotoSection(currentIndex - 1, -1)
    }
    if ((e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'Space' || e.code === 'Enter') && !animating) {
      gotoSection(currentIndex + 1, 1)
    }
  }
})

const slides = [
  // Tus datos de slides aquí
]

const overlayImages = [
  // URLs de tus imágenes de overlay aquí
]

onBeforeUnmount(() => {
  // Cuando el componente se desmonta, asegúrate de desactivar el Observer
  if (observerInstance) {
    observerInstance.kill();
  }
});
getList()

const goToDashboard = () => {
  const firstAutoGeneratedPath = setupLayouts(generatedRoutes)[7].path
  console.log(firstAutoGeneratedPath)
  router.push(firstAutoGeneratedPath)
}
</script>

<template>
  <div class="index-page">    
    <section class="slide">
      <div class="slide__outer">
        <div class="slide__inner">
          <div class="slide__content">
            <div class="slide__container">
              <h2 class="slide__heading">Yachakuy</h2>
              <figure class="slide__img-cont">
                <img
                  class="slide__img"
                  :src="cholita"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide">
      <div class="slide__outer">
        <div class="slide__inner">
          <div class="slide__content">
            <div class="slide__container">
              <h2 class="slide__heading">Aprende</h2>
              <figure class="slide__img-cont">
                <img
                  class="slide__img"
                  :src="uyuni"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide">
      <div class="slide__outer">
        <div class="slide__inner">
          <div class="slide__content">
            <div class="slide__container">
              <h2 class="slide__heading">Quechua</h2>
              <figure class="slide__img-cont">
                <img
                  class="slide__img"
                  :src="aguayo"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide">
      <div class="slide__outer">
        <div class="slide__inner">
          <div class="slide__content">
            <div class="slide__container">
              <h2 class="slide__heading">Boliviano</h2>
              <figure class="slide__img-cont">
                <img
                  class="slide__img"
                  :src="camino"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="overlay">
      <div class="overlay__content">
        <div class="overlay__count"></div>
        <p
          class="currentText"
          ref="currentTextRef"
        >
          {{ currentText }}
        </p>
        
      
        <figure class="overlay__img-cont">
          <img
            class="image"
            :src="llama"
          />
          <img
            class="image"
            :src="lapaz"
          />
          <img
            class="image"
            :src="camino"
          />
          <img
            class="image"
            :src="aguayo"
          />
        </figure>
      </div>
    </section>
    <div class="button-container">
      <button class="go-to-dashboard-button" @click="goToDashboard" color="#9155FD">Ingresar</button>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap');

* {
  box-sizing: border-box;
  user-select: none;
}

::-webkit-scrollbar {
  display: none;
}

figure {
  margin: 0;
  /* overflow: hidden; */
}

html,
body {
  overflow: auto;
  height: 100%; /* Asegúrate de no restringir el desplazamiento a nivel global */
}

.index-page {
  overflow: hidden;
  /* Otros estilos específicos para index.vue */
}

body {
  color: #fff;
  background: #4361ee;
  font-family: 'Signika Negative', sans-serif;
}

footer {
  position: fixed;
  z-index: 999;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;
  height: 7em;
  font-family: 'Signika Negative', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1rem);
}

a {
  color: #fff;
  text-decoration: none;
}

.slide {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: visible;
}

.slide__outer,
.slide__inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

.slide__content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
}

.slide__container {
  position: relative;
  max-width: 1400px;
  width: 100vw;
  margin: 0 auto;
  height: 90vh;
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0 1rem;
}

.slide__heading {
  display: block;
  text-align: left;
  font-family: 'Signika Negative';
  font-size: clamp(5rem, 15vw, 15rem);
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: #f2f1fc;
  z-index: 999;
  mix-blend-mode: difference;
  grid-area: 2 / 2 / 3 / 10;
  align-self: end;
  --width: 200;
  font-variation-settings: 'wdth' var(--width);
}

.slide__img-cont {
  margin-top: 4rem;
  grid-area: 2 / 1 / 7 / 8;
  transform: translateX(-10%) scale(0.9); /* Mueve a la izquierda y reduce el tamaño */
}

.slide__img-cont img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide:nth-of-type(1) .slide__content {
  background-color: #6d597a;
}

.slide:nth-of-type(2) .slide__content {
  background-color: #355070;
}

.slide:nth-of-type(3) .slide__content {
  background-color: #b56576;
}

.slide:nth-of-type(4) .slide__content {
  background-color: #9a8c98;
}

.currentText {
  color: #f2f1fc;
  grid-area: 8 / 2 / 11 / 4;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.overlay__content {
  max-width: 1400px;
  width: 100vw;
  margin: 0 auto;
  padding: 0 1rem;
  height: 90vh;
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.overlay__img-cont {
  position: relative;
  overflow: hidden;
  margin: 0;
  grid-area: 6 / 6 / 10 / 11;
}

.overlay__img-cont img {
  position: absolute;
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: 50% 50%;
}

.overlay__count {
  grid-area: 6 / 6 / 10 / 11;
  font-size: clamp(1.5rem, 0.5vw, 3rem);
  margin: 0;
  padding: 0;
  text-align: right;
  border-bottom: 7px white solid;
}

.index-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Alinea el contenido al inicio y el botón al final */
  height: 100vh; /* Asegura que el contenedor tome toda la altura de la ventana */
}

.button-container {
  position: fixed; /* Cambiado de relative a fixed */
  left: 50%; /* Centrar el contenedor en la mitad de la pantalla horizontalmente */
  bottom: 20px; /* Posición desde la parte inferior de la pantalla */
  transform: translateX(-50%); /* Ajusta el contenedor hacia atrás para centrarlo exactamente */
  z-index: 1000; 
  background-color: #9155FD/* Asegúrate de que esté por encima de otros elementos si es necesario */
}

.go-to-dashboard-button {
  padding: 10px 20px; 
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.go-to-dashboard-button:hover {
  background-color: #324c8d;
}



@media screen and (min-width: 900px) {
  .overlay__content,
  .slide__container {
    padding: 0 3rem;
    margin-top: 10vh;
    height: 80vh;
  }

  .overlay__img-cont {
    grid-area: 0 / 4 / 10 / 11;
  }

  .overlay__count {
    grid-area: 3 / 10 / 4 / 11;
  }

  .slide__img-cont {
    margin-top: 0;
    grid-area: 3 / 2 / 8 / 7;
  }

  .slide__heading {
    grid-area: 1 / 1 / 4 / 10;
  }
}


</style>
