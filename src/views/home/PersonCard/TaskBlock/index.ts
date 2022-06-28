/* eslint-disable @typescript-eslint/no-explicit-any */
import TaskBlock from "./TaskBlock.vue";

TaskBlock.install = function (app: any) {
  app.component(TaskBlock.name, "TaskBlock");
  return app;
};

interface type_taskBlock_props {
  title: string;
  num: number;
}

export { type type_taskBlock_props };

export default TaskBlock;
