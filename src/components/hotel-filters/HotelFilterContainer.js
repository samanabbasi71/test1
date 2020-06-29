import React from 'react'
import {WithHotelConsumer} from '../../context'
import HotelSearchPanel from './HotelSearchPanel'
import HotelFilterBreadCrumb from './HotelFilterBreadCrumb'
import HotelsInMap from './HotelsInMap'
import HotelFilterList from './HotelFilterList'
import HotelFilterFilters from './HotelFilterFilters'

function HotelFilterContainer({hotels}) {
    return (
        <div className="hotelfilterspage">
            <div className="hotelfilterpanel">
            <div className="hotelfilterpanel__wrapper">
            <HotelSearchPanel hotels={hotels} />
            </div>
            </div>
            <div className="hotelfilter__container">
            <div className="hotelfilter">
            <div className="hotelfilter-filters">
                {/* <HotelsInMap /> */}
                <HotelFilterFilters hotels={hotels} />
            </div>
            <div className="hotelfilter-hotels">
                {/* <HotelFilterBreadCrumb hotels={hotels} /> */}
                <HotelFilterList hotels={hotels}  />
            </div>
            </div>
            </div>
        </div>
    )
}

export default WithHotelConsumer(HotelFilterContainer)
