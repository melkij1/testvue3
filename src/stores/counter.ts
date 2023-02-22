import { ref, computed } from "vue";
import { defineStore } from "pinia";

type IMainState = {
  items: Item[];
};
interface Item {
  id: string;
  value: string;
  action: boolean;
}

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      items: [],
    } as IMainState),
  actions: {
    createNewItem: (item: Item) => {
      console.log(item, "item");
      if (!item) return;

      console.log(this, "this");
      this.items.push(item);
    },
  },
});
