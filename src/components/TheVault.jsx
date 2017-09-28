import React from 'react';
import CreateAccountForm from './CreateAccountForm';
import DisplayAccounts from './DisplayAccounts';
import ViewAllAccounts from './ViewAllAccounts';
import { connect } from 'react-redux';

class TheVault extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    return(
      <div>
        <CreateAccountForm submit={this.handleNewAccountSubmit}/>
        <DisplayAccounts createdAccountList={this.props.masterState.createAccountReducer}/>
        <ViewAllAccounts
          accountList={this.props.masterState.getAllAcountsReducer}
          getAccounts={this.getSavedAccounts}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterState: state
  }
}

export default connect(mapStateToProps)(TheVault);
