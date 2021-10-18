import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 20,
            totalResults: 0
        }
    }

    async componentDidMount() {
        this.utility(this.state.page);
    }

    gotoNext = async () => {
        this.utility(this.state.page + 1);
    }

    gotoPrev = async () => {
        this.utility(this.state.page - 1);
    }

    utility = async (pages) => {
        let url = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=popularity&apiKey=6942cb0e3e1e4749bcb44dda958837f9&pageSize=${this.state.pageSize}&page=${pages}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: pages, totalResults: parsedData.totalResults });
    }

    render() {
        return (
            <div className="container my-3">
                <h1 style={{ textAlign: 'center' }}>NewNews - Top Headlines</h1>
                <div className="row my-5">
                    {
                        this.state.articles.map((element) => {
                            return (<div className="col-md-4" key={element.url}><NewsItems title={element.title} description={element.description} imageUrl={!element.urlToImage ? "https://t3.ftcdn.net/jpg/04/29/42/42/360_F_429424279_dokEFwnSoJeOKpqvV1ttXum8piESsF5L.jpg" : element.urlToImage} link={element.url} /></div>);
                        })
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.gotoPrev}>&larr; Prev</button>
                    <button disabled={(this.state.page + 1) * this.state.pageSize > 100 || Math.ceil(this.state.totalResults / this.state.pageSize) < this.state.page + 1} type="button" className="btn btn-dark" onClick={this.gotoNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
