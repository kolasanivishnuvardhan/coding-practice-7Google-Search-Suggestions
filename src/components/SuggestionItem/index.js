import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  render() {
    const {eachItem, onClickArrow} = this.props
    const {suggestion} = eachItem
    const onSearchItem = () => {
      onClickArrow(suggestion)
    }
    return (
      <li className="li">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
          onClick={onSearchItem}
        />
      </li>
    )
  }
}

export default SuggestionItem
