<template>
  <div class="header">
    <div class="title" @click="router.push('/')">
      Vite2.x + Vue3.x + TypeScript Starter
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    const goGitHub = () => {
      window.open('https://github.com/XPoet/vite-vue3-starter')
    }
    return {
      goGitHub
    }
  }
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: bold;

  .title {
    font-size: 20px;
    cursor: pointer;
  }

  .go-github {
    cursor: pointer;
    font-size: 16px;

    .icon {
      font-size: 20px;
    }
  }
}
</style>
