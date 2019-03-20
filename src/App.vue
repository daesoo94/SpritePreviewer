<template>
  <div class="App">
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
    console.log('hello');
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
