import { createSelector } from "reselect";

const accountPageState = (state) => state.accountPage;

export const makeSelectAccount = createSelector(accountPageState, accountPage => accountPage.account)

