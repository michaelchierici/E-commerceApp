import {IS_AUTHENTICATED} from './actionTypes';

export function setAuth(trainer: any, password: any) {
  return {
    type: IS_AUTHENTICATED,
    trainer,
    password,
  };
}
