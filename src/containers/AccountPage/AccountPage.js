import axios, { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createSelector } from 'reselect';
import { setAccount } from './actions';
import {makeSelectAccount} from './selectors'

const stateSelector = createSelector(makeSelectAccount, (account) => ({
    account
}));

const actionDispatch  = (dispatch) => ({
    setAccount: (account) => dispatch(setAccount(account))
})

export default function AccountPage (props) {
    
    const accountId = props.match.params.id;

    const { account } = useSelector(stateSelector);
    const { setAccount } = actionDispatch(useDispatch());
    // const { accountId } = useParams();

    const fetchAccount = async (id) => {
        const res = await axios.get(`http://localhost:8000/accounts/${id}`).catch(
            (err) => {
                console.log("Err: ", err);
        });

        if(res)
            console.log(res.data);
            setAccount(res.data);
    };
    
    useEffect(() => {
        if( accountId && accountId !== "")
            fetchAccount(accountId);
    },[accountId])

    if (!account) return <div>Loading....</div>
    
    return (
        
        <div>         
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: 'lightsteelblue' }} padding="25px" margin="25px">
                    <h3>Account Name:  {account.Account}</h3>
                    <p>Plan:  {account.status}</p>
                        Sites:
                        <ul>  {account.Sites.map((item,idx) => {return <li key={idx}>{item}</li>})}</ul>
                        Assets:
                        <ul>  {account.Assets.map((item,idx) => {return <li key={idx}>{item}</li>})}</ul>
                </Box>
            </Container>
        </div>
    );
};