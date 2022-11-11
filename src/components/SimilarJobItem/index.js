import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiShoppingBag} from 'react-icons/hi'
import './index.css'

const SimilarJobItem = props => {
  const {eachSimilarJobDetails} = props
  return (
    <div className="each-job-item-bg-container detailed-similar-job-container-item">
      <div className="first-row">
        <div>
          <img
            src={eachSimilarJobDetails.company_logo_url}
            alt="similar job company logo"
            className="company-logo"
          />
        </div>
        <div className="each-item-designation-star-information">
          <h1 className="job-role">{eachSimilarJobDetails.title}</h1>
          <div className="start-rating">
            <AiFillStar className="star-icon" />
            <p className="rating">{eachSimilarJobDetails.rating}</p>
          </div>
        </div>
      </div>
      <div className="third-row">
        <h1 className="description">Description</h1>
        <p className="description detailed-description">
          {eachSimilarJobDetails.job_description}
        </p>
      </div>
      <div className="second-row">
        <div className="location-internship-container">
          <div className="location-container">
            <GoLocation className="icon" />
            <p className="icon-info">{eachSimilarJobDetails.location}</p>
          </div>
          <div className="internship-container">
            <HiShoppingBag className="icon" />
            <p className="icon-info">{eachSimilarJobDetails.employment_type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarJobItem
