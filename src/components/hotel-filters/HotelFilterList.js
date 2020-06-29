import React from 'react'
import {useContext} from 'react'
import {AlibabaContext} from '../../context'
import HotelInFilter from './HotelInFilter'
import NotFound from '../../images/resultNotFound.svg'
export default function HotelFilterList({hotels}) {
    const context = useContext(AlibabaContext)
    const {
        handleReset
    } = context
    if (hotels.length === 0) {
            return (
                <div className="hotelsearch-empty text-center text-capitalize">
                    <div className="hotelsearch-empty-img">
                        <img src={NotFound} alt=""/>
                    </div>
                    <p className="my-3">متاسفانه برای جستجوی شما نتیجه ای یافت نشد </p>
                    <button className="hotelsearch-empty-btn" onClick={handleReset}>
                        لغو فیلترها
                    </button>
                </div>
            )
    }
    return (
        <div>
            {
                hotels.map(item => {
                    return <HotelInFilter key={item.id} hotel={item} />
                })
            }
        </div>
    )
}
