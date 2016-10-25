/**
 * Created by null on 2016/10/24.
 */

function makeActionCreator(type, ...argNames) {

    return function(...args) {
        let action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}


const LOGIN = 'LOGIN'

export const loginAction = makeActionCreator(LOGIN);


