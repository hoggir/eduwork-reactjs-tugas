import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "../../app/store";

export default function Redux() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
