/* eslint-disable @typescript-eslint/no-explicit-any */
import CardBlock1 from "./CardBlock1.vue";

CardBlock1.install = function (app: any) {
  app.component(CardBlock1.name, "CardBlock1");
  return app;
};

interface type_cardBlock1_props {
  img: string;
  title: string;
  desc: string;
}

export { type type_cardBlock1_props, CardBlock1 };
