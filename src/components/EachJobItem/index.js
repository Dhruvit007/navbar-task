import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiShoppingBag} from 'react-icons/hi'
import './index.css'

const EachJobItem = () => (
  <div className="each-job-item-bg-container">
    <div className="first-row">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png"
          alt="aaa"
          className="company-logo"
        />
      </div>
      <div className="each-item-designation-star-information">
        <p className="job-role">Devops Engineer</p>
        <div className="start-rating">
          <AiFillStar className="star-icon" />
          <p className="rating">4</p>
        </div>
      </div>
    </div>
    <div className="second-row">
      <div className="location-internship-container">
        <div className="location-container">
          <GoLocation className="icon" />
          <p className="icon-info">Delhi</p>
        </div>
        <div className="internship-container">
          <HiShoppingBag className="icon" />
          <p className="icon-info">Internship</p>
        </div>
      </div>
      <p className="icon-info salary">10LPA</p>
    </div>
    <hr className="hr-line" />
    <div className="third-row">
      <p className="description">Description</p>
      <p className="description">
        We are looking for a DevOps Engineer with a minimmum of 5 years of
        industry experiance , preferaly working in the financial IT comapny. The
        position in the team is focused on deleverying exceptional services to
        both BU and Dev partners to minimize/avoid any production outages. The
        role will focus on producrtion support
      </p>
    </div>
  </div>
)
export default EachJobItem
