<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Page from '../common/Page'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Page {
  mounted() {
    this.api.getProductList();
  }
}
</script>
