import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar-style">
          <p>Logo</p>
          <div className="nav-items">
            <a className="nav-link" href="page1">
              HOME(page1)
            </a>
            <a className="nav-link" href="page2">
              PRODUCT(page2)
            </a>
            <a className="nav-link" href="page3">
              CART(page3)
            </a>
          </div>
          <button type="button">LOGOUT</button>
        </div>
      </>
    )
  }
}

export default Navbar
