<script setup>
import { computed } from 'vue'

const props = defineProps({
  question: { type: Object, required: true },
  number: { type: Number, required: true },
  modelValue: { type: [Number, String], default: null },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const isAnswered = computed(() => props.modelValue !== null && props.modelValue !== undefined)
const isCorrect = computed(() => Number(props.modelValue) === props.question.correct)
const incorrectReason = computed(() => props.question.reasons[Number(props.modelValue)])
</script>

<template>
  <v-card class="mb-4 pa-4" elevation="1">
    <div class="text-subtitle-1 mb-3">{{ number }}. {{ question.q }}</div>
    <v-radio-group
      :key="question.q"
      v-model="internalValue"
      :disabled="disabled"
      class="mb-2"
    >
      <v-radio
        v-for="(opt, oIdx) in question.options"
        :key="oIdx"
        :label="opt"
        :value="oIdx"
      />
    </v-radio-group>

    <v-expand-transition>
      <div v-if="isAnswered">
        <div class="text-body-2 mb-1">
          <strong>Resposta correta:</strong> {{ question.options[question.correct] }}
        </div>
        <div v-if="!isCorrect" class="text-body-2 text-error">
          <strong>Por que esta errada:</strong> {{ incorrectReason }}
        </div>
        <div v-else class="text-body-2 text-success"><strong>Correto.</strong></div>
      </div>
    </v-expand-transition>
  </v-card>
</template>
