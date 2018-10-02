import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login'
import Debits from './Components/Debits';
import Credits from './Components/Credits';


class App extends Component {

  state = {
    accountBalance: 999999,
    currentUser: {
      userName: 'Susan69',
      memberSince: '07/20/89'
    }
  }

  updateUser = (updatedUser) => {
    //TAKE IT
    const currentUser = {...this.state.currentUser}
    //CHANGE IT
    currentUser.userName = updatedUser.userName
    //PUT IT BACK
    this.setState({ currentUser })
  } 

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance}/>
    )

    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    )

    const LoginComponent = () => (
      <Login updateUser={this.updateUser}/>
    )

    const DebitsComponent = () => (
      <Debits />
    )

    const CreditsComponent = () => (
      <Credits />
    )

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent}/>
          <Route exact path='/userProfile' render={UserProfileComponent}/>
          <Route exact path='/login' render={LoginComponent}/>
          <Route exact path='/debits' render={DebitsComponent}/>
          <Route exact path='/credits' render={CreditsComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
