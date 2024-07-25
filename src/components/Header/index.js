import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="website-logo-arrow-container">
      <div className="website-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="home-website-logo"
        />
      </div>
      <div className="arrow-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="arrow-image"
        />
      </div>
    </div>
    <ul className="nav-container">
      <li className="list-item">
        <p className="nav-list-text">Home</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav home"
          className="nav-image"
        />
      </li>
      <li className="list-item">
        <p className="nav-list-text">Products</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-image"
        />
      </li>
      <li className="list-item">
        <p className="nav-list-text">Cart</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-image"
        />
      </li>
    </ul>
  </div>
)
export default Header
