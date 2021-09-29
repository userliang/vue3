<template>
  <div class="loginBox">
    <el-card class="loginCard">
      <h2 class="title">登录</h2>
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model.trim="formData.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="formData.password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" :loading="submitting">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import axios from '../utils/axios'

export default defineComponent({
  name: 'Login',
  setup() {
    const form = ref<any>()
    const router = useRouter()
    const data = reactive({
      formData: { username: '', password: '' },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      },
      submitting: false
    })
    const submitForm = () => {
      form.value.validate((valid: any) => {
        if (valid) {
          data.submitting = true
          axios({
            method: 'post',
            url: '/api/gw/v2/login/account',
            data: {
              username: 123,
              password: 122
            }
          })
            .then((res: any) => {
              console.log('res', res)
              if (res.success) {
                router.push('/home')
              } else {
                ElMessage.error(res.errorMsg)
              }
              data.submitting = false
            })
            .catch(() => {
              data.submitting = false
            })
        }
      })
    }
    return {
      form,
      ...toRefs(data),
      submitForm
    }
  }
})
</script>
<style scoped lang="scss">
.loginBox {
  display: flex;
  justify-content: center;
  background-color: #ebebeb;
  min-height: 100%;
  .loginCard {
    padding: 30px;
    width: 450px;
    height: 450px;
    margin: 50px;
    .title {
      text-align: center;
      margin-bottom: 60px;
    }
    .el-form-item {
      margin-bottom: 40px;
    }
    .el-button {
      width: 100%;
      margin-top: 50px;
    }
  }
}
</style>
