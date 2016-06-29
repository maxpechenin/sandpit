import React from 'react'

class Header extends React.Component {
  constructor() {
    super();
    this._handleKeydown = this._handleKeydown.bind(this);
    this._subscribeFunction = this._subscribeFunction.bind(this);
    this.subscribedFunctions = [];
  }

  getChildContext() {
    return {
      subscribedKeydown: this._subscribeFunction
    };
  }

  _handleKeydown(e) {
    this.subscribedFunctions.forEach(func => func(e));
  }

  _subscribeFunction(func) {
    this.subscribedFunctions.push(func);
  }

  render() {
    return (
      <header className="header" onKeyDown={this._handleKeydown}>
        <div className="layout-max">
          <div className="layout-header">
            <div className="layout-header__main">
              <a href="" rel="home" className="header__logo" title="Intranet Homepage">
                <img src="img/intranet-logo.svg" alt="" className="header__logo-image" />
              </a>
              { this.props.children }
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.childContextTypes = {
  subscribedKeydown: React.PropTypes.func
};

export default Header;