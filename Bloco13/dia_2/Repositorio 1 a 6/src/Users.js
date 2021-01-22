import React from 'react';
/* import { link } from 'react-router-dom'; */

const Users = ({ greetingMessage = 'Hi There Good Morning' }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
  </div>
);

export default Users;