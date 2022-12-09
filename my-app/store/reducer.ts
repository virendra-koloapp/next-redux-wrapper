import { HYDRATE } from "next-redux-wrapper";

// create your reducer
const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
        console.log({action , state})
    //   const stateDiff = diff(state, action.payload) as any;
    //   const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X"); // or any other criteria
      return {
        ...state,
        ...action.payload,
        // page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
      };
    case "TICK":
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};
