import React from 'react'

function NewsItems(props) {
    let { title, description, imageUrl, link, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <span className="badge rounded-pill bg-danger" style={{ zIndex: '2', position: 'absolute', display: 'flex', right: 0, top: -8 }}>
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

export default NewsItems
