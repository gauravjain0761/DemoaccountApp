import { IS_LOADING } from "../actions/types";

const INITIAL_STATE = {
  isLoading:false
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};
