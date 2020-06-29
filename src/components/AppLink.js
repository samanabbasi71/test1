import React from 'react'
import { Link } from 'react-router-dom'
import { GoDeviceMobile } from 'react-icons/go'
import applicationImage from '../images/alibabaApp.png'

export default function AppLink() {
    return (
        <div className="applink__container">
            <div className="applink-tags__container">
                <div className="applink-tag">
                    <h1 className="applink-tag__title">دانلود اپلیکیشن علی‌بابا </h1>
                    <p className="applink-tag__p">
آسان‌ترین راه خرید بلیط، هتل و تور </p>
                    <Link className="applink-link" to="/app" >
                        <button className="applink-button">
                        <div className="applink-button__tags">
                            <div className="applink-button__tags--logo">
                                <GoDeviceMobile />
                            </div>
                            <div className="applink-button__tags--text">
                                <p className="applink-button__tags--text1">دانلود اپلیکیشن از</p>
                                <p className="applink-button__tags--text2">alibaba.ir/<small>app</small></p>
                            </div>
                        </div>
                        </button>
                    </Link>
                    <p>
                    <small className="text-muted">دانلود اپلیکیشن‌های اندروید و iOS </small>
                    </p>
                </div>
                <div className="applink-img">
                    <img src={applicationImage} alt="appliction image"/>
                </div>
            </div>
        </div>
    )
}
