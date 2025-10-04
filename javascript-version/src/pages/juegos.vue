<script setup>
import { ref, computed } from 'vue'

const selectedGame = ref(null)
const currentScore = ref(0)
const gameInProgress = ref(false)

// Datos de vocabulario para los juegos
const vocabularyData = ref([
  { quechua: 'ama', spanish: 'no', pronunciation: 'ah-mah' },
  { quechua: 'inti', spanish: 'sol', pronunciation: 'in-ti' },
  { quechua: 'uku', spanish: 'dentro', pronunciation: 'u-ku' },
  { quechua: 'chay', spanish: 'ese', pronunciation: 'chay' },
  { quechua: 'llama', spanish: 'llama', pronunciation: 'ya-ma' },
  { quechua: 'qhapaq', spanish: 'rico', pronunciation: 'kha-pak' },
  { quechua: 'ñuqa', spanish: 'yo', pronunciation: 'ñu-ka' },
  { quechua: 'qam', spanish: 'tú', pronunciation: 'kam' },
  { quechua: 'pay', spanish: 'él/ella', pronunciation: 'pay' },
  { quechua: 'yaku', spanish: 'agua', pronunciation: 'ya-ku' },
  { quechua: 'tanta', spanish: 'pan', pronunciation: 'tan-ta' },
  { quechua: 'warmi', spanish: 'mujer', pronunciation: 'war-mi' },
  { quechua: 'runa', spanish: 'persona', pronunciation: 'ru-na' },
  { quechua: 'wasi', spanish: 'casa', pronunciation: 'wa-si' },
  { quechua: 'mama', spanish: 'madre', pronunciation: 'ma-ma' },
  { quechua: 'tayta', spanish: 'padre', pronunciation: 'tay-ta' },
  { quechua: 'wawa', spanish: 'bebé', pronunciation: 'wa-wa' },
  { quechua: 'allqu', spanish: 'perro', pronunciation: 'ay-ku' },
  { quechua: 'misi', spanish: 'gato', pronunciation: 'mi-si' },
  { quechua: 'urqu', spanish: 'cerro', pronunciation: 'ur-ku' }
])

// Datos de conjugaciones para los juegos
const conjugationData = ref([
  { spanish: 'Yo elijo', quechua: 'noqa ajllani' },
  { spanish: 'Tú eliges', quechua: 'qan ajllanki' },
  { spanish: 'Él elige', quechua: 'pay ajllan' },
  { spanish: 'Yo llevo', quechua: 'noqa apani' },
  { spanish: 'Tú llevas', quechua: 'qan apanki' },
  { spanish: 'Él lleva', quechua: 'pay apan' },
  { spanish: 'Yo sonrío', quechua: 'noqa asikuni' },
  { spanish: 'Tú sonríes', quechua: 'qan asikunki' },
  { spanish: 'Él sonríe', quechua: 'pay asikun' },
  { spanish: 'Yo llego', quechua: 'noqa chayani' },
  { spanish: 'Tú llegas', quechua: 'qan chayanki' },
  { spanish: 'Él llega', quechua: 'pay chayan' }
])

const games = ref([
  {
    id: 1,
    title: 'Emparejar Palabras',
    description: 'Conecta las palabras en quechua con su traducción en español',
    icon: 'mdi-connection',
    difficulty: 'Básico',
    type: 'matching',
    color: 'success'
  },
  {
    id: 2,
    title: 'Pronunciación',
    description: 'Escucha y repite las palabras en quechua correctamente',
    icon: 'mdi-microphone',
    difficulty: 'Básico',
    type: 'pronunciation',
    color: 'info'
  },
  {
    id: 3,
    title: 'Conjugación de Verbos',
    description: 'Practica la conjugación de verbos en quechua',
    icon: 'mdi-format-list-numbered',
    difficulty: 'Intermedio',
    type: 'conjugation',
    color: 'warning'
  },
  {
    id: 4,
    title: 'Quiz de Vocabulario',
    description: 'Pon a prueba tu conocimiento del vocabulario quechua',
    icon: 'mdi-help-circle',
    difficulty: 'Intermedio',
    type: 'quiz',
    color: 'primary'
  },
  {
    id: 5,
    title: 'Construcción de Oraciones',
    description: 'Forma oraciones correctas en quechua',
    icon: 'mdi-format-text',
    difficulty: 'Avanzado',
    type: 'sentence',
    color: 'error'
  },
  {
    id: 6,
    title: 'Memoria Visual',
    description: 'Memoriza palabras quechuas con imágenes',
    icon: 'mdi-image-multiple',
    difficulty: 'Básico',
    type: 'memory',
    color: 'purple'
  }
])

// Estados del juego de emparejar
const matchingGame = ref({
  pairs: [],
  selectedCards: [],
  matchedPairs: [],
  attempts: 0,
  timeLeft: 60,
  gameActive: false
})

// Estados del juego de conjugación
const conjugationGame = ref({
  currentQuestion: null,
  userAnswer: '',
  score: 0,
  questionIndex: 0,
  questions: [],
  showResult: false,
  isCorrect: false
})

// Estados del quiz
const quizGame = ref({
  currentQuestion: null,
  options: [],
  selectedOption: null,
  score: 0,
  questionIndex: 0,
  questions: [],
  showResult: false,
  isCorrect: false
})

const openGame = (game) => {
  selectedGame.value = game
  currentScore.value = 0
  gameInProgress.value = false
  
  // Inicializar juego específico
  if (game.type === 'matching') {
    initMatchingGame()
  } else if (game.type === 'conjugation') {
    initConjugationGame()
  } else if (game.type === 'quiz') {
    initQuizGame()
  }
}

const closeGame = () => {
  selectedGame.value = null
  gameInProgress.value = false
  resetAllGames()
}

const resetAllGames = () => {
  matchingGame.value = {
    pairs: [],
    selectedCards: [],
    matchedPairs: [],
    attempts: 0,
    timeLeft: 60,
    gameActive: false
  }
  
  conjugationGame.value = {
    currentQuestion: null,
    userAnswer: '',
    score: 0,
    questionIndex: 0,
    questions: [],
    showResult: false,
    isCorrect: false
  }
  
  quizGame.value = {
    currentQuestion: null,
    options: [],
    selectedOption: null,
    score: 0,
    questionIndex: 0,
    questions: [],
    showResult: false,
    isCorrect: false
  }
}

// Funciones del juego de emparejar
const initMatchingGame = () => {
  const selectedWords = vocabularyData.value.slice(0, 6)
  const cards = []
  
  selectedWords.forEach((word, index) => {
    cards.push({ id: index * 2, text: word.quechua, type: 'quechua', matched: false })
    cards.push({ id: index * 2 + 1, text: word.spanish, type: 'spanish', matched: false })
  })
  
  matchingGame.value.pairs = shuffleArray(cards)
  matchingGame.value.selectedCards = []
  matchingGame.value.matchedPairs = []
  matchingGame.value.attempts = 0
  matchingGame.value.gameActive = true
}

const selectCard = (card) => {
  if (matchingGame.value.selectedCards.length < 2 && !card.matched) {
    matchingGame.value.selectedCards.push(card)
    
    if (matchingGame.value.selectedCards.length === 2) {
      checkMatch()
    }
  }
}

const checkMatch = () => {
  const [card1, card2] = matchingGame.value.selectedCards
  const word1 = vocabularyData.value.find(w => w.quechua === card1.text || w.spanish === card1.text)
  const word2 = vocabularyData.value.find(w => w.quechua === card2.text || w.spanish === card2.text)
  
  if (word1 && word2 && word1 === word2 && card1.type !== card2.type) {
    // Match correcto
    card1.matched = true
    card2.matched = true
    matchingGame.value.matchedPairs.push(word1)
    currentScore.value += 10
  }
  
  matchingGame.value.attempts++
  
  setTimeout(() => {
    matchingGame.value.selectedCards = []
    
    // Verificar si el juego terminó
    if (matchingGame.value.matchedPairs.length === 6) {
      matchingGame.value.gameActive = false
    }
  }, 1000)
}

// Funciones del juego de conjugación
const initConjugationGame = () => {
  conjugationGame.value.questions = shuffleArray([...conjugationData.value]).slice(0, 10)
  conjugationGame.value.questionIndex = 0
  conjugationGame.value.score = 0
  conjugationGame.value.currentQuestion = conjugationGame.value.questions[0]
  conjugationGame.value.userAnswer = ''
  conjugationGame.value.showResult = false
}

const submitConjugation = () => {
  const correct = conjugationGame.value.userAnswer.toLowerCase().trim() === 
                  conjugationGame.value.currentQuestion.quechua.toLowerCase().trim()
  
  conjugationGame.value.isCorrect = correct
  conjugationGame.value.showResult = true
  
  if (correct) {
    conjugationGame.value.score += 10
    currentScore.value += 10
  }
  
  setTimeout(() => {
    nextConjugationQuestion()
  }, 2000)
}

const nextConjugationQuestion = () => {
  conjugationGame.value.questionIndex++
  
  if (conjugationGame.value.questionIndex < conjugationGame.value.questions.length) {
    conjugationGame.value.currentQuestion = conjugationGame.value.questions[conjugationGame.value.questionIndex]
    conjugationGame.value.userAnswer = ''
    conjugationGame.value.showResult = false
  } else {
    // Juego terminado
    gameInProgress.value = false
  }
}

// Funciones del quiz
const initQuizGame = () => {
  quizGame.value.questions = shuffleArray([...vocabularyData.value]).slice(0, 10)
  quizGame.value.questionIndex = 0
  quizGame.value.score = 0
  generateQuizQuestion()
}

const generateQuizQuestion = () => {
  const currentWord = quizGame.value.questions[quizGame.value.questionIndex]
  quizGame.value.currentQuestion = currentWord
  
  // Generar opciones incorrectas
  const wrongOptions = vocabularyData.value
    .filter(w => w !== currentWord)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(w => w.spanish)
  
  quizGame.value.options = shuffleArray([currentWord.spanish, ...wrongOptions])
  quizGame.value.selectedOption = null
  quizGame.value.showResult = false
}

const selectQuizOption = (option) => {
  quizGame.value.selectedOption = option
  const correct = option === quizGame.value.currentQuestion.spanish
  
  quizGame.value.isCorrect = correct
  quizGame.value.showResult = true
  
  if (correct) {
    quizGame.value.score += 10
    currentScore.value += 10
  }
  
  setTimeout(() => {
    nextQuizQuestion()
  }, 2000)
}

const nextQuizQuestion = () => {
  quizGame.value.questionIndex++
  
  if (quizGame.value.questionIndex < quizGame.value.questions.length) {
    generateQuizQuestion()
  } else {
    // Juego terminado
    gameInProgress.value = false
  }
}

// Función auxiliar para mezclar arrays
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const startGame = () => {
  gameInProgress.value = true
  
  if (selectedGame.value.type === 'matching') {
    matchingGame.value.gameActive = true
  }
}

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Básico': return 'success'
    case 'Intermedio': return 'warning'
    case 'Avanzado': return 'error'
    default: return 'primary'
  }
}
</script>

<template>
  <div class="games-container">
    <!-- Header -->
    <div class="games-header">
      <h1 class="games-title">Juegos Educativos</h1>
      <p class="games-subtitle">Aprende quechua de manera divertida e interactiva</p>
      <div class="score-display" v-if="currentScore > 0">
        <v-chip color="primary" size="large">
          <v-icon>mdi-star</v-icon>
          Puntuación: {{ currentScore }}
        </v-chip>
      </div>
    </div>

    <!-- Games Grid -->
    <div v-if="!selectedGame" class="games-grid">
      <v-card
        v-for="game in games"
        :key="game.id"
        class="game-card"
        elevation="3"
        @click="openGame(game)"
      >
        <v-card-text class="game-content">
          <div class="game-icon">
            <v-icon :icon="game.icon" size="56" :color="game.color"></v-icon>
          </div>
          <h3 class="game-title">{{ game.title }}</h3>
          <p class="game-description">{{ game.description }}</p>
          <v-chip
            :color="getDifficultyColor(game.difficulty)"
            size="small"
            class="game-difficulty"
          >
            {{ game.difficulty }}
          </v-chip>
        </v-card-text>
      </v-card>
    </div>

    <!-- Game Detail -->
    <div v-if="selectedGame" class="game-detail">
      <div class="game-header">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="closeGame"
          class="back-button"
        ></v-btn>
        <div class="game-info">
          <h2 class="game-detail-title">{{ selectedGame.title }}</h2>
          <v-chip
            :color="getDifficultyColor(selectedGame.difficulty)"
            size="small"
          >
            {{ selectedGame.difficulty }}
          </v-chip>
        </div>
      </div>

      <!-- Matching Game -->
      <div v-if="selectedGame.type === 'matching'" class="matching-game">
        <div v-if="!gameInProgress" class="game-instructions">
          <h3>¿Cómo jugar?</h3>
          <p>Conecta las palabras en quechua con su traducción en español. ¡Encuentra todos los pares!</p>
          <v-btn @click="startGame" color="primary" size="large">
            <v-icon>mdi-play</v-icon>
            Comenzar Juego
          </v-btn>
        </div>
        
        <div v-if="gameInProgress && matchingGame.gameActive" class="matching-board">
          <div class="game-stats">
            <v-chip color="info">Intentos: {{ matchingGame.attempts }}</v-chip>
            <v-chip color="success">Pares: {{ matchingGame.matchedPairs.length }}/6</v-chip>
          </div>
          
          <div class="cards-grid">
            <v-card
              v-for="card in matchingGame.pairs"
              :key="card.id"
              class="match-card"
              :class="{
                'selected': matchingGame.selectedCards.includes(card),
                'matched': card.matched,
                'quechua-card': card.type === 'quechua',
                'spanish-card': card.type === 'spanish'
              }"
              @click="selectCard(card)"
              elevation="2"
            >
              <v-card-text class="card-text">
                {{ card.text }}
              </v-card-text>
            </v-card>
          </div>
        </div>
        
        <div v-if="gameInProgress && !matchingGame.gameActive" class="game-complete">
          <v-alert type="success" variant="tonal">
            <h3>¡Felicitaciones!</h3>
            <p>Completaste el juego en {{ matchingGame.attempts }} intentos</p>
            <p>Puntuación final: {{ currentScore }}</p>
          </v-alert>
          <v-btn @click="initMatchingGame" color="primary">Jugar de nuevo</v-btn>
        </div>
      </div>

      <!-- Conjugation Game -->
      <div v-if="selectedGame.type === 'conjugation'" class="conjugation-game">
        <div v-if="!gameInProgress" class="game-instructions">
          <h3>¿Cómo jugar?</h3>
          <p>Escribe la conjugación correcta en quechua para cada frase en español.</p>
          <v-btn @click="startGame(); gameInProgress = true" color="primary" size="large">
            <v-icon>mdi-play</v-icon>
            Comenzar Juego
          </v-btn>
        </div>
        
        <div v-if="gameInProgress && conjugationGame.currentQuestion" class="conjugation-question">
          <div class="question-progress">
            <v-progress-linear
              :model-value="(conjugationGame.questionIndex + 1) / conjugationGame.questions.length * 100"
              color="primary"
              height="8"
            ></v-progress-linear>
            <p>Pregunta {{ conjugationGame.questionIndex + 1 }} de {{ conjugationGame.questions.length }}</p>
          </div>
          
          <div class="question-card">
            <h3>Traduce al quechua:</h3>
            <h2 class="spanish-phrase">{{ conjugationGame.currentQuestion.spanish }}</h2>
            
            <v-text-field
              v-model="conjugationGame.userAnswer"
              label="Tu respuesta en quechua"
              variant="outlined"
              class="answer-input"
              @keyup.enter="submitConjugation"
              :disabled="conjugationGame.showResult"
            ></v-text-field>
            
            <div v-if="conjugationGame.showResult" class="result-feedback">
              <v-alert
                :type="conjugationGame.isCorrect ? 'success' : 'error'"
                variant="tonal"
              >
                <div v-if="conjugationGame.isCorrect">
                  <h4>¡Correcto! 🎉</h4>
                  <p>{{ conjugationGame.currentQuestion.quechua }}</p>
                </div>
                <div v-else>
                  <h4>Incorrecto 😔</h4>
                  <p>La respuesta correcta es: <strong>{{ conjugationGame.currentQuestion.quechua }}</strong></p>
                </div>
              </v-alert>
            </div>
            
            <v-btn
              v-if="!conjugationGame.showResult"
              @click="submitConjugation"
              color="primary"
              :disabled="!conjugationGame.userAnswer.trim()"
            >
              Verificar Respuesta
            </v-btn>
          </div>
        </div>
        
        <div v-if="gameInProgress && conjugationGame.questionIndex >= conjugationGame.questions.length" class="game-complete">
          <v-alert type="success" variant="tonal">
            <h3>¡Juego Completado!</h3>
            <p>Puntuación final: {{ conjugationGame.score }}/{{ conjugationGame.questions.length * 10 }}</p>
            <p>Porcentaje de aciertos: {{ Math.round((conjugationGame.score / (conjugationGame.questions.length * 10)) * 100) }}%</p>
          </v-alert>
          <v-btn @click="initConjugationGame(); gameInProgress = true" color="primary">Jugar de nuevo</v-btn>
        </div>
      </div>

      <!-- Quiz Game -->
      <div v-if="selectedGame.type === 'quiz'" class="quiz-game">
        <div v-if="!gameInProgress" class="game-instructions">
          <h3>¿Cómo jugar?</h3>
          <p>Selecciona la traducción correcta para cada palabra en quechua.</p>
          <v-btn @click="startGame(); gameInProgress = true" color="primary" size="large">
            <v-icon>mdi-play</v-icon>
            Comenzar Quiz
          </v-btn>
        </div>
        
        <div v-if="gameInProgress && quizGame.currentQuestion" class="quiz-question">
          <div class="question-progress">
            <v-progress-linear
              :model-value="(quizGame.questionIndex + 1) / quizGame.questions.length * 100"
              color="primary"
              height="8"
            ></v-progress-linear>
            <p>Pregunta {{ quizGame.questionIndex + 1 }} de {{ quizGame.questions.length }}</p>
          </div>
          
          <div class="question-card">
            <h3>¿Qué significa en español?</h3>
            <h2 class="quechua-word">{{ quizGame.currentQuestion.quechua }}</h2>
            <p class="pronunciation">[{{ quizGame.currentQuestion.pronunciation }}]</p>
            
            <div class="quiz-options">
              <v-btn
                v-for="option in quizGame.options"
                :key="option"
                @click="selectQuizOption(option)"
                :color="quizGame.showResult ? 
                  (option === quizGame.currentQuestion.spanish ? 'success' : 
                   option === quizGame.selectedOption ? 'error' : 'default') : 'default'"
                :variant="quizGame.selectedOption === option ? 'flat' : 'outlined'"
                class="quiz-option"
                :disabled="quizGame.showResult"
                size="large"
              >
                {{ option }}
              </v-btn>
            </div>
            
            <div v-if="quizGame.showResult" class="result-feedback">
              <v-alert
                :type="quizGame.isCorrect ? 'success' : 'error'"
                variant="tonal"
              >
                <h4 v-if="quizGame.isCorrect">¡Correcto! 🎉</h4>
                <h4 v-else>Incorrecto 😔</h4>
                <p>{{ quizGame.currentQuestion.quechua }} significa "{{ quizGame.currentQuestion.spanish }}"</p>
              </v-alert>
            </div>
          </div>
        </div>
        
        <div v-if="gameInProgress && quizGame.questionIndex >= quizGame.questions.length" class="game-complete">
          <v-alert type="success" variant="tonal">
            <h3>¡Quiz Completado!</h3>
            <p>Puntuación final: {{ quizGame.score }}/{{ quizGame.questions.length * 10 }}</p>
            <p>Porcentaje de aciertos: {{ Math.round((quizGame.score / (quizGame.questions.length * 10)) * 100) }}%</p>
          </v-alert>
          <v-btn @click="initQuizGame(); gameInProgress = true" color="primary">Jugar de nuevo</v-btn>
        </div>
      </div>

      <!-- Placeholder for other games -->
      <div v-if="['pronunciation', 'sentence', 'memory'].includes(selectedGame.type)" class="coming-soon">
        <v-alert type="info" variant="tonal">
          <v-icon>mdi-construction</v-icon>
          <h3>Próximamente</h3>
          <p>Este juego estará disponible en una próxima actualización. ¡Mantente atento!</p>
        </v-alert>
      </div>
    </div>
  </div>
</template>
<style scoped>
.games-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.games-header {
  text-align: center;
  margin-bottom: 3rem;
}

.games-title {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.games-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.score-display {
  margin-top: 1rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.game-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.game-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.game-content {
  padding: 2rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.game-icon {
  margin-bottom: 1.5rem;
}

.game-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.game-description {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.game-difficulty {
  margin-top: auto;
}

.game-detail {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.game-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ecf0f1;
}

.back-button {
  margin-right: 1rem;
}

.game-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.game-detail-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

.game-instructions {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 2rem;
}

.game-instructions h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.game-instructions p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Matching Game Styles */
.matching-board {
  padding: 2rem;
}

.game-stats {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.match-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.match-card:hover {
  transform: scale(1.05);
}

.match-card.selected {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: scale(1.1);
}

.match-card.matched {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  opacity: 0.8;
}

.match-card.quechua-card {
  border-left: 4px solid #e74c3c;
}

.match-card.spanish-card {
  border-left: 4px solid #3498db;
}

.card-text {
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
}

/* Conjugation Game Styles */
.conjugation-question, .quiz-question {
  max-width: 600px;
  margin: 0 auto;
}

.question-progress {
  margin-bottom: 2rem;
  text-align: center;
}

.question-progress p {
  margin-top: 0.5rem;
  color: #7f8c8d;
}

.question-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.question-card h3 {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.spanish-phrase, .quechua-word {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.pronunciation {
  color: #7f8c8d;
  font-style: italic;
  margin-bottom: 2rem;
}

.answer-input {
  margin-bottom: 2rem;
}

.result-feedback {
  margin: 2rem 0;
}

/* Quiz Game Styles */
.quiz-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.quiz-option {
  padding: 1rem;
  text-transform: none;
  font-size: 1rem;
}

/* Game Complete Styles */
.game-complete {
  text-align: center;
  padding: 2rem;
}

.coming-soon {
  text-align: center;
  padding: 3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .games-container {
    padding: 1rem;
  }
  
  .games-title {
    font-size: 2rem;
  }
  
  .games-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .game-detail {
    padding: 1rem;
  }
  
  .game-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .game-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
  }
  
  .quiz-options {
    grid-template-columns: 1fr;
  }
  
  .spanish-phrase, .quechua-word {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .games-title {
    font-size: 1.8rem;
  }
  
  .game-instructions {
    padding: 2rem 1rem;
  }
  
  .question-card {
    padding: 1rem;
  }
  
  .spanish-phrase, .quechua-word {
    font-size: 1.3rem;
  }
}
</style>