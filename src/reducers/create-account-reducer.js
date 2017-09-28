export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      let newAccount = {
        {
          isFetching: true,
          description: action.description,
          routing_number: action.routing_number,
          account_number: action.account_number,
          signatory: action.signatory,
          account_type: action.account_type,
          account_id: action.account_id
        }
      }
      return [
        ...state,
      ];
    case 'RECEIVE_CREATED_ACCOUNT':
      const { created_account, localAccountId } = action;
      console.log(action);
      let updatedAccount = {
        isFetching: false,
        id: created_account.id,
        description: created_account.description,
        metadata: created_account.metadata,
        routing_number: created_account.routing_number,
        account_number: created_account.account_number,
        account_type: created_account.account_type,
        signatory: created_account.signatory,
        bank_name: created_account.bank_name,
        date_created: created_account.date_created,
        account_id: created_account.account_id
      }
      let newState = state.slice();
      for (var i = 0; i < state.length; i++) {
        if (newState[i].account_id === localAccountId) {
          newState[i] = updatedAccount;
        }
      }
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
