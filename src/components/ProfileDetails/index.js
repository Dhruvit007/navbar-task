import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class ProfileDetails extends Component {
  state = {apiStatus: apiStatusConstants.inProgress, profileData: {}}

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const profileApi = 'https://apis.ccbp.in/profile'
    const response = await fetch(profileApi, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        profileDetails: fetchedData.profile_details,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        profileData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProfileSuccessView = () => {
    const {profileData} = this.state
    const {profileDetails} = profileData
    return (
      <>
        <div className="profile-container">
          <img
            src={profileDetails.profile_image_url}
            alt="xxx"
            className="profile-photos"
          />
          <h1 className="person-name">{profileDetails.name}</h1>
          <p className="designation">{profileDetails.short_bio}</p>
        </div>
        <hr className="hr-line" />
      </>
    )
  }

  renderProfileFailureView = () => (
    <>
      <div className="profile-retry-button">
        <button className="retry-button" type="button">
          Retry
        </button>
      </div>
      <hr className="hr-line" />
    </>
  )

  renderInprogressView = () => (
    <>
      <div className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
      <hr className="hr-line" />
    </>
  )

  renderProfileViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileSuccessView()
      case apiStatusConstants.failure:
        return this.renderProfileFailureView()
      case apiStatusConstants.inProgress:
        return this.renderInprogressView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="filtered-group-search-input">
          <input
            type="search"
            placeholder="Search"
            className="filter-input-element"
          />
          <div className="filter-search-icon-container">
            <BsSearch className="search-icon-style" />
          </div>
        </div>
        <div className="profile-section-container">
          {this.renderProfileViews()}
        </div>
      </>
    )
  }
}

export default ProfileDetails
