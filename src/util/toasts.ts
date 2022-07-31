import Toast from 'react-native-toast-message';

export const showToast = (message: string, type: string) => {
  Toast.show({text1: message, type: type} as any);
};
