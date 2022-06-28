import { TableColumnsType } from "ant-design-vue";

interface type_dataItem {
  aid: number;
  headimg?: string;
  title: string;
  colname: string;
  editor: string;
  posttime: string;
  auditor: string;
  audittime: string;
  status: number;
}

const TableHeaders: TableColumnsType = [
  {
    title: "ID",
    width: 100,
    dataIndex: "aid",
    key: "aid",
    fixed: "left",
  },
  {
    title: "headimg",
    width: 150,
    dataIndex: "headimg",
    key: "headimg",
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "栏目",
    dataIndex: "colname",
    key: "colname",
    width: 120,
  },
  { title: "编辑", dataIndex: "editor", key: "editor", width: 80 },
  { title: "发布日期", dataIndex: "posttime", key: "posttime", width: 150 },
  { title: "审核人", dataIndex: "auditor", key: "auditor", width: 80 },
  { title: "审核日期", dataIndex: "audittime", key: "audittime", width: 150 },
  { title: "状态", dataIndex: "status", key: "status", width: 80 },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 150,
  },
];

const TableData: type_dataItem[] = [];
for (let i = 0; i < 100; i++) {
  const status = Math.floor(Math.random() * 4);
  TableData.push({
    aid: i + 1,
    headimg:
      "https://p.ssl.img.360kuai.com/dmfd/240_146_/t015a54e96b39a02fe9.webp",
    title: `Edrward ${i + 1}`,
    colname: `党建-市州`,
    editor: `刘尧夫`,
    posttime: "2022-06-12",
    auditor: "陈琳",
    audittime: "2022-06-15",
    status: status,
  });
}

export { TableHeaders, TableData };
