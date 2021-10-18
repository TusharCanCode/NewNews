import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, link } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems