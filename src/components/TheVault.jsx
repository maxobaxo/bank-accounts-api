import React from 'react';
import CreateAccountForm from './CreateAccountForm';
import DisplayAccounts from './DisplayAccounts';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  console.log(state);
  return {
    masterState: state
  }
}

export default connect(mapStateToProps)(TheVault);
