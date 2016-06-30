import React from 'react'
import {
  Keyword,
  Person,
  Document
} from './list-items'

let threshold = 2;

let SearchResults = props => {
  let keywords = props.data.find(item => item.key === 'keywords');
  let people = props.data.find(item => item.key === 'people');
  let documents = props.data.find(item => item.key === 'documents');
  return (
    <div className={'auto-suggestion' + (props.opened ? ' open' : '') }>
      <div className="auto-suggestion_keyword">
        <h2>Contact</h2>
        <ul>
        {
          keywords && keywords.view.hits.hits.map(item => <Keyword keyword={item.highlight} key={item._id} />)
        }
        </ul>
        {
          keywords && keywords.view.hits.hits.length >= threshold &&
          <div onClick={(e) => props.loadMore('keywords')} className="suggestion-load_more">Load more</div>
        }
      </div>
      <div className="auto-suggestion_people">
        <h2>Matter</h2>
        <ul>
        {
          people && people.view.hits.hits.map(item => <Person person={item.highlight} key={item._id}/>)
        }
        </ul>
        {
          people && people.view.hits.hits.length >= threshold &&
          <div onClick={(e) => props.loadMore('people')} className="suggestion-load_more">Load more</div>
        }
      </div>
      <div className="auto-suggestion_documents">
        <h2>Client</h2>
        <ul>
        {
          documents && documents.view.hits.hits.map(item => <Document document={item.highlight} key={item._id}/>)
        }
        </ul>
        {
          documents && documents.view.hits.hits.length >= threshold &&
          <div onClick={(e) => props.loadMore('documents')} className="suggestion-load_more">Load more</div>
        }
      </div>
    </div>
  )
}

export default SearchResults;