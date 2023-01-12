<script setup lang="ts">
defineProps<{
  char: string
  active: boolean
  span?: boolean
}>()
</script>
<template>
  <div class="v-keyboard--key" :class="{ span: span, active: active }">
    <div class="side"></div>
    <div class="top"></div>
    <div class="char">{{ char }}</div>
  </div>
</template>
