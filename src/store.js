import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePage/reducers";
import accountPage from "./containers/AccountPage/reducers";

const reducers = combineReducers({homePage, accountPage});


export default createStore(reducers);