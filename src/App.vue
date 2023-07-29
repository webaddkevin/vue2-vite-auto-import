<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TestVue from './components/Test.vue';
export default {
  components: {
    TestVue
  },
  data() {
    return {
      msg: '111'
    }
  },
  provide() {
    return {
      a: 1
    }
  }
}
</script>
