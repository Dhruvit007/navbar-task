import {Component} from 'react'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class JobItem extends Component {
  renderJobsSuccessView = () => {
    const a = 1 + 1
    return <h1>Dhruvit</h1>
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
    return <>{this.renderJobItemsView()}</>
  }
}
export default JobItem
