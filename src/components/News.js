import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)
    const [isLoading, setLoading] = useState(true);
    const fetchData = async () => {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`);
        setPage(page + 1)
        let data = await res.json();
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults)
        setLoading(false)
    }
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        document.title = `React News - ${capitalize(props.category)}`
        fetchData()
    })

    return (
        <section className="min-h-screen pt-2 pl-2 pr-2 sm:pl-64 bg-gray-800">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold pb-3 pl-5 mt-3 border border-transparent border-b-yellow-400 text-gray-200">Top headlines - {capitalize(props.category)}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {articles.map((article) => {
                    return <NewsItem key={article.url} title={article.title} description={article.description} author={article.author} image={article.urlToImage} source={article.source.name} url={article.url} date={article.publishedAt} />
                })}
            </div>
            {isLoading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />} >
            </InfiniteScroll>
        </section>

    )
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
}
export default News