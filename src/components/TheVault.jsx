import React from 'react';
import CreateAccountForm from './CreateAccountForm';
import DisplayAccounts from './DisplayAccounts';

class TheVault extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <CreateAccountForm submit={this.handleNewAccountSubmit}/>
        <DisplayAccounts />
      </div>
    )
  }
}

export default TheVault;
