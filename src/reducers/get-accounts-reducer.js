let store = [
  {
    account_number: "1234567899",
    account_type: "individual",
    bank_name: "JP MORGAN CHASE",
    id: "bank_5f6bb02b07848e5",
    signatory: "Rebecca Haverstick",
    verified: false
  }
]

export default (state = store, action) => {
  switch (action.type) {
    case 'RECEIVE_ALL_ACCOUNTS':
      const { response } = action;
      let newState = state.slice();
      response.forEach((remoteAccount) => {
        console.log(remoteAccount)
        // newState.forEach((localAccount) => {
        //   if (localAccount.id !== remoteAccount.id) {
        //     newState.push(remoteAccount);
        //   }
        // });
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
