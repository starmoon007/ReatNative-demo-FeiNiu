/**
 * Created by null on 2016/10/24.
 */
import { combineReducers } from 'redux';
import loginReducers from './reducers_login';
import userReducers from './reducers_user';


const reducers = combineReducers({
    loginState: loginReducers,
    userState : userReducers
});

export default reducers