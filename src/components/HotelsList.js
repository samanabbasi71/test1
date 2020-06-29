import React, { Component } from 'react'
import FeachuredHotels from './FeachuredHotels'
export default class HotelsList extends Component {
    render() {
        return (
            <div className="hotel-list__container py-3">
                <div className="hotel-list">
                    <h2 className="hotel-list__title mb-3 text-center">رزرو هتل</h2>
                    <div className="flight-questions__title--container">
                    <h2 className="flight-questions__title text-center">هتل های خارجی </h2>
                    <span className="flight-questions__title--border mx-auto my-3"></span>
                    </div>
                        <FeachuredHotels />
                </div>
            </div>
            )
    }
}
