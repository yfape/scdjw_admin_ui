interface type_article {
  aid?: number;
  title: string;
  content: string;
  description?: string;
  editor?: string;
  author?: string;
  headimg?: string;
  [key: string]: string | number | undefined;
}
interface type_file {
  type: string;
  src: string;
  name?: string;
}

export { type type_article, type type_file };
