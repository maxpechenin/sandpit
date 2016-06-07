import React from 'react'
import Ajax from 'simple-ajax'
import SearchResults from './search-results'

export default class Form extends React.Component {
  constructor() {
    super();
    this.loadAndProcessData = this._loadAndProcessData.bind(this);
    this.url = '/search';
    this.threshold = 1;
    this.state = {
      data: [],
      query: ''
    }
  }

  componentDidUpdate(props, state) {
    if (this.state.query !== state.query)
      this._loadAndProcessData();
  }

  _loadAndProcessData() {
    let query = this.state.query;
    let request = new Ajax({
      url: this.url,
      method: 'GET',
      dataType: 'JSON',
      data: {q: this.state.query}
    });
    request.on('success', response => {
      if (query === this.state.query) {
        this.setState({data: JSON.parse(response.currentTarget.response).aggregations.suggestions.buckets});
      }
    })
    request.send();
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
        <SearchResults opened={ this.state.query.length >= this.threshold } data={this.state.data} />
      </div>
    )
  }
}
