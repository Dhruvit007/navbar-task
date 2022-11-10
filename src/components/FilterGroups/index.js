import {Component} from 'react'
import './index.css'

class FilterGroups extends Component {
  render() {
    const {
      employmentTypesList,
      salaryRangesList,
      onChangeSalaryRange,
      onChangeEmployment,
    } = this.props

    return (
      <>
        <h1 className="range-heading">Type of Employment</h1>
        <ul className="employment-type-container">
          {employmentTypesList.map(eachTypeEmployment => {
            const {employmentTypeId} = eachTypeEmployment

            const employmentSelect = event => {
              onChangeEmployment(employmentTypeId, event.target.checked)
            }

            return (
              <li
                key={eachTypeEmployment.employmentTypeId}
                className="range-list-item"
              >
                <input
                  type="checkbox"
                  value={eachTypeEmployment.label}
                  onChange={employmentSelect}
                  id={eachTypeEmployment.label}
                />
                <label htmlFor={eachTypeEmployment.label}>
                  {eachTypeEmployment.label}
                </label>
              </li>
            )
          })}
        </ul>
        <hr className="hr-line" />
        <h1 className="range-heading">Salary Range</h1>
        <ul className="employment-type-container">
          {salaryRangesList.map(eachRange => {
            const {salaryRangeId} = eachRange
            const rangeChange = () => onChangeSalaryRange(salaryRangeId)
            return (
              <li className="range-list-item" key={eachRange.salaryRangeId}>
                <input
                  value={eachRange.salaryRangeId}
                  type="radio"
                  name="salary-range"
                  onChange={rangeChange}
                  id={eachRange.label}
                />
                <label htmlFor={eachRange.label}>{eachRange.label}</label>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default FilterGroups
