<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { BgColor, TColor, TextColor } from '../../tokens/color';
import { Height, TSize } from '../../tokens/size';

export interface ISwitchProps {
  label?: string;
  size?: TSize;
  color?: TColor;
  loading?: boolean;
  disabled?: boolean;
}

const props = defineProps<ISwitchProps>();
const { size = 'small', color = 'primary', disabled } = props;
const checked = ref<boolean>(false);

const sizeClass = reactive({
  [Height[size]]: true,
  'w-14': size === 'small',
  'w-16': size === 'medium',
  'w-20': size === 'large',
});
const wrapperClass = computed(() => ({
  'bg-slate-100': !checked.value,
  [BgColor[color]]: checked.value
}));
const markerClass = computed(() => ({
  'before:absolute before:top-0.5': true,
  'before:left-0.5': !checked.value,
  'before:right-0.5': checked.value,
  'before:drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]': true,
  'before:rounded-full before:content-[""] before:bg-white': true,
  'before:h-6 before:w-6': size === 'small',
  'before:h-8 before:w-8': size === 'medium',
  'before:h-10 before:w-10': size === 'large',
}));
const spinnerClass = computed(() => ({
  [TextColor[color]]: true,
  'absolute top-1': true,
  'left-1': !checked.value,
  'right-1': checked.value,
}));
const disabledClass = reactive({
  'opacity-50': disabled,
  'cursor-not-allowed': disabled,
  'cursor-pointer': !disabled
});

const emit = defineEmits(['toggle']);
const toggle = () => {
  if (!disabled) {
    emit('toggle', checked.value = !checked.value);
  }
};
</script>

<template>
  <div class="flex items-center">
    <div class="relative flex-none rounded-full border-2 border-slate-200"
      :class="[sizeClass, wrapperClass, markerClass, disabledClass]" @click="toggle" :disabled="disabled">
      <svg v-if="loading" class="animate-spin h-5 w-5" :class="[spinnerClass]" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
    </div>
    <span v-if="label" class="ml-2">{{label}}</span>
  </div>
</template>
