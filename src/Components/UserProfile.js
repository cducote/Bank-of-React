import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserProfile extends Component {
  render() {
    return (
      <div>
         <img width='200' src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>

        <div><Link to='/'>Home</Link></div>
        <div><Link to='/login'>Login</Link></div>
      </div>
    )
  }
}