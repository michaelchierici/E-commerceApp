import {IS_LOADING} from './actionTypes';

export function isLoading(loading: boolean) {
  return {
    type: IS_LOADING,
    loading,
  };
}
