import React from 'react';
import CreateAccount from './CreateAccount';
import DisplayAccounts from './DisplayAccounts';

class TheVault extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <CreateAccount />
      <DisplayAccounts />
    )
  }
}

export default TheVault;
