import { createStore } from "redux";
import { Reducer, initialState, initialSate } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialSate);
};
