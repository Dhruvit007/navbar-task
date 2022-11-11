import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ProfileDetails from '../ProfileDetails'
import FilterGroups from '../FilterGroups'
import JobItem from '../JobItem'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    employmentType: [],
    minimumPackage: 0,
    searchInput: '',
    searchResult: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchJobData()
  }

  fetchJobData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {employmentType, minimumPackage, searchInput} = this.state
    const strEmploymentType = employmentType.join()
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const searchApiUrl = `https://apis.ccbp.in/jobs?employment_type=${strEmploymentType}&minimum_package=${minimumPackage}&search=${searchInput}`
    const response = await fetch(searchApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.jobs.map(eachCompany => ({
        companyLogoUrl: eachCompany.company_logo_url,
        employmentType: eachCompany.employment_type,
        id: eachCompany.id,
        description: eachCompany.job_description,
        location: eachCompany.location,
        package: eachCompany.package_per_annum,
        rating: eachCompany.rating,
        title: eachCompany.title,
      }))
      this.setState({
        searchResult: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSalaryRange = range => {
    this.setState({minimumPackage: range}, this.fetchJobData)
  }

  onChangeSearchInput = text => {
    this.setState({searchInput: text})
  }

  onClickRetry = () => {
    this.fetchJobData()
  }

  onChangeEmployment = (type, checkStatus) => {
    console.log(type, checkStatus)
    const {employmentType} = this.state
    console.log(employmentType)
    if (checkStatus === true) {
      this.setState(
        {employmentType: [...employmentType, type]},
        this.fetchJobData,
      )
    } else if (checkStatus === false) {
      this.setState(
        {
          employmentType: employmentType.filter(eachData => eachData !== type),
        },
        this.fetchJobData,
      )
    }
  }

  renderJobsInprogressView = () => (
    <div className="loader-container-jobs">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobsFailureView = () => (
    <div className="jobs-failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button onClick={this.onClickRetry} type="button">
        Retry
      </button>
    </div>
  )

  renderJobsSuccessView = () => {
    const {searchResult, searchInput} = this.state
    if (searchResult.length === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
          />
          <h1>No Jobs Found</h1>
          <p>We could not find any jobs. Try other filters</p>
        </div>
      )
    }
    return (
      <JobItem
        searchResult={searchResult}
        searchInput={searchInput}
        onChangeSearchInput={this.onChangeSearchInput}
        onClickRetry={this.onClickRetry}
      />
    )
  }

  renderJobItemsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsSuccessView()
      case apiStatusConstants.failure:
        return this.renderJobsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderJobsInprogressView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <div className="job-details-container">
          <div className="filtered-group-container">
            <ProfileDetails
              onChangeSearchInput={this.onChangeSearchInput}
              searchInput={searchInput}
              onClickRetry={this.onClickRetry}
            />
            <FilterGroups
              employmentTypesList={employmentTypesList}
              salaryRangesList={salaryRangesList}
              onChangeSalaryRange={this.onChangeSalaryRange}
              onChangeEmployment={this.onChangeEmployment}
            />
          </div>
          <div className="job-items-details-container">
            {this.renderJobItemsView()}
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
