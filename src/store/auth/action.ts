import {IS_AUTHENTICATED} from './actionTypes';

export function setLoading(isAuthenticated: boolean) {
  return {
    type: IS_AUTHENTICATED,
    isAuthenticated,
  };
}
