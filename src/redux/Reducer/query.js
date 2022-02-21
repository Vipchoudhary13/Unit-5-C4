import {
  GETQUERYLOADING,
  GETQUERYFAILIURE,
  GETQUERYSUCCESS,
  GETRESULTSUCCESS,

} from "../actionTypes";

const init_state = {
  loading: false,
  queries: [],
  result : {}
};

export const queryReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case GETQUERYLOADING:
      return {
        ...state,
        loading: true
      };
    case GETQUERYFAILIURE:
      return {
        ...state,
        loading: false
      };
    case GETQUERYSUCCESS:
      console.log(payload);
      return {
        ...state,
        queries: payload,
        loading: false
      };
      case GETRESULTSUCCESS:
        return {
          ...state,
          result: payload,
          loading: false
        };
    default:
      return state;
  }
};