<template>
  <div>
      {{ test.m }}
    <input v-model="ccc" />
    {{ ccc }}
    <input v-model="ccc" />
  </div>
</template>

<script setup lang="ts">
const test = reactive({
  m: 'hello world'
});
const a = ref(111)
const ccc = ref('')
</script>