import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default function UserAll() {
  const [users, setUsers] = useState([])

  function getAllUser() {
    return axios.get('http://localhost:4000/user', {
      headers: {
        //'X-Requested-With': 'XMLHttpRequest',
        accept: 'application/json'
      }
    }).then(
      (users) => setUsers(users.data),
      (users) => console.log(users)
    )
  }

  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <Fragment>
      {(users.length > 0) && users.map((user, k) => (<p key={`${k}`}>{user.name}</p>))}
      {(users.length === 0) && (<p>tidak ada data</p>)}
    </Fragment>
  )
}
