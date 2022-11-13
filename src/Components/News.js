import React,{useState, useEffect} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  
  const [articles, setarticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  
  
  const capitalizedfirstletter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pageSize}&page=${page}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
    document.title = `${capitalizedfirstletter(props.category)} _NewsMonkey`
    // eslint-disable-next-line
  }, [])

  const fetchMoreData =  async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pageSize}&page=${page+1}`
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }


    return (
      <>
        <h1 className="text-center" style={{marginTop: '80px'}}> <strong style={{color: "blue"}}>News Monkey!</strong> Top {capitalizedfirstletter(props.category)} Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>} >
            
            <div className="container">
              <div className="row">
                {articles.map((element,index)=>{
                  return <div className="col-md-4" key={index}>
                              <Newsitems title = {element.title?element.title.slice(0,71):""} 
                                description = {element.description?element.description.slice(0,95):""} 
                                imageurl = {element.urlToImage} newsurl={element.url}
                                author = {element.author} 
                                date = {element.publishedAt}/>

                          </div>
              })}
              </div> 
            </div>
        </InfiniteScroll>

      </>  
    )
}

News.defaultProps = {
  country: 'us',
  category: 'general',
  pageSize: 9,
  page:1,
}
News.prototype = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  page: PropTypes.number,
}
 
export default News;