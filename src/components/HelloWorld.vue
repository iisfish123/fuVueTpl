<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

defineProps<{ msg: string }>()

const position = reactive({
  x: 0,
  y: 0
})
const count = ref(0)

// type Event = {
//   pageX: number
//   pageY: number
// }

// console.log(ref(position))

const update = (e: MouseEvent): void => {
  position.x = e.pageX
  position.y = e.pageY
}
onMounted(() => {
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    {{ position.x }}
    {{ position.y }}
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  ``````````````
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
