import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class Login extends Component {

  state = {
    user: {
      userName: ''
    },
    redirect: false
  }

  handleChange = (event) => {
    //TAKE IT
    const user = {...this.state.user}
    //CHANGE IT
    user[event.target.name] = event.target.value
    //PUT IT BACK
    this.setState({ user })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateUser(this.state.user)
    this.setState({ redirect: true })
  }

  render() {
    return (
      
      <div>
        <img width='200' src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>

        {this.state.redirect ?
        <Redirect to={'/userProfile'}/> :
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
        }
        <div><Link to='/'>Back</Link></div>
      </div>
    )
  }
}
