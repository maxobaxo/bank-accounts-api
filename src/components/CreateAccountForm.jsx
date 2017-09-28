import React from 'react';
import { postNewAccount } from './../actions/createAccount';
import { getAllAccounts } from './../actions/getAllAccounts';
import { connect } from 'react-redux';

class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.createAccount = this.createAccount.bind(this);
    this.getSavedAccounts = this.getSavedAccounts.bind(this);
  }

  getSavedAccounts(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(getAllAccounts());
  }

  createAccount(event) {
    event.preventDefault();
    let { _account_type, _signatory, _description } = this.refs;
    const { dispatch } = this.props;

    dispatch(postNewAccount(_description.value, _account_type.value, "123456789", "322271627", _signatory.value));
    _description.value = '';
    _signatory.value = '';
  }


  render() {
    return(
      <div>
        <button onClick={this.getSavedAccounts}>View All Saved Accounts</button>
        <form onSubmit={this.createAccount}>
          <input ref="_description" placeholder=" Description"/>
          <select ref="_account_type">
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
          <input ref="_signatory" placeholder=" Signatory"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(CreateAccount);
