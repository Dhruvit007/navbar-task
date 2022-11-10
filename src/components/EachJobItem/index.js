import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiShoppingBag} from 'react-icons/hi'
import './index.css'

const EachJobItem = props => {
  const {eachJobData} = props
  return (
    <div className="each-job-item-bg-container">
      <div className="first-row">
        <div>
          <img
            src={eachJobData.companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
        </div>
        <div className="each-item-designation-star-information">
          <h1 className="job-role">{eachJobData.title}</h1>
          <div className="start-rating">
            <AiFillStar className="star-icon" />
            <p className="rating">{eachJobData.rating}</p>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="location-internship-container">
          <div className="location-container">
            <GoLocation className="icon" />
            <p className="icon-info">{eachJobData.location}</p>
          </div>
          <div className="internship-container">
            <HiShoppingBag className="icon" />
            <p className="icon-info">{eachJobData.employmentType}</p>
          </div>
        </div>
        <p className="icon-info salary">{eachJobData.package}</p>
      </div>
      <hr className="hr-line" />
      <div className="third-row">
        <h1 className="description">Description</h1>
        <p className="description">{eachJobData.description}</p>
      </div>
    </div>
  )
}
export default EachJobItem
