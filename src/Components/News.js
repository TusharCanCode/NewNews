import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=bitcoin&sortBy=popularity&apiKey=6942cb0e3e1e4749bcb44dda958837f9";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
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
            </div>
        )
    }
}

export default News
