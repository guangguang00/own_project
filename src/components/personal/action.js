import * as types from '@/store/action-type'

export const register = (username,password) => {

    return {
        type:Math.random() > 0.5 ? types.TEST1 : types.TEST2,
        path:'register',
        method:'post',
        query:{username,password}
    }
}
