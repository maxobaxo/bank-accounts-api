import React from 'react';
import PropTypes from 'prop-types';

function Account(props) {

  console.log(props);
  return(
    <div>
      <ul>
        <h3>{props.owner} ({props.type})</h3>
        <li>{props.description}</li>
        <li>Account #: {props.accountNum}</li>
        <li>Routing #: {props.routingNum}</li>
      </ul>
    </div>
  )
}

Account.propTypes = {
  owner: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  accountNum: PropTypes.string,
  routingNum: PropTypes.string,
}

export default Account;
