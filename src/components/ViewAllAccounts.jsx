import React from 'react';
import PropTypes from 'prop-types';
import { getAllAccounts } from './../actions/getAllAccounts';

function ViewAllAccounts(props) {

  return(
    <div>
    </div>
  )
}

ViewAllAccounts.propTypes = {
  accountList: PropTypes.array,
  getAccounts: PropTypes.func
}

export default ViewAllAccounts;
