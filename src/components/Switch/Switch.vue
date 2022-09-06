<script setup>
import './switch.css';
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<template>
  <div class="toggle-switch" :class="{ checked: modelValue }" @click="toggle" />
</template>
