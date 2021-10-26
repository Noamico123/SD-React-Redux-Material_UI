import {ActionTypes} from "./constants"

const defaultState = {
    accounts: ["No accounts!"]
};

export default function homePageReducer( state= defaultState, action ) {
    switch (action.type) {
        
        case ActionTypes.SET_ACCOUNTS:
            return { ...state, accounts: action.payload };
        default:
            return state;
    }
}