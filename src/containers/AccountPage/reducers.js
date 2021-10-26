import {ActionTypes} from "./constants"

const defaultState = {
    account: {
    id: 0,
    Account: null,
    status: null,
    Sites: [],
    Assets: [],}
};

export default function accountPageReducer( state = defaultState, action ) {
    switch (action.type) {
        case ActionTypes.SET_ACCOUNT:
            return { ...state, account: action.payload };
        default:
            return state;
    }
}