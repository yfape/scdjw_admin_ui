<template>
  <a-space class="input-block1">
    <a-typography-text type="secondary">{{ props.label }}</a-typography-text>
    <a-textarea
      :disabled="props.disabled"
      v-model:value="data"
      :placeholder="props.placeholder"
      :auto-size="{
        minRows: props.minRows ? props.minRows : 1,
        maxRows: props.maxRows ? props.maxRows : 3,
      }"
      @change="changeData"
    />
  </a-space>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, defineEmits } from "vue";
import { Input as AInput, Typography, Space as ASpace } from "ant-design-vue";
const { TextArea: ATextarea } = AInput;
const { Text: ATypographyText } = Typography;

interface type_inputblock1_props {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  inputName?: string;
  minRows?: number;
  maxRows?: number;
}

const props = defineProps<type_inputblock1_props>();
const emits = defineEmits(["update:value"]);
const data = ref(props.value);
const changeData = () => {
  emits("update:value", data.value);
};

watch(
  () => props.value,
  (newValue) => {
    data.value = newValue;
  }
);
</script>

<style lang="less" scoped>
.input-block1 {
  justify-content: space-between;
}
</style>
