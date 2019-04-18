import {LOGIN_SUCESS} from '../../store/action-type'

export const changeToken = (token)=>{
    console.log(token,'login的action里面的参数')
    return{
        type:LOGIN_SUCESS,
        token:token
    }
}