import React, { Component } from "react";
import { createStore } from "redux";

function ReduxDemo(props) {
  const myState = {};

  //step2 :Reducer: state, action
  const reducer = function (state, action) {
    if (action.type === "ATTACK") {
      return action.payload;
    }
    if (action.type === "SURRENDER") {
      return action.payload;
    }
    return state;
  };

  //step 1: create store: reducer, state

  const store = createStore(reducer, "Peace");
  console.log("Store is now", store.getState());
  //step3: Subscribe
  store.subscribe(() => {
    console.log("Store is now", store.getState());
  });

  return (
    <>
      <button
        onClick={() =>
          store.dispatch({ type: "ATTACK", payload: "Hello you Attacked" })
        }
      >
        Attack
      </button>

      <button
        onClick={() =>
          store.dispatch({
            type: "ATTACK",
            payload: "Hello you have Surrendered",
          })
        }
      >
        Surrender
      </button>
    </>
  );
}

export default ReduxDemo;
//export default ReduxDemo;
