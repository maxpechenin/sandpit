import React from 'react'
import Ajax from 'simple-ajax'
import SearchResults from './search-results'

let getJsonWithQuery = function(query) {
  return { "aggs": { "suggestions": { "terms": { "field": "_type" }, "aggs": { "view": { "top_hits": { "size": 5, "_source": ["title","description","modified","published","url","fullname","email","phone","jobtitle","imageurl"], "highlight": { "require_field_match": false, "fields": { "keyword": {"no_match_size": 50}, "title": {"no_match_size": 50}, "modified": {"no_match_size": 50}, "url": {"no_match_size": 50}, "fullname": {"no_match_size": 50}, "email": {"no_match_size": 50}, "userid": {"no_match_size": 50}, "phone": {"no_match_size": 50}, "jobtitle": {"no_match_size": 50}, "imageurl": {"no_match_size": 50} } } } } } } }, "query": { "query_string": { "query": query, "default_field": "_all", "default_operator": "and" } }, "size": 0 }
}

export default class Form extends React.Component {
  constructor() {
    super();
    this._loadAndProcessData = this._loadAndProcessData.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
    this.urls = {
      all: '/search/dcom/_search',
      people: '/search/dcom/_search',
      documents: '/search/dcom/_search',
      keywords: '/search/dcom/_search',
    };
    this.types = ['people', 'documents', 'keywords'];
    this.threshold = 3;
    this.state = {
      data: [],
      query: ''
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this._handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeydown);
  }

  componentDidUpdate(props, state) {
    if (this.state.query !== state.query && this.state.query.length >= this.threshold)
      this._loadAndProcessData('all');
  }

  _loadAndProcessData(type) {
    console.log(type);
    let query = this.state.query;
    let request = new Ajax({
      url: this.urls[type],
      method: 'POST',
      contentType: 'application/json',
      dataType: 'JSON',
      data: JSON.stringify(getJsonWithQuery(this.state.query))
    });
    request.on('success', response => {
      if (query === this.state.query) {
        var buckets = JSON.parse(response.currentTarget.response).aggregations.suggestions.buckets.filter(bucket => bucket.key === type || type === 'all');
        var data = this.types.reduce( (array, currentType) => {
          var bucket = buckets.find(bucket => bucket.key === currentType) || type !== 'all' && this.state.data.find(bucket => bucket.key === currentType);
          return bucket ? [...array, bucket] : array;
        }, []);
        this.setState({data});
      }
    })
    request.send();
  }

  _handleKeydown(e) {
    if (e.keyCode === 27) {
      this.setState({query: '', data: []});
    }
  }

  render() {
    return (
      <div>
        <div className="header-search" id="header-search">
          <form className="quick-search-component" onSubmit={ e => { e.preventDefault(); this._loadAndProcessData('all'); } } >
            <label for="header-search_input" className="element-invisible">Search</label>
            <input value={this.state.query}
              onChange={ e => this.setState({query: e.target.value}) }
              type="text"
              autocomplete="false"
              className="header-search__input" />
            <input type="submit" className="header-search__icon" />
          </form>
        </div>
        <SearchResults
          opened={ this.state.data.length > 0 || this.state.query.length >= this.threshold }
          data={this.state.data}
          loadMore={this._loadAndProcessData}
          />
      </div>
    )
  }
}

Form.contextTypes = {
  subscribedKeydown: React.PropTypes.func
};