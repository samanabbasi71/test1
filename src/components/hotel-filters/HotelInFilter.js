import React from 'react'
import {Link} from 'react-router-dom'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import DefaultImg from '../../images/hotels/test/1.jpg'
import PopularityFunction from '../PopularityFunction'
// import PropTypes from 'prop-types'

export default function HotelInFilter({hotel}) {
    const {
        images,
        popularity,
        hotelRate,
        price,
        shortName,
        name,
        slug,
        url,
        sona,
        defectivePerson,
        torkishBath,
        ziafat
    } = hotel


    return (
        <article className="hotelinfilter__container ">
            <Link to={`/hotel/${url}/${slug}`} className="hotelinfilter-link" target="_blank">
            <div className="hotelinfilter-img__container">
                <img src={images[0] || DefaultImg} alt="hotel img" className="hotelinfilter-card-img"/>
            </div>
            <div className="hotelinfilter-card-body">
                <div className="hotelinfilter-title">
                    <h6 className="text-right">{shortName || name}</h6>
                    <ul className="hotelfilter-popularity align-items-center">
                    <li className="hotelfilter-badge text-right">
                        <span className="badge-number">
                            {popularity}
                        </span>
                        <PopularityFunction popularity={popularity} />
                    </li>
                    <li>
                    <div className="hotel-starrate">
                    <Rater rating={hotelRate} total={5} interactive={false} />
                    </div>
                    </li>
                    </ul>
                </div>
                <div className="hotelinfilter-card-text">
                    <div className="hotelinfilter-card-text-container text-right">
                        <p className="text-muted mb-1 mx-1">شروع قیمت برای یک شب:</p>
                        <p className="text-primary my-0 ml-2">{price} <span> ریال</span></p>
                    </div>
                        <button className="card-btn btn btn-primary hotelinfilter-card-btn">
                        مشاهده و رزرو
                        </button>
                </div>
            </div>
            </Link>
        </article>
    )
}
