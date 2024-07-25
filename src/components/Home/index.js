import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <div className="content-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
              alt="clothes that get you noticed"
              className="content-image"
            />
          </div>
          <p className="content-paragraph">
            Fashion is part of the daily air and it does not quite help that it
            change all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are.So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <div className="home-button-container">
            <button type="button" className="home-button">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
