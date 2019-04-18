import {LOGIN_SUCESS} from '../../store/action-type'
export const loginStatus = (state = {token:''},action)=>{
    switch(action.type){
        case LOGIN_SUCESS:
            state.token = action.token
            console.log(state,'login的reducer里面的值')
            return {...state}
        default:
            return {...state}
    }
}
//怎么在reducer中返回一个对象，而不是一个函数
// export const token = ()=>({
//     name:'ass'
// })