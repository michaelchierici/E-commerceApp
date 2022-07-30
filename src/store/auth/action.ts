import {IS_AUTHENTICATED} from './actionTypes';

export function setAuth(isAuthenticated: boolean) {
  return {
    type: IS_AUTHENTICATED,
    isAuthenticated,
  };
}
