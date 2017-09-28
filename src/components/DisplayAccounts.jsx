import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account';

function DisplayAccounts(props) {
  console.log(props);
  return(
    <div>
      {props.accountList.map((account, index) =>
        <Account
          owner={account.signatory}
          type={account.account_type}
          description={account.description}
          accountNum={account.account_number}
          routingNum={account.routing_number}
          key={index}
        />
      )}
    </div>
  )
}

DisplayAccounts.propTypes = {
  accountList: PropTypes.array
}

export default DisplayAccounts;
