<script setup>
import { ref, watch, onMounted } from 'vue'
import pronunciacion from '@/assets/images/pages/pronunciacion.webp'

const valid = ref(true)
const verbo = ref('')

const verbRules = [
  v => !!v || 'El verbo es requerido',
  v => v.charAt(v.length - 1) === 'y' || 'El verbo debe terminar en y',
]

const selectPron = ref(null)
const selectVerb = ref(null)

const pronombres = [
  {
    title: 'yo',
    value: 'noqa',
  },
  {
    title: 'tu',
    value: 'qan',
  },
  {
    title: 'él, ella',
    value: 'pay',
  },
  {
    title: 'nosotros (inclusivo)',
    value: 'noqanchej',
  },
  {
    title: 'nosotros (exclusivo)',
    value: 'noqayku',
  },
  {
    title: 'ustedes',
    value: 'qankuna',
  },
  {
    title: 'ellos',
    value: 'paykuna',
  },
]

const tiempo = [
  {
    title: 'Presente',
    value: ' ',
  },
  {
    title: 'Pretérito Perfecto',
    value: 'rqa',
  },
  {
    title: 'Pretérito Pluscuamperfecto',
    value: 'sqa',
  },
  {
    title: 'Pretérito Imperfecto',
    value: 'j ka',
  },
  {
    title: 'Futuro',
    value: 'nqa',
  },
  {
    title: 'Modo Potencial',
    value: 'man',
  },
  {
    title: 'Obligativo presente',
    value: ' tiyan',
  },
  {
    title: 'Obligativo Pasado',
    value: ' karqa',
  },
  {
    title: 'Obligativo Futuro',
    value: ' kanqa',
  },
  {
    title: 'Modo Imperativo',
    value: 'y',
  },
]

// Filtrar pronombres solo para el Modo Imperativo
const pronombresImperativo = ref(
  pronombres.filter(pronombre => {
    return pronombre.value !== 'noqa' && pronombre.value !== 'noqayku'
  }),
)

watch(selectVerb, newValue => {
  if (newValue === 'y') {
    // Filtrar pronombres solo para el Modo Imperativo
    pronombresImperativo.value = pronombres.filter(pronombre => {
      return pronombre.value !== 'noqa' && pronombre.value !== 'noqayku'
    })
  } else {
    // Restablecer los pronombres para otros tiempos verbales
    pronombresImperativo.value = []
  }
})

const descin = [
  {
    value: 'noqa',
    conj: 'ni',
  },
  {
    value: 'qan',
    conj: 'nki',
  },
  {
    value: 'pay',
    conj: '',
  },
  {
    value: 'noqanchej',
    conj: 'nchej',
  },
  {
    value: 'noqayku',
    conj: 'yku',
  },
  {
    value: 'qankuna',
    conj: 'nkichej',
  },
  {
    value: 'paykuna',
    conj: 'nku',
  },
]

const quechua = ref(null)
const espanol = ref(null)

const conjugar = () => {
  let conjugacion = ''
  if (selectPron.value && verbo.value) {
    let verboInfinitivo = verbo.value
    // Se obtiene la raíz del verbo sin la última letra 'y'
    let raiz = verboInfinitivo.substring(0, verboInfinitivo.length - 1)

    // Encuentra la conjugación correspondiente al pronombre
    let descinEntry = descin.find(entry => entry.value === selectPron.value)
    if (descinEntry) {
      conjugacion = descinEntry.conj
    }
    if ([' tiyan', ' karqa', ' kanqa'].includes(selectVerb.value)) {
        // Asegúrate de que la conjugación se ajuste al tiempo verbal específico
        if (selectVerb.value === ' tiyan') {
            // Lógica para Obligativo presente
            if (selectPron.value === 'noqa') {
            conjugacion = 'nay tiyan'
          } else if (selectPron.value === 'qan') {
            conjugacion = 'nayki tiyan'
          } else if (selectPron.value === 'pay') {
            conjugacion = 'nan tiyan'
          }else{
            conjugacion = 'na' + conjugacion + ' tiyan';
          }
        } else if (selectVerb.value === ' karqa') {
            // Lógica para Obligativo pasado
            if (selectPron.value === 'noqa') {
            conjugacion = 'nay karqa'
          } else if (selectPron.value === 'qan') {
            conjugacion = 'nayki karqa'
          } else if (selectPron.value === 'pay') {
            conjugacion = 'nan karqa'
          }else{
            conjugacion = 'na' + conjugacion + ' karqa';
          }           
        } else if (selectVerb.value === ' kanqa') {
            // Lógica para Obligativo futuro
            if (selectPron.value === 'noqa') {
            conjugacion = 'nay kanqa'
          } else if (selectPron.value === 'qan') {
            conjugacion = 'nayki kanqa'
          } else if (selectPron.value === 'pay') {
            conjugacion = 'nan kanqa'
          }else{
            conjugacion = 'na' + conjugacion + ' kanqa';
          }
        }
        }

    // Si el tiempo verbal es presente y el pronombre es 'pay', se mantiene la 'n' al final de la raíz
    if (selectVerb.value === ' ' && selectPron.value === 'pay') {
      conjugacion += 'n'
    } else {
      // Para otros casos, aplica las reglas específicas para cada tiempo verbal
      if (['rqa', 'sqa', 'nqa'].includes(selectVerb.value)) {
        if (selectVerb.value === 'nqa') {
          if (selectPron.value === 'noqa') {
            conjugacion = 'saj'
          } else if (selectPron.value === 'qan') {
            conjugacion = 'nki'
          } else if (selectPron.value === 'noqanchej') {
            conjugacion = 'sunchej'
          } else if (selectPron.value === 'noqayku') {
            conjugacion = 'sajku'
          } else if (selectPron.value === 'qankuna') {
            conjugacion = 'nkichej'
          } else {
            conjugacion = selectVerb.value + conjugacion
          }
        } else {
          conjugacion = selectVerb.value + conjugacion
        }
        // Prefijo para tiempos pasados y futuro
      } else if (selectVerb.value === 'j ka') {
        if (selectPron.value === 'pay') {
          conjugacion = 'j'
        } else {
          conjugacion = 'j ka' + conjugacion // Especial para Pretérito Imperfecto
        }
      } else if (selectVerb.value === 'man') {
        if (selectPron.value === 'noqa') {
          conjugacion = 'yman'
        } else if (selectPron.value === 'pay') {
          conjugacion = 'nman'
        } else if (selectPron.value === 'noqanchej') {
          conjugacion = 'sunman'
        } else {
          conjugacion += 'man' // Sufijo para Modo Potencial
        }
    }
    if (selectVerb.value === 'y'){
        if (selectPron.value === 'qan') {
          conjugacion = 'y'
        } else if (selectPron.value === 'pay') {
          conjugacion = 'chun'
        } else if (selectPron.value === 'noqanchej') {
          conjugacion = 'na'
        } else if (selectPron.value === 'qankuna') {
          conjugacion = 'ychej'
        }else if (selectPron.value === 'paykuna') {
          conjugacion = 'chunku'
        }       
        else {
          conjugacion += 'No tiene conjugación en modo imperativo' // Sufijo para Modo Potencial
        }
    }
    //   } else if (['tiyan', 'karqa', 'kanqa'].includes(selectVerb.value)) {
    //     conjugacion = 'na' + conjugacion + ' ' + selectVerb.value // Especial para Obligativos
    //   }
    }

    quechua.value = selectPron.value + ' ' + raiz + conjugacion
  } else {
    quechua.value = ''
  }
}
</script>
<template>
  <v-card
    class="mx-auto"
    max-width="350"
  >
    <VImg
      :src="pronunciacion"
      cover
    />
    <v-card-title>
      <VCardItem>
        <VCardTitle>Conjugador de Verbos</VCardTitle>
      </VCardItem>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="verbo"
          :counter="10"
          :rules="verbRules"
          label="Escriba un verbo en infinitivo"
          required
        ></v-text-field>

        <v-select
          v-model="selectVerb"
          :items="tiempo"
          item-title="title"
          item-value="value"
          :rules="[v => !!v || 'Item is required']"
          label="Elija el tiempo verbal"
          required
          class="mb-3"
        ></v-select>

        <v-select
          v-model="selectPron"
          :items="selectVerb === 'y' ? pronombresImperativo : pronombres"
          item-title="title"
          item-value="value"
          :rules="[v => !!v || 'Item is required']"
          label="Elija un pronombre personal"
          required
          class="mb-3"
        ></v-select>

        <v-btn
          :disabled="!valid"
          class="mr-4"
          @click="conjugar"
        >
          Conjugar
        </v-btn>
      </v-form>
      <h2 class="text-h5 title--primary">{{ quechua }}</h2>
      <div class="title--primary">{{ espanol }}</div>
    </v-card-title>
  </v-card>
</template>
