import React from 'react'
import {Link} from 'react-router-dom'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import DefaultImg from '../images/hotels/test/1.jpg'
import PropTypes from 'prop-types'

export default function Hotel({hotel}) {
    const {
        images,
        popularity,
        hotelRate,
        price,
        shortName,
        name,
        slug,
        url
    } = hotel
    return (
        <article className="singleHotel-container card">
            <Link to={`/hotel/${url}/${slug}`} className="singleHotel-card-btn-link" target="_blank">
            <div className="singleHotel-img-container">
                <img src={images[0] || DefaultImg} alt="hotel img" className="card-img-top singleHotel-card-img"/>
            </div>
            <div className="card-body singleHotel-card-body">
                <div className="card-title singleHotel-card-title pb-2">
                    <h6>{shortName || name}</h6>
                    <div className="hotel-starrate">
                    <Rater rating={hotelRate} total={5} interactive={false} />
                    </div>
                </div>
                <div className="card-text singleHotel-card-text">
                    <div className="singleHotel-card-text-container text-right">
                        <p className="text-muted mb-1">شروع قیمت از</p>
                        <p className="text-primary my-0 ml-3">{price} <span> ریال</span></p>
                    </div>
                        <button className="card-btn btn btn-primary singleHotel-card-btn">
                        مشاهده و رزرو
                        </button>
                </div>
            </div>
            </Link>
        </article>
    )
}


Hotel.prototype = {
    hotel:PropTypes.shape({
        name:PropTypes.string.isRequired,
        shortName:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        popularity:PropTypes.number.isRequired,
        hotelRate:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired
    })
}