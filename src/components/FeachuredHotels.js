import React from 'react'
import {WithHotelConsumer} from '../context'
import Loading from './Loading'
import FeachuredHotelList from './FeachuredHotelList'
import FeachuredHotelFilter from './FeachuredHotelFilter'

function FeachuredHotels ({context}) {
    const {
        loading,
        hotels,
        sortedHotels
    } = context

    if (loading) {
        return <Loading />
    } 
    return (
        <React.Fragment>
            <FeachuredHotelFilter hotels={hotels} />
            <FeachuredHotelList hotels={sortedHotels} />
        </React.Fragment>
    )
}

export default WithHotelConsumer(FeachuredHotels)