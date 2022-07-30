import {IS_LOADING} from './actionTypes';

export interface LOADING_STATE_PROPS {
  isLoading: boolean;
}

export const LOADING_REDUCER_INITIAL_STATE: LOADING_STATE_PROPS = {
  isLoading: true,
};

const loadingReducer = (
  state = LOADING_REDUCER_INITIAL_STATE,
  action: any,
): LOADING_STATE_PROPS => {
  switch (action.type) {
    case IS_LOADING: {
      const isLoading = action.loading;

      return {
        ...state,
        isLoading,
      };
    }

    default:
      return state;
  }
};

export default loadingReducer;
