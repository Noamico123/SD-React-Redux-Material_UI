import Axios from "axios";
import { useEffect } from "react";
import { setAccounts } from "./actions";
import AccountsList from "./AccountList";
import { createSelector } from "reselect";
import { makeSelectAccounts } from "./selectors";
import AccountPage from "../AccountPage/AccountPage";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const stateSelector = createSelector(makeSelectAccounts, (accounts) => ({
    accounts
}));

const actionDispatch = (dispatch) => ({
    setAccounts: (accounts) => dispatch(setAccounts(accounts))
});


export function HomePage(props) {
    
    const { accounts } = useSelector(stateSelector);
    const { setAccounts } = actionDispatch(useDispatch());

    const fetchAccounts = async () => {
        const res = await Axios.get("http://localhost:8000/accounts").catch((err) => {
            console.log("Err: ", err);
        });

      setAccounts(res.data);
    };

    useEffect(() => {
        fetchAccounts();
    },[]);


    console.log(accounts);

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={AccountsList}/>
                    <Route exact path="/accounts/:id" component={AccountPage}/>
                    <Route>404 Not Found </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}