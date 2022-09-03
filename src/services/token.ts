import AsyncStorage from '@react-native-async-storage/async-storage';

export class Token {
  static async setToken(key: string, token: string) {
    await AsyncStorage.setItem(key, token);
  }

  static async getToken(key: string) {
    await AsyncStorage.getItem(key);
  }

  static async removeToken(key: string) {
    await AsyncStorage.removeItem(key);
  }
}
