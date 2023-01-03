// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorText: ''}

  onSuccessfulLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onUsernameChange = event => this.setState({username: event.target.value})

  onPasswordChange = event => this.setState({password: event.target.value})

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessfulLogin()
    } else {
      this.setState({errorText: `*${data.error_msg}`})
    }
  }

  render() {
    const {username, password, errorText} = this.state
    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-small"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.onFormSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-large"
          />
          <div>
            <label htmlFor="userName" className="label-style">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              placeholder="Username"
              className="input-style"
              id="userName"
              onChange={this.onUsernameChange}
              value={username}
            />
            <label htmlFor="password" className="label-style">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="input-style"
              id="password"
              onChange={this.onPasswordChange}
              value={password}
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          <p className="error-text-style">{errorText}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
