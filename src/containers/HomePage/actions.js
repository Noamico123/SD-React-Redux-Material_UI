import {ActionTypes} from "./constants"

export const setAccounts = (accounts) => ({
    type: ActionTypes.SET_ACCOUNTS,
    payload: accounts,
});