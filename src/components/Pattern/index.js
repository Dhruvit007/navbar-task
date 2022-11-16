import {Component} from 'react'
import './index.css'

/* eslint-disable no-plusplus */

class Pattern extends Component {
  state = {userInput: ''}

  onInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onPrintClick = () => {
    const {userInput} = this.state
    const n = parseInt(userInput)
    for (let i = 0; i <= n; i++) {
      let pattern = ''
      for (let j = 1; j <= n - i; j++) {
        pattern = `${j} ${pattern}`
      }
      const leftSpaces = `${'\xa0 '.repeat(i)}`
      console.log(leftSpaces + pattern)
    }
  }

  render() {
    const {userInput} = this.state

    return (
      <div className="container">
        <div className="contain-container">
          <input
            type="text"
            placeholder="Enter number to print pattern in console"
            onChange={this.onInputChange}
            value={userInput}
          />
          <button onClick={this.onPrintClick} type="button">
            PRINT THE PATTERN
          </button>
        </div>
      </div>
    )
  }
}

export default Pattern
