import * as home from '@/store/action-type';

// 保存表单数据
export const saveFormData = (value, datatype) => {
  return {
    type: home.SAVEFORMDATA,
    value,
    datatype,
  }
}

// 保存图片地址
export const saveImg = path => {
  return {
    type: home.SAVEIMG,
    path,
  }
}

// 保存图片地址
export const clearData = () => {
  return {
    type: home.CLEARDATA,
  }
}

export const receiveData = (data, category) => ({
    type: home.SAVEFORMDATA,
    data,
    category
});

