import {IS_AUTHENTICATED} from './actionTypes';

export interface LOADING_STATE_PROPS {
  isAuthenticated: boolean;
}

export const LOADING_REDUCER_INITIAL_STATE: LOADING_STATE_PROPS = {
  isAuthenticated: true,
};

const loadingReducer = (
  state = LOADING_REDUCER_INITIAL_STATE,
  action: any,
): LOADING_STATE_PROPS => {
  switch (action.type) {
    case IS_AUTHENTICATED: {
      const isAuthenticated = action.loading;

      return {
        ...state,
        isAuthenticated,
      };
    }

    default:
      return state;
  }
};

export default loadingReducer;
