import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types'


const News = (props) => {

  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 8,
  //   category: 'general',
  // }

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)

  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    let getUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    setLoading(true)
    setLoading(true)
    let data = await (await fetch(getUrl)).json();
    props.setProgress(50);
    setArticles(data.articles)
    setTotalResult(data.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capital(props.category)} - NewsMonkey`
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1)
    let getUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    setLoading(true)
    let data = await (await fetch(getUrl)).json();
    setArticles(articles.concat(data.articles))
    setTotalResult(data.totalResults)
    setLoading(false)
  };

  let nt = "Lorem ipsum dolor sit amet consectetur adipis";
  let nd = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, voluptates est. Necessitatibus aut sequi veritatis error neque beatae quidem quam eum";
  return (
    <>
      <h1 className="text-center" style={{ margin: '80px 0px' }}>NewsMonkey - Top {capital(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container ">
          <div className="row ">
            {articles.map((element, i) => {
              return <div className="col-md-4" key={i}>
                <NewsItem img={element.urlToImage} title={element.title ? element.title.slice(0, 40) : nt} desc={element.description ? element.description.slice(0.150) : nd} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div >
      </InfiniteScroll>
    </>
  )
}


export default News


