import React from 'react'
import './SpinnerStyle.css'

const Spinner = () => {
    return (
        <div className="text-center my-5">
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner