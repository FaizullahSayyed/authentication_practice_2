import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showFailureMessage: false}

  onChangeUsername = event => this.setState({username: event.target.value})

  getUsernameField = () => {
    const {username} = this.state

    return (
      <div className="label-input-box-container">
        <label htmlFor="usernameInput" className="label">
          Username
        </label>
        <input
          type="text"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
          id="usernameInput"
          placeholder="Username"
        />
      </div>
    )
  }

  onChangePassword = event => this.setState({password: event.target.value})

  getPasswordField = () => {
    const {password} = this.state

    return (
      <div className="label-input-box-container">
        <label htmlFor="passwordInput" className="label">
          Password
        </label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
          id="passwordInput"
          placeholder="Password"
        />
      </div>
    )
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = message => {
    this.setState({
      showFailureMessage: true,
      failureMessage: message,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.onFailure(data.error_msg)
    }
    console.log(data)
  }

  render() {
    const {showFailureMessage, failureMessage} = this.state

    return (
      <div className="bg-container">
        <div className="website-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <div className="form-container">
          <form onSubmit={this.onSubmitForm} className="form">
            <div className="input-container">{this.getUsernameField()}</div>
            <div className="input-container">{this.getPasswordField()}</div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Login
              </button>
            </div>
          </form>
          {showFailureMessage && (
            <p className="error-message">*{failureMessage}</p>
          )}
        </div>
      </div>
    )
  }
}

export default LoginForm
