import React from 'react'

const Newsitems = (props)=> { 

  let {title, description, imageurl, newsurl, author, date} = props;
    return (
        <div className="card my-4" style={{height: "33rem"}}>
          <img src={!imageurl?"https://s.yimg.com/os/creatr-uploaded-images/2022-10/e5e11df0-41c2-11ed-a7dd-fe2f03bd0a5e":imageurl} style={{height: "13rem"}} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"undefined author":author} on {new Date(date).toUTCString()} </small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">Readmore</a>
          </div>
        </div> 
    )
  }
export default Newsitems