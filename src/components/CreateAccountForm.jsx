import React from 'react';
import { postNewAccount } from './../actions';
import { connect } from 'react-redux';

class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.createAccount = this.createAccount.bind(this);
  }

  createAccount(event) {
    event.preventDefault();
    let { _account_type, _signatory, _description } = this.refs;
    const { dispatch } = this.props;

    dispatch(postNewAccount(_description.value, _account_type.value, "123456789", "322271627", _signatory.value));
  }


  render() {
    return(
      <div>
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
