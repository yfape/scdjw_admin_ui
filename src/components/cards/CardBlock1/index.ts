/* eslint-disable @typescript-eslint/no-explicit-any */
import CardBlock1 from "./CardBlock1.vue";

CardBlock1.install = function (app: any) {
  app.component(CardBlock1.name, "CardBlock1");
  return app;
};

export interface Type_CardBlock1 {
  img?: string;
  title: string;
  desc: string;
}

export default CardBlock1;
