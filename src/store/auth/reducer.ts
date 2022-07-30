import {IS_AUTHENTICATED} from './actionTypes';

export interface AUTH_STATE_PROPS {
  isAuthenticated: boolean;
}

export const AUTH_REDUCER_INITIAL_STATE: AUTH_STATE_PROPS = {
  isAuthenticated: false,
};

const authReducer = (
  state = AUTH_REDUCER_INITIAL_STATE,
  action: any,
): AUTH_STATE_PROPS => {
  switch (action.type) {
    case IS_AUTHENTICATED: {
      const isAuthenticated = action;
      console.log(action);
      return {
        ...state,
        isAuthenticated,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
