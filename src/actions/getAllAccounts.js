import c from './../constants';
import fetch from 'isomorphic-fetch';
import apiKey from './../../api.config';

export const receiveAllAccounts = (response) => ({
  type: c.RECEIVE_ALL_ACCOUNTS,
  response
});

export function getAllAccounts(dispatch) {
  console.log("function called!");
  return function(dispatch) {
    console.log("second function called!");
    return fetch('https://api.lob.com/v1/bank_accounts', {
      method: 'get',
      headers: new Headers({
        Authorization: 'Basic dGVzdF8zZjNiN2JkMTc0MzAzYmZjMTZhNWNlNjFjZTIxZDliMGEyZDo='
      })
    }).then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
      console.log(json);
      dispatch(receiveAllAccounts(json.data));
    });

  }
}
