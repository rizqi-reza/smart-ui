<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      validator: function (value) {
        return ['solid', 'outline', 'ghost', 'link'].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return (
          ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !==
          -1
        );
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    props = reactive(props);
    const baseClass =
      'flex items-center px-3 py-1 font-bold cursor-pointer opacity-90 hover:opacity-100 rounded-md';
    const { label, size, variant, color, loading } = props;
    const isSolid = variant === 'solid';
    const isOutline = variant === 'outline';

    return {
      baseClass,
      classes: computed(() => ({
        'h-8 text-sm': size === 'small',
        'h-10 text-base': size === 'medium',
        'h-12 text-base': size === 'large',
        'bg-blue-700 text-white': isSolid && color === 'primary',
        'bg-green-600 text-white': isSolid && color === 'success',
        'bg-yellow-300 text-black': isSolid && color === 'warning',
        'bg-red-700 text-white': isSolid && color === 'danger',
        'bg-blue-400 text-white': isSolid && color === 'info',
        'text-blue-700': !isSolid && color === 'primary',
        'text-green-600': !isSolid && color === 'success',
        'text-yellow-300': !isSolid && color === 'warning',
        'text-red-700': !isSolid && color === 'danger',
        'text-blue-400': !isSolid && color === 'info',
        'border-2 border-blue-700': isOutline && color === 'primary',
        'border-2 border-green-600': isOutline && color === 'success',
        'border-2 border-yellow-300': isOutline && color === 'warning',
        'border-2 border-red-700': isOutline && color === 'danger',
        'border-2 border-blue-400': isOutline && color === 'info',
        'hover:underline': variant === 'link',
      })),
      spinnerClasses: computed(() => ({
        'text-blue-700': !isSolid && color === 'primary',
        'text-green-600': !isSolid && color === 'success',
        'text-yellow-300': !isSolid && color === 'warning',
        'text-red-700': !isSolid && color === 'danger',
        'text-blue-400': !isSolid && color === 'info',
      })),
      onClick() {
        emit('click');
      },
    };
  },
});
</script>

<template>
  <button type="button" :class="[baseClass, classes]" @click="onClick">
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5"
      :class="spinnerClasses"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    {{ label }}
  </button>
</template>
