import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, link, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '2' }}>
                        {!source ? 'Unknown' : source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
