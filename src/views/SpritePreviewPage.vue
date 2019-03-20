<template>
  <div class="SpritePreviewPage">
    hellohello
    <canvas></canvas>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class SpritePreviewPage extends Vue {
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
canvas {
  width: 90%;
  height: 100%;
}
</style>
