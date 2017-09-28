import c from './../constants';
import fetch from 'isomorphic-fetch';
import apiKey from './../../api.config';
import v4 from 'uuid/v4';

export const requestCreateAccount = (description, routing_number, account_number, signatory, account_type, localAccountId) => ({
  type: c.CREATE_ACCOUNT,
  description,
  routing_number,
  account_number,
  signatory,
  account_type,
  account_id: localAccountId
});

export const receiveCreateAccount = (created_account, localAccountId) => ({
  type: c.RECEIVE_CREATED_ACCOUNT,
  created_account,
  localAccountId
});

export function postNewAccount(description, account_type, account_number, routing_number, signatory, dispatch) {
  return function(dispatch) {
    const localAccountId = v4();
    dispatch(requestCreateAccount(description, routing_number, account_number, signatory, account_type, localAccountId));
    let createAccountRequest = new Request('https://api.lob.com/v1/bank_accounts', {
      method: 'POST',
      headers: new Headers ({
        'Authorization': 'Basic dGVzdF8zZjNiN2JkMTc0MzAzYmZjMTZhNWNlNjFjZTIxZDliMGEyZDo=',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        description: description,
        routing_number: routing_number,
        account_number: account_number,
        signatory: signatory,
        account_type: account_type
      }),
    });
    return fetch(createAccountRequest).then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      console.log(json);
      dispatch(receiveCreateAccount(json, localAccountId));
    });
  }
}
