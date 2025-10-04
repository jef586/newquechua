<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')
const isLoading = ref(false)

const translateText = () => {
  if (!inputText.value.trim()) return
  
  isLoading.value = true
  outputText.value = ''
  
  // Simulación de traducción mientras se desarrolla el backend
  setTimeout(() => {
    outputText.value = 'El modelo de traducción está en desarrollo. Pronto podrás traducir del español al quechua boliviano.'
    isLoading.value = false
  }, 1500)
}
</script>
<template>
  <div class="translator-container">
    <div class="header-section">
      <h1 class="page-title">Traductor Español - Quechua</h1>
      <p class="page-subtitle">Traduce textos del español al quechua boliviano</p>
    </div>

    <div class="translator-card">
      <div class="input-section">
        <h3 class="section-title">Español</h3>
        <v-textarea
          v-model="inputText"
          placeholder="Escribe aquí el texto que quieres traducir..."
          rows="6"
          variant="outlined"
          class="input-textarea"
        />
      </div>

      <div class="translate-button-section">
        <v-btn
          @click="translateText"
          :loading="isLoading"
          :disabled="!inputText.trim()"
          color="primary"
          size="large"
          class="translate-btn"
        >
          <v-icon left>mdi-translate</v-icon>
          Traducir
        </v-btn>
      </div>

      <div class="output-section">
        <h3 class="section-title">Quechua</h3>
        <v-textarea
          v-model="outputText"
          placeholder="La traducción aparecerá aquí..."
          rows="6"
          variant="outlined"
          readonly
          class="output-textarea"
        />
      </div>
    </div>

    <div class="development-notice">
      <v-alert
        type="info"
        variant="tonal"
        class="notice-alert"
      >
        <v-icon>mdi-information</v-icon>
        <div class="alert-content">
          <h4>🚧 En Desarrollo</h4>
          <p>
            Estamos entrenando nuestro modelo de inteligencia artificial para ofrecerte 
            traducciones precisas del español al quechua boliviano. 
            Esta funcionalidad estará disponible muy pronto.
          </p>
          <div class="features-list">
            <h5>Características que tendrá:</h5>
            <ul>
              <li>✨ Traducción automática español → quechua</li>
              <li>🎯 Especializado en quechua boliviano</li>
              <li>📚 Entrenado con textos bíblicos y literatura</li>
              <li>🔄 Traducción en tiempo real</li>
            </ul>
          </div>
        </div>
      </v-alert>
    </div>
  </div>
</template>
<style scoped>
.translator-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 0;
}

.translator-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-section, .output-section {
  margin-bottom: 25px;
}

.translate-button-section {
  text-align: center;
  margin: 30px 0;
}

.translate-btn {
  padding: 12px 40px !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  border-radius: 12px !important;
  text-transform: none !important;
}

.input-textarea, .output-textarea {
  font-size: 1rem;
}

.development-notice {
  margin-top: 30px;
}

.notice-alert {
  border-radius: 12px;
  padding: 20px;
}

.alert-content h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #2980b9;
}

.alert-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.features-list h5 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #34495e;
}

.features-list ul {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 5px 0;
  font-size: 0.95rem;
  color: #555;
}

/* Responsive design */
@media (max-width: 768px) {
  .translator-container {
    padding: 15px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .translator-card {
    padding: 20px;
  }
  
  .translate-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .translator-card {
    padding: 15px;
  }
}
</style>