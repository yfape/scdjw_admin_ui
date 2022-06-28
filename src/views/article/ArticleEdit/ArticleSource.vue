<template>
  <div class="article-source">
    <div class="a-s-header">
      <a-typography-text type="secondary" strong>资源</a-typography-text>
      <a-upload
        name="file"
        :showUploadList="false"
        :customRequest="handleChange"
      >
        <a-button size="small" type="text">
          <plus-outlined />
          上传
        </a-button>
      </a-upload>
    </div>
    <div class="a-s-contain">
      <div v-for="(item, key) in fileList" :key="key" @click="selectItem(key)">
        <img v-if="item.type == 'img'" :src="item.src" />
        <video
          v-else-if="item.type == 'video'"
          :src="item.src"
          controls
        ></video>
        <div v-else-if="item.type == 'file'" class="a-s-file">
          <file-outlined />
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, defineEmits } from "vue";
import {
  Typography,
  Upload as AUpload,
  Button as AButton,
} from "ant-design-vue";
import { PlusOutlined, FileOutlined } from "@ant-design/icons-vue";
const { Text: ATypographyText } = Typography;
interface type_file {
  type: string;
  src: string;
  name?: string;
}
const emits = defineEmits(["select"]);

const fileList = reactive<type_file[]>([]);
const handleChange = () => {
  console.log(fileList);
};
const selectItem = (index: number) => {
  emits("select", fileList[index]);
};
onMounted(() => {
  fileList.push(
    {
      type: "img",
      src: "https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF",
    },
    {
      type: "file",
      name: "关于购买53台电脑的竞价通知",
      src: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
    },
    {
      type: "img",
      src: "https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF",
    },
    {
      type: "video",
      src: "https://live-s3m.mediav.com/nativevideo/7878cea30fde9616245de60f5c1f80b2-bit_cloud512.mp4",
    },
    {
      type: "img",
      src: "https://t7.baidu.com/it/u=727460147,2222092211&fm=193&f=GIF",
    }
  );
});
</script>

<style lang="less" scoped>
.article-source {
  width: 300px;
  height: 100vh;
  background-color: #ffffffad;
  box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.12);
  padding: 20px;
  overflow: hidden;

  .a-s-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .a-s-contain {
    margin-top: @base-margin-sm;
    height: 100%;
    display: fixed;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-y: auto;

    img,
    video {
      width: 100%;
      border-radius: 5px;
      transition: 0.2s all;
      cursor: pointer;
    }
    img:hover,
    video:hover {
      filter: brightness(1.2);
    }

    > * {
      margin-bottom: @base-margin-sm;
    }
  }
  .a-s-contain::-webkit-scrollbar {
    width: 0px;
  }
  .a-s-file {
    padding: @base-margin-sm;
    border: 1px solid @base-border-color;
    border-radius: 5px;
    cursor: pointer;
  }
  .a-s-file:hover {
    background-color: rgb(218, 216, 216);
  }
}
</style>
