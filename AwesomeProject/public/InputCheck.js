const InputCheck = {
  check(checkName, value, param) {
    let ret = false;
    const fn = map[checkName];
    if (fn) {
      ret = fn(value, param);
    }
    return ret;
  },
  notNull(value) {
    if (!value) {
      return false;
    }
    let valueRef = `${value}`;
    valueRef = valueRef.trim();
    if (!valueRef) {
      return false;
    }
    return true;
  },
  phoneNo(value) {
    if (!/^(13|14|15|17|18)\d{9}$/i.test(value)) {
      return false;
    }
    return true;
  },
  allPhoneNo(value) {
    if (/^(13|14|15|17|18)\d{9}$/i.test(value)) {
      return true;
    }
    if (/^((0\d{2,3}))(\d{7,8})(-(\d{3,}))?$/.test(value)) {
      return true;
    }
    return false;
  },
  email(value) {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegExp.test(value)) {
      return false;
    }
    return true;
  },
  site(value) {
    const siteRegExp = /^\w+(\.\w+)+\.\w+$/;
    if (!siteRegExp.test(value)) {
      return false;
    }
    return true;
  },
  plusQuantity(value) {
    if (!/^[1-9][0-9]*$/.test(value)) {
      return false;
    }
    return true;
  },
  lengthBetween(value, param) {
    const length = value.length;
    const min = param[0];
    const max = param[1];
    if (length < min) {
      return false;
    }
    if (length > max) {
      return false;
    }
    return true;
  },
  lengthLess(value, param) {
    if (value) {
      if (value.length > param) {
        return false;
      }
    }
    return true;
  },
  lengthBig(value, param) {
    if (value) {
      if (value.length < param) {
        return false;
      }
    }
    return true;
  },
  plusFloat(value, param) {
    let regStr = '^(?:0|[1-9][0-9]*)';
    if (param) {
      if (typeof param === 'object') {
        const min = param[0];
        const max = param[1];
        regStr += '(?:\\.\\d{${min},${max}})?';
        // regStr += '(?:\\.\\d{' + min + ',' + max + '})?';
      } else {
        // regStr += '(?:\\.\\d{' + param + '})?';
        regStr += '(?:\\.\\d{${param}})?';
      }
    }
    regStr += '$';
    const pattern = new RegExp(regStr, 'i');
    return pattern.test(value);
  },
  equals(value, param) {
    if (value !== param) {
      return false;
    }
    return true;
  },
  bigger(value, param) {
    if (!value || !param) {
      return true;
    }
    if (value <= param) {
      return false;
    }
    return true;
  },
  smaller(value, param) {
    if (!value || !param) {
      return true;
    }
    if (value >= param) {
      return false;
    }
    return true;
  },
  number(value) {
    const pattern = new RegExp('^[1-9]?[0-9]*$', 'i');
    if (!pattern.test(value)) {
      return false;
    }
    return true;
  },
  numeric(value) {
    const pattern = new RegExp('^[1-9]?[0-9]*\.?[0-9]{1,2}$', 'i');
    if (!pattern.test(value)) {
      return false;
    }
    return true;
  },
};

const map = {
  notNull: InputCheck.notNull, // 不为空
  phoneNo: InputCheck.phoneNo, // 手机号
  email: InputCheck.email, // 邮件
  plusQuantity: InputCheck.plusQuantity, // 正整数
  lengthBetween: InputCheck.lengthBetween, // 长度范围
  plusFloat: InputCheck.plusFloat, // 大于0的浮点数,可以指定小数点的位数
  lengthLess: InputCheck.lengthLess, // 长度小于给定参数
  lengthBig: InputCheck.lengthBig, // 长度大于给定参数
  equals: InputCheck.equals, // 相等
  bigger: InputCheck.bigger, // 大于
  site: InputCheck.site,
  number: InputCheck.number,//数字
  smaller: InputCheck.smaller,//小于
  numeric: InputCheck.numeric,//浮点数,0,1或者2小数
  allPhoneNo: InputCheck.allPhoneNo,
};

export default InputCheck;
