import {AiFillHome} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onLogoutClick = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <div>
        <Link className="nav-link" to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-logo-image"
          />
        </Link>
      </div>
      <div className="nav-items-large">
        <Link className="nav-link" to="/">
          <p className="nav-item-lg-home">Home</p>
        </Link>
        <Link className="nav-link" to="/jobs">
          <p>Jobs</p>
        </Link>
      </div>
      <div className="btn-container-lg">
        <button onClick={onLogoutClick} className="logout-btn-lg" type="button">
          Logout
        </button>
      </div>
      <ul className="nav-items-small">
        <Link className="nav-link" to="/">
          <li className="list-item-header">
            <AiFillHome className="nav-item-sm" />
          </li>
        </Link>
        <Link className="nav-link" to="/jobs">
          <li className="list-item-header">
            <BsFillBagFill className="nav-item-sm" />
          </li>
        </Link>
        <li onClick={onLogoutClick} className="list-item-header">
          <FiLogOut className="nav-item-sm" />
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)
