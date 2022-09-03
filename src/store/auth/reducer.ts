import {IS_AUTHENTICATED} from './actionTypes';

export interface AUTH_STATE_PROPS {
  isAuthenticated: boolean;
  trainer: any;
  password: any;
}

export const AUTH_REDUCER_INITIAL_STATE: AUTH_STATE_PROPS = {
  isAuthenticated: false,
  trainer: '',
  password: '',
};

const authReducer = (
  state = AUTH_REDUCER_INITIAL_STATE,
  action: any,
): AUTH_STATE_PROPS => {
  switch (action.type) {
    case IS_AUTHENTICATED: {
      const {trainer, password} = action.isAuthenticated;
      console.log(action);
      return {
        ...state,
        trainer,
        password,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
