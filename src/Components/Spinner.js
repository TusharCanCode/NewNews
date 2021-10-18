import React, { Component } from 'react'
import './SpinnerStyle.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-5">
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}
