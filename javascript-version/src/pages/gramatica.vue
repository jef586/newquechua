<script setup>
import { ref } from 'vue'

const selectedLesson = ref(null)
const lessons = ref([
  {
    id: 1,
    title: 'Alfabeto y Pronunciación',
    description: 'Aprende las letras del quechua y su pronunciación correcta',
    icon: 'mdi-alphabetical',
    difficulty: 'Básico',
    content: {
      introduction: 'El quechua tiene 20 letras en su alfabeto oficial.',
      sections: [
        {
          title: 'Vocales',
          content: 'El quechua tiene 3 vocales: a, i, u',
          examples: [
            { quechua: 'ama', spanish: 'no', pronunciation: 'ah-mah' },
            { quechua: 'inti', spanish: 'sol', pronunciation: 'in-ti' },
            { quechua: 'uku', spanish: 'dentro', pronunciation: 'u-ku' }
          ]
        },
        {
          title: 'Consonantes',
          content: 'Las consonantes del quechua incluyen: ch, chh, k, kh, ll, m, n, ñ, p, ph, q, qh, r, s, t, th, w, y',
          examples: [
            { quechua: 'chay', spanish: 'ese', pronunciation: 'chay' },
            { quechua: 'llama', spanish: 'llama', pronunciation: 'ya-ma' },
            { quechua: 'qhapaq', spanish: 'rico', pronunciation: 'kha-pak' }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Pronombres Personales',
    description: 'Los pronombres en quechua y su uso',
    icon: 'mdi-account-group',
    difficulty: 'Básico',
    content: {
      introduction: 'Los pronombres personales son fundamentales para formar oraciones.',
      sections: [
        {
          title: 'Pronombres Singulares',
          content: 'Los pronombres en singular',
          examples: [
            { quechua: 'ñuqa', spanish: 'yo', pronunciation: 'ñu-ka' },
            { quechua: 'qam', spanish: 'tú', pronunciation: 'kam' },
            { quechua: 'pay', spanish: 'él/ella', pronunciation: 'pay' }
          ]
        },
        {
          title: 'Pronombres Plurales',
          content: 'Los pronombres en plural',
          examples: [
            { quechua: 'ñuqayku', spanish: 'nosotros (inclusivo)', pronunciation: 'ñu-kay-ku' },
            { quechua: 'ñuqanchik', spanish: 'nosotros (exclusivo)', pronunciation: 'ñu-kan-chik' },
            { quechua: 'qamkuna', spanish: 'ustedes', pronunciation: 'kam-ku-na' },
            { quechua: 'paykuna', spanish: 'ellos/ellas', pronunciation: 'pay-ku-na' }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Sufijos y Partículas',
    description: 'Sistema de sufijos del quechua',
    icon: 'mdi-puzzle',
    difficulty: 'Intermedio',
    content: {
      introduction: 'El quechua es una lengua aglutinante que usa muchos sufijos.',
      sections: [
        {
          title: 'Sufijos de Caso',
          content: 'Indican la función de la palabra en la oración',
          examples: [
            { quechua: '-ta (acusativo)', spanish: 'marca el objeto directo', pronunciation: '-ta' },
            { quechua: '-man (direccional)', spanish: 'hacia, para', pronunciation: '-man' },
            { quechua: '-manta (ablativo)', spanish: 'desde, de', pronunciation: '-man-ta' },
            { quechua: '-pi (locativo)', spanish: 'en, sobre', pronunciation: '-pi' }
          ]
        },
        {
          title: 'Sufijos Verbales',
          content: 'Modifican el significado de los verbos',
          examples: [
            { quechua: '-ni (1ra persona)', spanish: 'yo hago', pronunciation: '-ni' },
            { quechua: '-nki (2da persona)', spanish: 'tú haces', pronunciation: '-nki' },
            { quechua: '-n (3ra persona)', spanish: 'él/ella hace', pronunciation: '-n' }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Conjugación Verbal',
    description: 'Cómo conjugar verbos en quechua',
    icon: 'mdi-format-list-numbered',
    difficulty: 'Intermedio',
    content: {
      introduction: 'Los verbos en quechua se conjugan agregando sufijos a la raíz.',
      sections: [
        {
          title: 'Presente Simple',
          content: 'Conjugación en tiempo presente',
          examples: [
            { quechua: 'puñuni', spanish: 'yo duermo', pronunciation: 'pu-ñu-ni' },
            { quechua: 'puñunki', spanish: 'tú duermes', pronunciation: 'pu-ñun-ki' },
            { quechua: 'puñun', spanish: 'él/ella duerme', pronunciation: 'pu-ñun' }
          ]
        },
        {
          title: 'Pasado Simple',
          content: 'Conjugación en tiempo pasado',
          examples: [
            { quechua: 'puñurqani', spanish: 'yo dormí', pronunciation: 'pu-ñur-ka-ni' },
            { quechua: 'puñurqanki', spanish: 'tú dormiste', pronunciation: 'pu-ñur-kan-ki' },
            { quechua: 'puñurqan', spanish: 'él/ella durmió', pronunciation: 'pu-ñur-kan' }
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Estructura de la Oración',
    description: 'Orden de palabras y construcción de oraciones',
    icon: 'mdi-format-text',
    difficulty: 'Avanzado',
    content: {
      introduction: 'El quechua generalmente sigue el orden SOV (Sujeto-Objeto-Verbo).',
      sections: [
        {
          title: 'Orden Básico',
          content: 'Estructura fundamental de las oraciones',
          examples: [
            { quechua: 'Ñuqa tantata mikhuni', spanish: 'Yo como pan', pronunciation: 'ñu-ka tan-ta-ta mik-hu-ni' },
            { quechua: 'Warmi yakuta upyan', spanish: 'La mujer bebe agua', pronunciation: 'war-mi ya-ku-ta up-yan' }
          ]
        },
        {
          title: 'Oraciones Complejas',
          content: 'Construcciones más elaboradas',
          examples: [
            { quechua: 'Tayta chakrata llamkan', spanish: 'El padre trabaja la chacra', pronunciation: 'tay-ta chak-ra-ta yam-kan' },
            { quechua: 'Warmakunaqa pukllankichik', spanish: 'Los niños están jugando', pronunciation: 'war-ma-ku-na-ka puk-yan-ki-chik' }
          ]
        }
      ]
    }
  }
])

const openLesson = (lesson) => {
  selectedLesson.value = lesson
}

const closeLesson = () => {
  selectedLesson.value = null
}
</script>

<template>
  <div class="grammar-container">
    <!-- Header -->
    <div class="grammar-header">
      <h1 class="grammar-title">Gramática Quechua</h1>
      <p class="grammar-subtitle">Aprende la estructura y reglas del idioma quechua</p>
    </div>

    <!-- Lessons Grid -->
    <div v-if="!selectedLesson" class="lessons-grid">
      <v-card
        v-for="lesson in lessons"
        :key="lesson.id"
        class="lesson-card"
        elevation="2"
        @click="openLesson(lesson)"
      >
        <v-card-text class="lesson-content">
          <div class="lesson-icon">
            <v-icon :icon="lesson.icon" size="48" color="primary"></v-icon>
          </div>
          <h3 class="lesson-title">{{ lesson.title }}</h3>
          <p class="lesson-description">{{ lesson.description }}</p>
          <v-chip
            :color="lesson.difficulty === 'Básico' ? 'success' : lesson.difficulty === 'Intermedio' ? 'warning' : 'error'"
            size="small"
            class="lesson-difficulty"
          >
            {{ lesson.difficulty }}
          </v-chip>
        </v-card-text>
      </v-card>
    </div>

    <!-- Lesson Detail -->
    <div v-if="selectedLesson" class="lesson-detail">
      <div class="lesson-header">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="closeLesson"
          class="back-button"
        ></v-btn>
        <div class="lesson-info">
          <h2 class="lesson-detail-title">{{ selectedLesson.title }}</h2>
          <v-chip
            :color="selectedLesson.difficulty === 'Básico' ? 'success' : selectedLesson.difficulty === 'Intermedio' ? 'warning' : 'error'"
            size="small"
          >
            {{ selectedLesson.difficulty }}
          </v-chip>
        </div>
      </div>

      <div class="lesson-body">
        <p class="lesson-introduction">{{ selectedLesson.content.introduction }}</p>
        
        <div v-for="section in selectedLesson.content.sections" :key="section.title" class="lesson-section">
          <h3 class="section-title">{{ section.title }}</h3>
          <p class="section-content">{{ section.content }}</p>
          
          <div class="examples-grid">
            <v-card
              v-for="example in section.examples"
              :key="example.quechua"
              class="example-card"
              variant="outlined"
            >
              <v-card-text>
                <div class="example-quechua">{{ example.quechua }}</div>
                <div class="example-spanish">{{ example.spanish }}</div>
                <div class="example-pronunciation">[{{ example.pronunciation }}]</div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grammar-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.grammar-header {
  text-align: center;
  margin-bottom: 40px;
}

.grammar-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

.grammar-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.lesson-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
}

.lesson-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.lesson-content {
  text-align: center;
  padding: 30px 20px;
}

.lesson-icon {
  margin-bottom: 20px;
}

.lesson-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.lesson-description {
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.5;
}

.lesson-difficulty {
  margin-top: 10px;
}

.lesson-detail {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.lesson-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ecf0f1;
}

.back-button {
  margin-right: 15px;
}

.lesson-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.lesson-detail-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
}

.lesson-body {
  max-width: 800px;
}

.lesson-introduction {
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 30px;
  line-height: 1.6;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.lesson-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}

.section-content {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
  line-height: 1.6;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.example-card {
  border-radius: 8px;
  transition: all 0.2s ease;
}

.example-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.example-quechua {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 5px;
}

.example-spanish {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.example-pronunciation {
  font-size: 0.9rem;
  color: #95a5a6;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .grammar-container {
    padding: 15px;
  }
  
  .grammar-title {
    font-size: 2rem;
  }
  
  .lessons-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .lesson-content {
    padding: 20px 15px;
  }
  
  .lesson-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .lesson-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .lesson-detail-title {
    font-size: 1.5rem;
  }
  
  .examples-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .grammar-title {
    font-size: 1.8rem;
  }
  
  .grammar-subtitle {
    font-size: 1rem;
  }
  
  .lesson-title {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}
</style>