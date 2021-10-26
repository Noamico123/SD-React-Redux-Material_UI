import { createSelector } from "reselect";

const homePageState = (state) => state.homePage;

export const makeSelectAccounts = createSelector(homePageState, homePage => homePage.accounts)

