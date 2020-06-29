import React from 'react'
import Hotel from './Hotel'

export default function FeachuredHotelList({hotels}) {
    return (
        <div className="hotel-list__singlehotels--container mx-auto">
            {
                hotels.map(item => {
                    return <Hotel key={item.id} hotel={item} />
                })
            }
        </div>
    )
}

