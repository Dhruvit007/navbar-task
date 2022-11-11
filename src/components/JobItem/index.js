import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'
import EachJobItem from '../EachJobItem'
import './index.css'

class JobItem extends Component {
  onChangeInput = event => {
    const {onChangeSearchInput} = this.props
    onChangeSearchInput(event.target.value)
  }

  onSearchBtnPress = () => {
    const {onClickRetry} = this.props
    onClickRetry()
  }

  render() {
    const {searchResult, searchInput} = this.props
    return (
      <>
        <div className="filtered-group-search-input-job-item">
          <input
            type="search"
            placeholder="Search"
            className="filter-input-element-job-item"
            value={searchInput}
            onChange={this.onChangeInput}
          />
          <div className="filter-search-icon-container-job-item">
            <button
              onClick={this.onSearchBtnPress}
              type="button"
              //   testid="searchButton"
            >
              <BsSearch className="search-icon-style-job-item" />
            </button>
          </div>
        </div>

        {searchResult.map(eachJobData => (
          <EachJobItem key={eachJobData.id} eachJobData={eachJobData} />
        ))}
      </>
    )
  }
}
export default JobItem
