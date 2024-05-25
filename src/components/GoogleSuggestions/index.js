import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {suggestionsList: this.props.suggestionsList, searchInput: ''}

  onChangeSearchInput = event => {
    const suggestion = event.target.value
    const filtereditemList = this.props.suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(suggestion.toLowerCase()),
    )

    this.setState({suggestionsList: filtereditemList, searchInput: suggestion})
  }

  onArrowBtn = suggestion => {
    const searchInput = suggestion.toLowerCase()
    const filtereditemList = this.props.suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )
    
    this.setState({suggestionsList:filtereditemList,searchInput:suggestion})
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    console.log(suggestionsList)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <div className="search-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul>
            {suggestionsList.map(item => (
              <SuggestionItem
                eachItem={item}
                key={item.id}
                onClickArrow={this.onArrowBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
