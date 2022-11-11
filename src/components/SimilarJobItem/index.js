import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiShoppingBag} from 'react-icons/hi'
import './index.css'

const SimilarJobItem = props => {
  const {eachSimilarJobDetails} = props
  console.log(eachSimilarJobDetails)
  return (
    <div className="each-job-item-bg-container detailed-similar-job-container-item">
      <div className="first-row">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
            alt="company logo"
            className="company-logo"
          />
        </div>
        <div className="each-item-designation-star-information">
          <h1 className="job-role">Frontend Engineer</h1>
          <div className="start-rating">
            <AiFillStar className="star-icon" />
            <p className="rating">4</p>
          </div>
        </div>
      </div>
      <div className="third-row">
        <h1 className="description">Description</h1>
        <p className="description">
          We are looking for a DevOps Engineer with a minimum of 5 years of
          industry experience, preferably working in the financial IT community.
          The position in the team is focused on delivering exceptional services
          to both BU and Dev
        </p>
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
        <p className="icon-info salary">10 LPA</p>
      </div>
    </div>
  )
}

export default SimilarJobItem
