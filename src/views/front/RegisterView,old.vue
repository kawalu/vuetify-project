<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1>註冊</h1>
      </VCol>
      <V-Divider></V-Divider>
      <VCol cols="12">
        <VForm v-model="valid" @submit.prevent="register">
          <VTextField v-model="form.account"
          label="帳號"
          counter
          maxlength="20"
          :rules="[rules.required, rules.min, rules.max]"></VTextField>
          <VTextField v-model="form.email"
          label="信箱"
          type="email"
          :rules="[rules.required, rules.email]"></VTextField>
          <VTextField v-model="form.password"
          label="密碼"
          counter
          maxlength="20"
          type="password"
          :rules="[rules.required, rules.min, rules.max, rules.confirm]"
          ref="elPassword"
          @update:modelValue="elPassword.validate()"></VTextField>
          <VTextField v-model="form.confirmPassword"
          label="確認密碼"
          counter
          maxlength="20"
          type="password"
          :rules="[rules.required, rules.min, rules.max, rules.confirm]"
          ref="elPassword"
          @update:modelValue="elPassword.validate()"></VTextField>
          <div class="text-center">
            <VBtn type="submit" color="green">註冊</VBtn>
          </div>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref, reactive } from 'vue'
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('信箱必填')
    .test(
      'isEmail', '信箱格式錯誤', (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('信箱必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字'),
  passwordConfirm: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validatorSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')
</script>
