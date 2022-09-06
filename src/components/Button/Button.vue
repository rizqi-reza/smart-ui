<script lang="ts" setup>
import { reactive, computed } from 'vue';
import Color, { EColor, TColor } from '../../tokens/color';
import { Height, FontSize, TSize } from '../../tokens/size';
import { TVariant } from '../../tokens/variant';

export interface IButtonProps {
  label: string;
  size?: TSize;
  variant?: TVariant;
  color?: TColor;
  loading?: boolean;
  disabled?: boolean;
}

const props = defineProps<IButtonProps>();
const { size = 'small', variant = 'solid', color = 'primary', disabled } = props || {}
const isSolid = variant === 'solid';
const isOutline = variant === 'outline';

const emit = defineEmits(['click']);
const onClick = emit('click');

const colorStyle = Color[color];
const sizeClass = reactive({
  [Height[size]]: true,
});
const backgroundClass = computed(() => ({
  [`bg-${colorStyle}`]: isSolid && !!colorStyle,
  // 'bg-blue-700': isSolid && color === EColor.PRIMARY,
  // 'bg-green-600': isSolid && color === EColor.SUCCESS,
  // 'bg-yellow-300': isSolid && color === EColor.WARNING,
  // 'bg-red-700': isSolid && color === EColor.DANGER,
  // 'bg-blue-400': isSolid && color === EColor.INFO,
}));
const borderClass = computed(() => ({
  [`border-2 border-${colorStyle}`]: isOutline && !!colorStyle,
  // 'border-2 border-blue-700': isOutline && color === EColor.PRIMARY,
  // 'border-2 border-green-600': isOutline && color === EColor.SUCCESS,
  // 'border-2 border-yellow-300': isOutline && color === EColor.WARNING,
  // 'border-2 border-red-700': isOutline && color === EColor.DANGER,
  // 'border-2 border-blue-400': isOutline && color === EColor.INFO,
}));
const textClass = computed(() => ({
  [FontSize[size] as string]: true,
  [`text-${colorStyle}`]: !isSolid && !!colorStyle,
  'text-white': isSolid && color !== EColor.WARNING,
  'hover:underline': variant === 'link',
  'hover:opacity-100': !disabled,
}));
const disabledClass = reactive({
  'opacity-50': disabled,
  'cursor-not-allowed': disabled
});
</script>

<template>
  <button type="button" class="flex items-center px-3 py-1 font-bold cursor-pointer opacity-90 rounded-md" :class="[
    sizeClass,
    backgroundClass,
    borderClass,
    textClass,
    disabledClass,
  ]" @click="onClick" :disabled="disabled">
    <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>

    {{ label }}
  </button>
</template>
