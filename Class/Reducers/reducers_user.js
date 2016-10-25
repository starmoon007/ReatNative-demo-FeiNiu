/**
 * Created by null on 2016/10/25.
 */
const userReducers = (state={}, action) => {

    switch (action.type) {
        case 'USER':
            //新的state
            return state;

        default:
            //返回原来的state
            return state
    }
}

export default userReducers