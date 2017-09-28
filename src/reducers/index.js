import { combineReducers } from 'redux';
import createAccountReducer from './create-account-reducer';
import getAllAccountsReducer from './get-accounts-reducer';

const rootReducer = combineReducers({
  createAccountReducer,
  getAllAccountsReducer
})

export default rootReducer;
