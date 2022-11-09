import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onFormSubmit = event => {
    event.preventDefault()
    this.validateUserDetails()
  }

  validateUserDetails = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', fetchedData.jwt_token, {expires: 15})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = fetchedData.error_msg
      this.setState({showErrorMsg: true, errorMsg})
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <form onSubmit={this.onFormSubmit} className="contain-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              placeholder="Username"
              className="input-element"
              id="username"
              type="text"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              placeholder="Password"
              className="input-element"
              id="password"
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="login-btn-container">
            <button className="login-btn" type="submit">
              Login
            </button>
            {showErrorMsg && <p className="error-message">*{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default Login
