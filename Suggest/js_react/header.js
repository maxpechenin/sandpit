import React from 'react'

let Header = props => (
  <header className="header">
    <div className="layout-max">
      <div className="layout-header">
        <div className="layout-header__main">
          <a href="" rel="home" className="header__logo" title="Intranet Homepage">
            <img src="img/intranet-logo.svg" alt="" className="header__logo-image" />
          </a>
          { props.children }
        </div>
      </div>
    </div>
  </header>
)

export default Header;