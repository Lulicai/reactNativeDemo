import React, {Component} from 'react';
import RSAUtils from './RSAUtils';

let secParam = {
  DK: null,
  M: null,
  E: null,
}
const SecJs2 = {

  encrypt(pwd) {
    const pk = RSAUtils.getKeyPair(secParam.E(), '', secParam.M());
    const pwd1 = encodeURIComponent(secParam.DK() + pwd);
    const encrytext = RSAUtils.encryptedString(pk, pwd1);
    return encrytext;
  },

  setParams(responseData) {
    if (!responseData) {
      return;
    }
    const l = responseData.split('function ');
    secParam.DK= new Function('', l[1].replace('_DK()', ''));
    secParam.M = new Function('', l[2].replace('_M()', ''));
    secParam.E = new Function('', l[3].replace('_E()', ''));

  },
};
export default SecJs2;
