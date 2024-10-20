import { createContext, useContext } from "react";
import CourtStore from "./courtStore";

interface Store {
  courtStore: CourtStore;
}

export const store: Store = {
  courtStore: new CourtStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
