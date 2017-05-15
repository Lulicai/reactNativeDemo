import Api from '../network/Api';
const urlPre = '/api/v2/freekeers';
const burlPre = '/api/v2/enterprise';
//const urlPre = '/freekeer-c-api';
const Actions = {
  //登录接口
  login(params) {
    return Api.post(`${urlPre}/login`, params, {responseType: 'all'});
  },
  register(params) {
    return Api.post(`${urlPre}/register`, params);
  },
  getSecJs() {
    return Api.get(`${urlPre}/sec_js`, {}, {responseType: 'text'});
  },
  //需要账户不存在,发送
  getVerifyCode(params) {
    return Api.get(`${urlPre}/verify-code`, params);
  },
  //需要账户存在,发送
  getConfirmCode(params) {
    return Api.get(`${urlPre}/sms-code`, params);
  },
  //单独校验验证码
  validateCode(params) {
    return Api.get(`${urlPre}/validate-code`, params);
  },
  //忘记密码
  forgetPassword(params) {
    return Api.put(`${urlPre}/forget-password`, params);
  },
  //修改密码
  changePassword(params) {
    return Api.put(`${urlPre}/change-password`, params);
  },
  //绑定手机号
  bindPhone(params) {
    return Api.post(`${urlPre}/bind-phone`, params);
  },
  //绑定新手机号||修改手机号
  bindNewPhone(params) {
    return Api.put(`${urlPre}/change-phone`, params);
  },
  getSysMsgUnreadNum(params) {
    return Api.get(`${burlPre}/sys-msg-unread-num`, params, {responseType: 'text'});
  },
  getRecommendedMsgUnreadNum(params) {
    return Api.get(`${burlPre}/recommend-msg-unread-num`, params, {responseType: 'text'});
  },
  //feedback意见反馈
  postFeedback(params) {
    return Api.post(`${urlPre}/feedback`, params);
  },
  //APP启动
  appStart(params) {
    return Api.get(`${urlPre}/app-start`, params);
  },
  //升级信息交互
  reloadUserInfo() {
    return Api.get(`${urlPre}/user-info`);
  },
  versionCheck() {
    return Api.get(`${urlPre}/codepush`);
  },
  roleSwithInfo(params) {
    return Api.get(`${urlPre}/switch-role`, params);
  },
  goToActivity(params) {
    return Api.get(`${urlPre}/slide-ads-detail`, params);
  },
  getPositions() {
    return Api.get(`${burlPre}/positions`);
  },
  getSkills() {
    return Api.get(`${burlPre}/skills`);
  },
  getTags(param) {
    return Api.get(`${burlPre}/meta-tags/${param}`);
  },
  //行业标签
  getMetaOfIndustry(){
    return Api.get(`${urlPre}/find-industry-meta-data`);
  },
  //语言标签
  getMetaOfLanguage(){
    return Api.get(`${urlPre}/find-language-meta-data`);
  },
  //首页热门
  getHomeDemands(){
    return Api.get(`${burlPre}/home-demands`);
  },
  //启动页面闪图
  fetchFlashImgs(){
    return Api.get(`${burlPre}/flash`);
  }
};
export default Actions;
