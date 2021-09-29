<template>
  <div class="header">
    <span class="collapseIcon" @click="handleCollapse">
      <i v-if="collapse" class="ri-menu-unfold-line"></i>
      <i v-else class="ri-menu-fold-line"></i>
    </span>
    <div class="title" @click="router.push('/home')">
      Vite2.x + Vue3.x + TypeScript Starter
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

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

  .collapseIcon {
    cursor: pointer;
    font-size: 16px;
  }
}
</style>
