<template>
  <div class="App">
    <router-link to="./">go</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  created() {
    // ..
  }
  mounted() {
    // ..
  }
}
</script>

<style scoped>
.App {
  width: 100%;
  height: 100%;
  background-color: #aaaaaa;
}
</style>
