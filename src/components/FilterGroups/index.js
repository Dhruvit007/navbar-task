import {Component} from 'react'
import './index.css'

class FilterGroups extends Component {
  render() {
    const {employmentTypesList, salaryRangesList} = this.props
    return (
      <>
        <p className="range-heading">Type of Employment</p>
        <ul className="employment-type-container">
          {employmentTypesList.map(eachTypeEmployment => (
            <li className="range-list-item">
              <input type="checkbox" />
              <label>{eachTypeEmployment.label}</label>
            </li>
          ))}
        </ul>
        <hr className="hr-line" />
        <p className="range-heading">Salary Range</p>
        <ul className="employment-type-container">
          {salaryRangesList.map(eachRange => (
            <li className="range-list-item">
              <input type="checkbox" />
              <label>{eachRange.label}</label>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default FilterGroups
