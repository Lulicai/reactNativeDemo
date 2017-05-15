import {NativeModules} from 'react-native';

const {FkModule} = NativeModules;

const {getUmengChannel} = FkModule;

export default {
  getUmengChannel,
};
