import {Component} from 'react'
import Loader from 'react-loader-spinner'
import EachJobItem from '../EachJobItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class JobItem extends Component {
  state = {apiStatus: apiStatusConstants.success}

  renderJobsSuccessView = () => <EachJobItem />

  renderJobsInprogressView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

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
    return <>{this.renderJobItemsView()}</>
  }
}
export default JobItem
