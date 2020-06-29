import React, { useContext } from 'react'
import {AlibabaContext} from '../context'

export default function FeachuredHotelFilter({hotels}) {
    const context = useContext(AlibabaContext)

    const {
        city,
        hadleFeachuredHotel
    } = context
        return (
<div className="feachuredList">
        <div id="feachured-btn" className="hotel-list__citys text-center">
                        <button className="hotel-list__city active-btn"
                        name="city"
                        value="istanbul"
                        onClick={hadleFeachuredHotel}
                        >
                            استانبول
                        </button>
                        <button className="hotel-list__city"
                        name="city"
                        value="dubai"
                        onClick={hadleFeachuredHotel}
                        >
                            دبی
                        </button>
                        <button className="hotel-list__city"
                        name="city"
                        value="paris"
                        onClick={hadleFeachuredHotel}
                        >
                            پاریس
                        </button>
                        <button className="hotel-list__city"
                        name="city"
                        value="ankara"
                        onClick={hadleFeachuredHotel}
                        >
                            آنکارا
                        </button>
                        <button className="hotel-list__city"
                        name="city"
                        value="baku"
                        onClick={hadleFeachuredHotel}
                        >
                            باکو
                        </button>
                        <button className="hotel-list__city"
                        name="city"
                        value="teflisi"
                        onClick={hadleFeachuredHotel}
                        >
                            تفلیس
                        </button>
                    </div>
        </div>
        )
}
