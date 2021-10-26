import {ActionTypes} from "./constants"

export const setAccount = (account) => ({
    type: ActionTypes.SET_ACCOUNT,
    payload: account,
});