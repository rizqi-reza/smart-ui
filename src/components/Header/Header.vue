<script lang="ts" setup>
import Button from '../Button/Button.vue';

export interface IHeaderProps {
  user?: {
    name: string;
  };
}

const props = defineProps<IHeaderProps>();
const emit = defineEmits(['login', 'logout', 'createAccount']);

const onLogin = () => {
  emit('login');
};

const onLogout = () => {
  emit('logout');
};

const onCreateAccount = () => {
  emit('createAccount');
};
</script>

<template>
  <header>
    <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4">
      <div>
        <svg class="inline-block align-top" width="32" height="32" viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF" />
            <path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9" />
            <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
          </g>
        </svg>
        <h1 class="inline-block align-top text-xl font-black leading-none my-1.5 ml-2.5">Acme</h1>
      </div>
      <div class="flex items-center">
        <span class="text-sm mr-2.5" v-if="props.user">Welcome, <b>{{ props.user?.name }}</b>!</span>
        <Button size="small" variant="outline" @click="onLogout" label="Log out" v-if="props.user" />
        <Button size="small" variant="outline" @click="onLogin" label="Log in" v-if="!props.user" />
        <Button size="small" class="ml-2.5" @click="onCreateAccount" label="Sign up" v-if="!props.user" />
      </div>
    </div>
  </header>
</template>
