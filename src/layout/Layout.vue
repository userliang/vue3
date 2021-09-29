<template>
  <main class="main-container">
    <div class="left">
      <Nav />
    </div>
    <div class="right">
      <div class="top">
        <Header />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import Nav from './Nav.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Header,
    Nav
  }
})
</script>

<style scoped lang="scss">
@import '../style/basic.scss';
$top-height: 60px;

.main-container {
  background: $second-background-color;
  height: 100%;
  display: flex;
  .left {
    overflow-y: auto;
    flex: 0 0 auto;
    margin-right: 10px;
  }
  .right {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .top {
      width: 100%;
      margin-bottom: 10px;
      flex: 0 0 $top-height;
    }
    .content {
      flex: auto;
      overflow: auto;
      background-color: #fff;
    }
  }
}
</style>
