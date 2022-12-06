import React from 'react'

const NewsItem = (props) => {
  let { title, desc, img, newsUrl, author, date, source } = props

  return (
    <div className='card' style={{ height: "35rem" }}>
      <a href={newsUrl}><span className="badge rounded-pill bg-danger" style={{ position: 'absolute', right: 0 }}>{source}</span></a>
      <img src={img ? img : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"} style={{ height: "15rem" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
