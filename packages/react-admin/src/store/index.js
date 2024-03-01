import { makeAutoObservable } from "mobx";

function createName() {
  return makeAutoObservable({
    name: "zs",
    setName(val) {
      this.name = val;
    },
  });
}

export default createName();
