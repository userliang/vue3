<template>
  <div class="nav">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="collapse"
      :router="true"
      :default-active="active"
    >
      <el-menu-item index="/home">
        <i class="el-icon-location"></i>
        <template #title>Home</template>
      </el-menu-item>
      <el-menu-item index="/vuex">
        <i class="el-icon-menu"></i>
        <template #title>Vuex</template>
      </el-menu-item>
      <el-menu-item index="/axios">
        <i class="el-icon-document"></i>
        <template #title>Axios</template>
      </el-menu-item>
      <el-menu-item index="/test">
        <i class="el-icon-setting"></i>
        <template #title>Test</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'Nav',

  setup() {
    const store = useStore()

    const reactiveData = reactive({
      active: '',
      collapse: computed(() => store.state.commonModule.collapse)
    })
    const route = useRoute()
    watch(
      () => route.path,
      (path) => {
        console.log('监听到变化', path)
        reactiveData.active = path
      }
    )
    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style scoped lang="scss">
@import '../style/basic.scss';
.nav {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;

  .el-menu-vertical-demo {
    border: none;
    &:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
}
</style>
