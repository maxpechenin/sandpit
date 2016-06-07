import React from 'react'

let Keyword = props => (
  <li>
    <a href="#">{props.keyword.title}</a>
  </li>
)

let Person = props => {
  let {
    name,
    handle,
    title,
    ex,
    email
  } = props.person;
  return (
    <li className="suggestion-item">
      <div className="suggestion-item_col1">
        <img src="/img/65x65textphoto.png" className="suggestion-item__photo" alt="" />
      </div>
      <div className="suggestion-item_col2">
        <h4 className="suggestion-item__name">{name}</h4>
        <div className="suggestion-item__handle"><a href="#">{handle}</a></div>
        <div className="suggestion-item__title-extension">
          <div>{title}</div>
          <div>ex: <a href="#">{ex}</a></div>
        </div>
        <div>
          <a href="#" className="suggestion-item__email" title="email">{email}</a>
        </div>
      </div>
    </li>
  )
}

let Document = props => {
  let {
    link,
    title,
    size,
    date
  } = props.document;
  return (
    <li className="document-item">
      <div className="document-item_col1">
        <a href={link} className="document-item_icon"></a>
      </div>
      <div className="document-item_col2">
        <a href="#" className="document-item_link">{title}</a>
        <div>{size}</div>
        <div>Date modified: {date}</div>
      </div>
    </li>
  )
}

class SearchResults extends React.Component {
    constructor() {
      super();
      this.state = {
        opened: false
      }
    }

    componentDidMount() {
      this.setState({opened: true})
    }

    render() {
        return (
          <div className={'auto-suggestion' + (this.state.opened && ' open') }>
            <div className="auto-suggestion_keyword">
              <h2>Contact</h2>
              <ul>
              </ul>
            </div>
            <div className="auto-suggestion_people">
              <h2>Matter</h2>
              <ul>
              </ul>
            </div>
            <div className="auto-suggestion_documents">
              <h2>Client</h2>
              <ul>
              </ul>
            </div>
          </div>
        )
    }
}


export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      query: ''
    }
  }
  render() {
    return (
      <div>
        <div className="header-search" id="header-search">
          <form className="quick-search-component" data-reactid=".0">
            <label for="header-search_input" className="element-invisible">Search</label>
            <input value={this.state.query}
              onChange={ e => this.setState({query: e.target.value}) }
              type="text"
              autocomplete="false"
              className="header-search__input" />
          </form>
        </div>
        {
          this.state.query.length >=3 &&
          <SearchResults />
        }
      </div>
    )
  }
}
