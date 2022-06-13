<template>
  <a-form
    :model="formState"
    name="basic"
    :wrapper-col="{ span: 24 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      label="账号"
      name="username"
      :rules="[{ required: true, message: '请输入账号!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>
    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>
    <a-form-item name="remember" :wrapper-col="{ span: 24 }">
      <a-checkbox v-model:checked="formState.remember">
        勾选下次免登陆
      </a-checkbox>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 24 }">
      <a-button
        :disabled="canSubmit"
        :type="canSubmit ? 'dashed' : 'primary'"
        block
        html-type="submit"
        >登 录</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import {
  Form as AForm,
  Input as AInput,
  Checkbox as ACheckbox,
  Button as AButton,
} from "ant-design-vue";
const { Item: AFormItem } = AForm;
const { Password: AInputPassword } = AInput;

const formState = reactive({
  username: "",
  password: "",
  remember: false,
});

const canSubmit = ref(true);

watch(formState, (value) => {
  if (value.username && value.password) {
    canSubmit.value = false;
  } else {
    canSubmit.value = true;
  }
});

const onFinish = () => {
  console.log(formState);
};
</script>

<style lang="less" scoped></style>
