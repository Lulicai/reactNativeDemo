import React, {Component} from 'react';
import {AsyncStorage, InteractionManager,} from 'react-native';

let data = {};

AsyncStorageWrapper = {
  async bootstrap() {
    // const pRemoteLists = AsyncStorage.getItem('remoteLists');
    // const pSettings = AsyncStorage.getItem('settings');
    // const pPermanent = AsyncStorage.getItem('permanent');
    // const me = AsyncStorage.getItem('me');
    // Promise.all()
    const me = await AsyncStorage.getItem('me');
    const positions = await AsyncStorage.getItem('positions');
    const skills = await AsyncStorage.getItem('skills');
    data['me'] = me;
    data['positions'] = positions;
    data['skills'] = skills;
  },
  getItem(key) {
    const value = data[key];
    // console.log('value',value);
    // setTimeout(() => AsyncStorage.getItem(key), 0);
    return Promise.resolve(value);
  },
  setItem(key, value, callback) {
    data[key] = value;
    // setTimeout(() => AsyncStorage.setItem(key, value), 1000000);
    // InteractionManager.runAfterInteractions(() => {
    //   AsyncStorage.setItem(key, value);
    // });
    if(callback) {
      callback();
    }
    AsyncStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem(key) {
    delete data[key];
    // data = {};
    // setTimeout(() => AsyncStorage.removeItem(key), 1000000);
    // InteractionManager.runAfterInteractions(() => {
    //   AsyncStorage.removeItem(key);
    // });
    AsyncStorage.removeItem(key);
    return Promise.resolve();
  }
};

export default {
  bootstrap() {
      return AsyncStorageWrapper.bootstrap();
  },
  async updateUserDataToLocal(attrs, callback) {
    let userData = await this.getUserDataFromLocal();
    if (!userData) {
      userData = {};
    }
    const newUserData = Object.assign({}, userData, attrs);
    this.saveUserDataToLocal(newUserData, callback);
  },
  async getUserDataFromLocal() {
    const result = await AsyncStorageWrapper.getItem('me');
    if(!result) {
      return {};
    }
    return JSON.parse(result);
  },
  async removeUserDaraFromLocal() {
    // const erer = await AsyncStorageWrapper.getItem('positions');
    // console.log(erer);
    await AsyncStorageWrapper.removeItem('me');
    // const result = await AsyncStorageWrapper.getItem('positions');
    // console.log(result);
    return 'OK';
  },
  async saveUserDataToLocal(userData, callback) {
    await AsyncStorageWrapper.setItem('me', JSON.stringify(userData), callback);
    // if(callback) {
    //   callback();
    // }
  },

  async getPositionsFromLocal() {
    const result = await AsyncStorageWrapper.getItem('positions');
    if(!result) {
      return {};
    }
    return JSON.parse(result);
  },
  async savePositionsToLocal(positions, callback) {
    await AsyncStorageWrapper.setItem('positions', JSON.stringify(positions), callback);
  },
  async getSkillsFromLocal() {
    const result = await AsyncStorageWrapper.getItem('skills');
    if(!result) {
      return {};
    }
    return JSON.parse(result);
  },
  async saveSkillsToLocal(skills, callback) {
    await AsyncStorageWrapper.setItem('skills', JSON.stringify(skills), callback);
  },
};
