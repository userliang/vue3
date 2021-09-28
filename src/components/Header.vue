<template>
  <div class="header">
    <div>
      <el-button @click="handleCollapse" type="text">{{
        collapse ? 'expand' : 'collapse'
      }}</el-button>
    </div>
    <div class="title" @click="router.push('/home')">
      Vite2.x + Vue3.x + TypeScript Starter
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store'

export default defineComponent({
  name: 'Header',
  setup() {
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      collapse: computed(() => store.state.commonModule.collapse)
    })
    const handleCollapse = () => {
      store.commit('commonModule/handleCollapse', !data.collapse)
    }

    return {
      router,
      handleCollapse,
      ...toRefs(data)
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
