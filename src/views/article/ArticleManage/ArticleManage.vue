<template>
  <div class="article-content">
    <div class="article-header">
      <a-row justify="space-between" align="middle">
        <a-space>
          <a-button type="primary" @click="GoEdit(0)">
            <template #icon><plus-outlined /></template>
            新增文章
          </a-button>
          <a-button>编辑丨刘尧夫</a-button>
          <a-button>栏目丨全部</a-button>
          <a-divider type="vertical" />
          <a-checkbox-group
            v-model:value="data_checkbox"
            name="status"
            :options="CheckboxOptions"
          />
          <a-divider type="vertical" />
        </a-space>
        <div>
          <a-input-search
            v-model:value="data_search.text"
            placeholder="搜索..."
            :loading="Loading"
            enter-button
          >
            <template #prefix>
              <a-tooltip placement="topRight">
                <template #title>
                  <span
                    >勾选后将检索文章内容（大量消耗系统性能，请勿频繁使用）</span
                  >
                </template>
                <a-checkbox
                  class="input-checkbox"
                  :value="true"
                  v-model:checked="data_search.withContent"
                >
                  强力模式丨
                </a-checkbox>
              </a-tooltip>
            </template>
          </a-input-search>
        </div>
      </a-row>
    </div>
    <div>
      <a-table
        :columns="TableHeaders"
        :data-source="TableData"
        :scroll="{ x: 1500, y: 650 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'headimg'">
            <img :src="record.headimg" />
          </template>
          <template v-else-if="column.key == 'status'">
            <span>{{ ArticleStatusText(record.status) }}</span>
          </template>
          <template v-else-if="column.key === 'operation'">
            <a-tooltip
              v-if="record.status != 1 && record.status != 0"
              placement="bottom"
            >
              <template #title>
                <span>预览</span>
              </template>
              <a-button type="text">
                <template #icon><eye-outlined /></template>
              </a-button>
            </a-tooltip>
            <a-tooltip v-if="record.status == 1" placement="bottom">
              <template #title>
                <span>审核</span>
              </template>
              <a-button type="text">
                <template #icon><audit-outlined /></template>
              </a-button>
            </a-tooltip>
            <a-tooltip v-if="record.status == 0" placement="bottom">
              <template #title>
                <span>编辑</span>
              </template>
              <a-button
                type="text"
                style="color: #ef985d"
                @click="GoEdit(record.aid)"
              >
                <template #icon><form-outlined /></template>
              </a-button>
            </a-tooltip>
            <a-tooltip v-if="record.status == 2" placement="bottom">
              <template #title>
                <span>发布</span>
              </template>
              <a-button type="text" style="color: #b90707">
                <template #icon><arrow-up-outlined /></template>
              </a-button>
            </a-tooltip>
            <a-tooltip
              v-if="record.status != 0 && record.status != 1"
              placement="bottom"
            >
              <template #title>
                <span>回撤</span>
              </template>
              <a-button type="text" style="color: #2a96bf">
                <template #icon><rollback-outlined /></template>
              </a-button>
            </a-tooltip>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Space as ASpace,
  Button as AButton,
  Divider as ADivider,
  Checkbox as ACheckbox,
  Row as ARow,
  Input as AInput,
  Tooltip as ATooltip,
  Table as ATable,
} from "ant-design-vue";
import {
  PlusOutlined,
  FormOutlined,
  EyeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  AuditOutlined,
  RollbackOutlined,
} from "@ant-design/icons-vue";
import { ArticleStatusText, GoEdit, Loading } from ".";
import { TableHeaders, TableData } from "./table";
import { CheckboxOptions, data_checkbox } from "./checkbox";
import { data_search } from "./search";
const { Search: AInputSearch } = AInput;
const { Group: ACheckboxGroup } = ACheckbox;
</script>

<style lang="less" scoped>
.article-content {
  padding: @base-margin-md;

  .article-header {
    padding: @base-margin-sm;
    background-color: #fff;
    margin-bottom: @base-margin-md;
  }
}
.input-checkbox {
  color: @base-text-color!important;
}
</style>
<style lang="less">
.ant-table-cell img {
  max-width: 100%;
  max-height: 50px;
  border-radius: @base-border-radius;
}
.ant-table-tbody .ant-table-row .ant-table-cell:nth-child(2) {
  padding: 5px 16px !important;
}
</style>
