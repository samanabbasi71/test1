import React from 'react'
import {useContext} from 'react'
import {AlibabaContext} from '../../context'
import { FaRegUser } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { MdCardGiftcard } from 'react-icons/md'
import Ellipsis from '../../images/Ellipsis45.gif'
// get all unique values
// const getUnique = (items, value) => {
//     return [...new Set(items.map(item => item[value]))]
// }

export default function HotelSearchPanel() {
    const context = useContext(AlibabaContext)

    const {
        loading,
        hotels,
        handleChange,
        city
    } = context
    // extras uniqye
    // let cities = getUnique(hotels, 'city')
    // cities = [...cities]
    // cities = cities.map((item, index) => {
    //     return (
    //         <option className="filter-li" key={index} value={item} id="city" name="city"
    //         onClick={handleChange}>
    //             {item}
    //         </option>
    //     )
    // })
        return (
            <form class="hotelpanel-filterpage-lg" >
                    <div className="radios">
                    <div className="radio ml-3">
                        <label className="radio-container">
                        <input type="radio" checked name="optradio" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="radio-text mr-2">
                            یک طرفه
                        </label>
                    </div>
                    <div className="radio">
                        <label className="radio-container">
                        <input type="radio" checked name="optradio"/>
                        <span className="checkmark"></span>
                        </label>
                        <label className="radio-text mr-2">
                            رفت و برگشت
                        </label>
                    </div>
                    </div>
                    <div className="hotelsearchpanel">
                    <div className="hotelsearchpanel-city__container">
                                <span className="panel-input__svg">
                                    <GoLocation />
                                </span>
                                {/* <div class="form-group">
                                    <select class="form-control" id="city" name="city">
                                        {cities}
                                    </select>
                                </div> */}
                                <input type="text" value="" placeholder="جستوجوی مقصد یا هتل داخلی یا خارجی"
                                className="hotelsearchpanel-input text-muted"/>
                    </div>
                    <div className="hotelsearchpanel-date__container ">
                            <div className="hotelsearchpanel-date hotelsearchpanel-date--one">
                                <span className="panel-date__svg">
                                    <MdCardGiftcard />
                                </span>
                                <input type="text" value="" placeholder="تاریخ رفت"
                                className="hotelsearchpanel-input-disabled text-muted"
                                disabled/>
                            </div>
                            <div className="hotelsearchpanel-date hotelsearchpanel-date--two">
                                <span className="panel-date__svg ">
                                    <MdCardGiftcard />
                                </span>
                                <input type="text" value="" placeholder="تاریخ برگشت"
                                className="hotelsearchpanel-input-disabled text-muted"
                                disabled/>
                            </div>
                    </div>
                    <div className="hotelsearchpanel-passenger__container">
                        <div className="hotelsearchpanel-passenger">
                                <span className="panel-passenger__svg">
                                    <FaRegUser />
                                </span>
                                <span className="passenger-value mx-2 text-muted">2</span>
                                <input type="text" value="" placeholder="تعداد مسافران"
                                className="hotelsearchpanel-input-disabled text-muted"
                                disabled/>
                        </div>
                    </div>
                    <div className="hotelsearchpanel-search__container">
                        <button className="hotelsearchpanel-search">
                            <img src={Ellipsis} alt="loading-gif"
                            className={loading ? "loading-gif" : "loading-gif-hide" }/>
                            <p className={loading ? "loading-text-hide" : "loading-text" }>
                                جستجو
                            </p>
                        </button>
                    </div>
                    </div>
        </form>
        )
    }
