/**
 * Created by null on 2016/10/25.
 */
const loginReducer = (state={isLogin:false, logining:false}, action) => {

    switch (action.type) {
        case 'LOGIN':
            //新的state
            return {...state,logining: true};
        default:
            //返回原来的state
            return state
    }
}

export default loginReducer