import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: 15,
        country: "in",
        category: "general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&sortBy=popularity&apiKey=${this.props.ApiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(75);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
        this.props.setProgress(100);
    }

    utility = async (pages) => {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&sortBy=popularity&apiKey=${this.props.ApiKey}&pageSize=${this.props.pageSize}&page=${pages}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), page: pages, totalResults: parsedData.totalResults });
    }

    fetchMoreData = () => {
        this.utility(this.state.page + 1);
    }

    capitalizeFirst = (title) => {
        return title.at(0).toUpperCase() + title.slice(1);
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>NewNews - Top {this.capitalizeFirst(this.props.category)} Headlines</h1>
                {
                    this.state.loading && <Spinner />
                }
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < Math.floor(100 / (this.props.pageSize)) * this.props.pageSize && this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-5">
                            {
                                this.state.articles.map((element) => {
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
}

export default News
