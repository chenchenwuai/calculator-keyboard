<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import KeyButton from './KeyButton.vue'
import useAudio from '@/hooks/useAudio'
import useSetState from '@/hooks/useSetState'

// eslint-disable-next-line prettier/prettier
const keyCodes = ['1','2','3','4','5','6','7','8','9','0','.','+', '-']

const { add, remove, has } = useSetState()

const url = 'https://cdn.yoavik.com/codepen/mechanical-keyboard/keytype.mp3'
const { play, stop } = useAudio(url)

function onKeyDown(e: any) {
  if (keyCodes.indexOf(e.key) >= 0 && !has(e.key)) {
    add(e.key)
    stop()
    play()
  }
}
function onKeyUp(e: any) {
  remove(e.key)
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('keyup', onKeyUp)
})
</script>
<template>
  <div class="v-keyboard">
    <div class="v-keyboard--column">
      <div class="v-keyboard--row">
        <KeyButton
          v-for="item in ['7', '8', '9']"
          :key="item"
          :char="item"
          :active="has(item)"
        ></KeyButton>
      </div>
      <div class="v-keyboard--row">
        <KeyButton
          v-for="item in ['4', '5', '6']"
          :key="item"
          :char="item"
          :active="has(item)"
        ></KeyButton>
      </div>
      <div class="v-keyboard--row">
        <KeyButton
          v-for="item in ['1', '2', '3']"
          :key="item"
          :char="item"
          :active="has(item)"
        ></KeyButton>
      </div>
      <div class="v-keyboard--row">
        <KeyButton
          v-for="item in ['0', '.']"
          :key="item"
          :char="item"
          :active="has(item)"
          :span="item === '0'"
        ></KeyButton>
      </div>
    </div>
    <div class="v-keyboard--column">
      <KeyButton
        v-for="item in ['+', '-']"
        :key="item"
        :char="item"
        :active="has(item)"
        :span="true"
      ></KeyButton>
    </div>
    <div class="v-keyboard--shade"></div>
    <div class="v-keyboard--cover"></div>
  </div>
</template>
