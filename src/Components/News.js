import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const componentMount = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&sortBy=popularity&apiKey=${props.ApiKey}&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(75);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `${capitalizeFirst(props.category)} - NewNews`;
        componentMount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const utility = async (pages) => {
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&sortBy=popularity&apiKey=${props.ApiKey}&pageSize=${props.pageSize}&page=${pages}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setPage(pages);
        setTotalResults(parsedData.totalResults);
    }

    const fetchMoreData = () => {
        utility(page + 1);
    }

    const capitalizeFirst = (title) => {
        return title.at(0).toUpperCase() + title.slice(1);
    }
    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '85px' }}>NewNews - Top {capitalizeFirst(props.category)} Headlines</h1>
            {
                loading && <Spinner />
            }
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < Math.floor(100 / (props.pageSize)) * props.pageSize && articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-5">
                        {
                            articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItems title={element.title} description={element.description} imageUrl={!element.urlToImage ? "https://t3.ftcdn.net/jpg/04/29/42/42/360_F_429424279_dokEFwnSoJeOKpqvV1ttXum8piESsF5L.jpg" : element.urlToImage} link={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    pageSize: 15,
    country: "in",
    category: "general"
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
}
export default News
