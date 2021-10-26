import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AccountCard from "../../components/AccountCard"
import { makeSelectAccounts } from "./selectors";
import { useHistory } from "react-router";


const stateSelector = createSelector(makeSelectAccounts, (accounts) => ({
    accounts
}));

export default function AccountsList(props) {

    const { accounts } = useSelector(stateSelector);
    const isEmptyAccounts = !accounts ||  (accounts && accounts.length === 0);
    const history = useHistory();
    
    const routeToAccount = (id) => {
        history.push(`/accounts/${id}`)
    }

    if(isEmptyAccounts)
    return null;

    return (
        <div style={{
            backgroundColor: 'lightsteelblue',
          }}>
        <Container maxWidth="lg" >
            <Grid container spacing={3} padding={10}>
                {accounts.map((account, idx) => 
                  <Grid item key={idx} xs={12} md={6} lg={4} onClick={() => routeToAccount(account.id)}>
                      <AccountCard account={account}></AccountCard>
                  </Grid>
                )}
              </Grid>
          </Container>
        </div>
    )

}