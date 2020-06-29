import React from 'react'
import LoadinGif from '../images/Ellipsis.gif'

export default function Loading() {
    return (
        <div className="loading  text-center text-capitalize mt-3">
            <h4 className="loading-text">hotels data loading</h4>
            <img src={LoadinGif} alt=""/>
        </div>
    )
}
