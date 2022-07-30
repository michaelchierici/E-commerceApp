import {IS_LOADING} from './actionTypes';

export function setLoading(loading: boolean) {
  return {
    type: IS_LOADING,
    loading,
  };
}
