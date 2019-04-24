import * as types from '@/store/action-type';

export const changeHeaderColor = (state,action)=>{
    if(action.active){
        state.active = true
        return {
            ...state
        }
    }
}