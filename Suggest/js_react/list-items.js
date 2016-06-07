import React from 'react'

let Keyword = props => (
  <li>
    <a href="#" dangerouslySetInnerHTML={{__html: props.keyword.keyword[0]}} />
  </li>
)

let Person = props => {
  let {
    fullname,
    url,
    jobtitle,
    userid,
    email
  } = props.person;
  return (
    <li className="suggestion-item">
      <div className="suggestion-item_col1">
        <img src="/img/65x65textphoto.png" className="suggestion-item__photo" alt="" />
      </div>
      <div className="suggestion-item_col2">
        <h4 className="suggestion-item__name">{fullname[0]}</h4>
        <div className="suggestion-item__handle"><a href="#">{url[0]}</a></div>
        <div className="suggestion-item__title-extension">
          <div dangerouslySetInnerHTML={{__html: jobtitle[0]}} />
          <div>ex: <a href="#">{userid[0]}</a></div>
        </div>
        <div>
          <a href="#" className="suggestion-item__email" title="email">{email[0]}</a>
        </div>
      </div>
    </li>
  )
}

let Document = props => {
  let {
    url,
    title
  } = props.document;
  return (
    <li className="document-item">
      <a href={url[0]} className="document-item_link" dangerouslySetInnerHTML={{__html: title[0]}} />
    </li>
  )
}

export {Keyword, Person, Document}