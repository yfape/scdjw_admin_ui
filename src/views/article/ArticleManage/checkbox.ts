import { ref, watch } from "vue";
import store, { type type_articleStatus } from "@/store/index";
import { type CheckboxOptionType } from "ant-design-vue";

const CheckboxOptions: CheckboxOptionType[] = [];
const InitCheckboxOptions: number[] = [];
const statusText: type_articleStatus = store.state.config.article.status;
for (const key in statusText) {
  const k = parseInt(key);
  CheckboxOptions.push({
    label: statusText[k],
    value: k,
  });
  if (k != 0) InitCheckboxOptions.push(k);
}

const data_checkbox = ref<number[]>(InitCheckboxOptions);

watch(data_checkbox, (nd, od) => {
  const ec = nd.length - od.length;
  if (ec != 1) {
    return;
  }
  if (od.indexOf(0) === -1 && nd.indexOf(0) > -1 && nd != [0]) {
    data_checkbox.value = [0];
  } else if (od.indexOf(0) > -1 && nd.indexOf(0) > -1) {
    const index = data_checkbox.value.indexOf(0);
    data_checkbox.value.splice(index, 1);
  }
});
export { CheckboxOptions, InitCheckboxOptions, data_checkbox };
