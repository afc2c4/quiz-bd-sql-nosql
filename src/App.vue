<script setup>
import { computed, reactive, ref } from 'vue'
import QuestionCard from './components/QuestionCard.vue'
import { topics } from './data/quiz'

const selectedTopic = ref(0)
const currentQuestion = ref(0)
const modeProva = ref(false)

const keyFor = (topicIndex, questionIndex) => `${topicIndex}-${questionIndex}`

const selections = reactive({})
// Pre-inicializar os dados para garantir reatividade das chaves
topics.forEach((topic, tIdx) => {
  topic.questions.forEach((_, qIdx) => {
    selections[keyFor(tIdx, qIdx)] = null
  })
})

const selectedFor = (key) => selections[key]
const isAnswered = (key) => selections[key] !== null && selections[key] !== undefined
const normalizeValue = (value) => (value === null || value === undefined ? null : Number(value))
const updateSelection = (key, value) => {
  selections[key] = normalizeValue(value)
}

const currentTopic = computed(() => topics[selectedTopic.value])
const totalInTopic = computed(() => currentTopic.value.questions.length)
const currentKey = computed(() => keyFor(selectedTopic.value, currentQuestion.value))
const currentSelection = computed(() => selectedFor(currentKey.value))
const currentAnswered = computed(() => isAnswered(currentKey.value))

const answeredInTopic = computed(() => {
  return currentTopic.value.questions.reduce((count, _q, qIdx) => {
    return count + (isAnswered(keyFor(selectedTopic.value, qIdx)) ? 1 : 0)
  }, 0)
})

const overallTotal = computed(() => topics.reduce((sum, t) => sum + t.questions.length, 0))
const overallAnswered = computed(() => {
  return topics.reduce((sum, _t, tIdx) => {
    const total = topics[tIdx].questions.length
    const answered = Array.from({ length: total }).reduce((count, _v, qIdx) => {
      return count + (isAnswered(keyFor(tIdx, qIdx)) ? 1 : 0)
    }, 0)
    return sum + answered
  }, 0)
})

const topicProgress = computed(() => Math.round((answeredInTopic.value / totalInTopic.value) * 100))
const overallProgress = computed(() => Math.round((overallAnswered.value / overallTotal.value) * 100))

const canGoPrev = computed(() => currentQuestion.value > 0)
const canGoNext = computed(() => {
  return currentQuestion.value < totalInTopic.value - 1 && currentAnswered.value
})

const goPrev = () => {
  if (canGoPrev.value) currentQuestion.value -= 1
}

const goNext = () => {
  if (canGoNext.value) currentQuestion.value += 1
}

const onTopicChange = (value) => {
  selectedTopic.value = value
  currentQuestion.value = 0
}

const updateCurrentSelection = (value) => {
  updateSelection(currentKey.value, value)
}

const topicOptions = computed(() => topics.map((topic, index) => ({ title: topic.title, value: index })))
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-8" style="max-width: 980px;">
        <v-card class="pa-6" elevation="2">
          <div class="quiz-title text-h4 mb-2">Quiz BD SQL vs NoSQL</div>
          <div class="text-subtitle-1 mb-6">
            Selecione um tema, responda e veja a explicacao. O modo prova bloqueia trocar respostas.
          </div>

          <v-row class="mb-4" align="center">
            <v-col cols="12" md="6">
              <v-select
                v-model="selectedTopic"
                :items="topicOptions"
                label="Tema"
                density="comfortable"
                @update:model-value="onTopicChange"
              />
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-end">
              <v-switch v-model="modeProva" label="Modo prova (bloquear troca)" inset />
            </v-col>
          </v-row>

          <div class="mb-4">
            <div class="text-body-2 mb-1">Progresso do tema: {{ answeredInTopic }} / {{ totalInTopic }}</div>
            <v-progress-linear :model-value="topicProgress" height="8" color="deep-orange" rounded />
          </div>

          <div class="mb-6">
            <div class="text-body-2 mb-1">Progresso geral: {{ overallAnswered }} / {{ overallTotal }}</div>
            <v-progress-linear :model-value="overallProgress" height="8" color="teal" rounded />
          </div>

          <QuestionCard
            :question="currentTopic.questions[currentQuestion]"
            :number="currentQuestion + 1"
            :model-value="currentSelection"
            :disabled="modeProva && currentAnswered"
            @update:model-value="updateCurrentSelection"
          />

          <v-divider class="my-4" />

          <div class="d-flex align-center justify-space-between">
            <v-btn variant="tonal" :disabled="!canGoPrev" @click="goPrev">Anterior</v-btn>
            <div class="text-body-2">
              Questao {{ currentQuestion + 1 }} de {{ totalInTopic }}
            </div>
            <v-btn color="primary" :disabled="!canGoNext" @click="goNext">Proxima questao</v-btn>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
