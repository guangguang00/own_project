import * as types from '@/store/action-type';

export const showLoading = (state = {loading:'加载中'},action) => {
    //这里的action就是action.js里面方法的返回值
   
    switch(action.type){
        case types.TEST1:
            
            state.loading = '加载完成'
            return {...state}
        case types.TEST2:
            console.log('test2')
            state.loading = '改变数据结构了'
            return {...state}
        default :
            return state
    }
}