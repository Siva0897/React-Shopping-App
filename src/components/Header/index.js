import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <button className="logout-btn-mini" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-img"
        />
      </button>
    </div>
    <ul className="mini-nav-list-container">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-image"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-image"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav-cart"
          className="nav-image"
        />
      </li>
    </ul>
    <ul className="lg-nav-list-container">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <li>
        <button className="lg-logout-btn" type="button">
          Logout
        </button>
      </li>
    </ul>
  </div>
)

export default Header
