import React from 'react'
import {Link} from 'react-router-dom'

export default function HotelFilterBreadCrumb({hotels}) {
    const {
        cityFarsi
    } = hotels
    return (
            <div className="breadcrumb__container">
                <nav aria-label="breadcrumb " className="hotelpage-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/hotel" className="hotelpage-breadcrumb__link" >
                            رزرو هتل
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <span className="mr-2">هتل های </span>
                            <span>{cityFarsi}</span>
                        </li>
                    </ol>
                </nav>
            </div>
    )
}
