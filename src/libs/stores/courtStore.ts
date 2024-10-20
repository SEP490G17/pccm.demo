import { makeAutoObservable, reaction, runInAction } from "mobx";
import { delay } from "@/utils/helper";
import { ICourt } from "../models/court.model";
import { listCourtMock } from "@/public/mocks/court.mocks";

export default class CourtStore {
  listCourt: ICourt[] = [];
  loadingInitial: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  loadListCourt = async () => {
    this.setLoadingInitial(true);
    console.log("court");
    this.listCourt = [...listCourtMock];
    console.log(this.listCourt);
    await runInAction(async () => {
      await delay(200);
      this.setLoadingInitial(false);
    });
  };

  setLoadingInitial = (isLoad: boolean) => (this.loadingInitial = isLoad);
}
