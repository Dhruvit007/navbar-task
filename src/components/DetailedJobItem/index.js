import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiShoppingBag} from 'react-icons/hi'
import {FiExternalLink} from 'react-icons/fi'
import Header from '../Header'
import SimilarJobItem from '../SimilarJobItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class DetailedJobItem extends Component {
  state = {apiStatus: apiStatusConstants.initial, jobDetailsData: {}}

  componentDidMount() {
    this.fetchSimilarJobsData()
  }

  fetchSimilarJobsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        jobDetails: data.job_details,
        similarJobs: data.similar_jobs,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        jobDetailsData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryJob = () => {
    this.fetchSimilarJobsData()
  }

  renderJobsDetailedSuccessView = () => {
    const {jobDetailsData} = this.state
    const {jobDetails, similarJobs} = jobDetailsData
    const lifeAtCompany = jobDetails.life_at_company

    console.log(lifeAtCompany)
    const {skills} = jobDetails
    return (
      <div className="detailed-item-master-container">
        <div className="each-job-item-bg-container detailed-job-container">
          <div className="first-row">
            <div>
              <img
                src={jobDetails.company_logo_url}
                alt="job details company logo"
                className="company-logo"
              />
            </div>
            <div className="each-item-designation-star-information">
              <h1 className="job-role">{jobDetails.title}</h1>
              <div className="start-rating">
                <AiFillStar className="star-icon" />
                <p className="rating">{jobDetails.rating}</p>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="location-internship-container">
              <div className="location-container">
                <GoLocation className="icon" />
                <p className="icon-info">{jobDetails.location}</p>
              </div>
              <div className="internship-container">
                <HiShoppingBag className="icon" />
                <p className="icon-info">{jobDetails.employment_type}</p>
              </div>
            </div>
            <p className="icon-info salary">{jobDetails.package_per_annum}</p>
          </div>
          <hr className="hr-line" />
          <div className="visit-link-container">
            <h1 className="description">Description</h1>
            <div className="external-link-container">
              <a className="url-style" href={jobDetails.company_website_url}>
                Visit
              </a>
              <FiExternalLink className="external-link-icon" />
            </div>
          </div>
          <div className="third-row">
            <p className="description">{jobDetails.job_description}</p>
          </div>
          <h1 className="skills-container-title">Skills</h1>
          <ul className="skills-container">
            {skills.map(eachSkill => (
              <li className="skill-item" key={eachSkill.name}>
                <img
                  src={eachSkill.image_url}
                  alt={eachSkill.name}
                  className="skill-image"
                />
                <p>{eachSkill.name}</p>
              </li>
            ))}
          </ul>
          <div className="about-company-life-main-container">
            <h1 className="company-life-heading">Life at Company</h1>
            <div className="company-life-container">
              <p className="about-company-life">{lifeAtCompany.description}</p>
              <img
                src={lifeAtCompany.image_url}
                alt="life at company"
                className="company-life-image"
              />
            </div>
          </div>
        </div>
        <h1 className="similar-jobs-heading">Similar Jobs</h1>
        <ul className="similar-jobs-detailed-container detailed-similar-job-container">
          {similarJobs.map(eachSimilarJob => (
            <SimilarJobItem
              key={eachSimilarJob.id}
              eachSimilarJobDetails={eachSimilarJob}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderJobsDetailedFailureView = () => (
    <>
      <div className="jobs-failure-view-container-detailed">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
          className="failure-image"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <button
          onClick={this.onRetryJob}
          className="retry-button"
          type="button"
        >
          Retry
        </button>
      </div>
    </>
  )

  renderInprogressView = () => (
    <>
      <div className="loader-container-job-detailed-view">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </>
  )

  renderJobsDetailedViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsDetailedSuccessView()
      case apiStatusConstants.failure:
        return this.renderJobsDetailedFailureView()
      case apiStatusConstants.inProgress:
        return this.renderInprogressView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="master-container-detailed-job-view">
          {this.renderJobsDetailedViews()}
        </div>
      </>
    )
  }
}
export default DetailedJobItem
