import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiShoppingBag} from 'react-icons/hi'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class DetailedJobItem extends Component {
  state = {apiStatus: apiStatusConstants.success}

  componentDidMount() {
    // this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
  }

  renderJobsDetailedSuccessView = () => {
    const b = 1 + 1
    return (
      <div className="each-job-item-bg-container detailed-job-container">
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
        <hr className="hr-line" />
        <div className="third-row">
          <h1 className="description">Description</h1>
          <p className="description">
            We are looking for a DevOps Engineer with a minimum of 5 years of
            industry experience, preferably working in the financial IT
            community. The position in the team is focused on delivering
            exceptional services to both BU and Dev
          </p>
        </div>
        <p className="skills-container-title">Skills</p>
        <ul className="skills-container">
          <li className="skill-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
              alt="ppp"
              className="skill-image"
            />
            <p>Docker</p>
          </li>
        </ul>
        <div className="about-company-life-main-container">
          <div className="company-life-container">
            <h1>Life at Company</h1>
            <p>
              Our core philosophy is people over process. Our culture has been
              instrumental to our success. It has helped us attract and retain
              stunning colleagues, making work here more satisfying.
              Entertainment, like friendship, is a fundamental human need, and
              it changes how we feel and gives us common ground. We want to
              entertain the world.
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
            alt="yyz"
            className="company-life-container"
          />
        </div>
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
          onClick={this.onRetryProfile}
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
