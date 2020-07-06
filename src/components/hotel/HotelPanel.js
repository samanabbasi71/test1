import React from 'react'
import {useContext} from 'react'
import {AlibabaContext} from '../../context'
import { FaRegUser } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { MdCardGiftcard } from 'react-icons/md'
import Ellipsis from '../../images/Ellipsis45.gif'
import {Link} from 'react-router-dom'
// get all unique values

export default function HotelSearchPanel() {
    const context = useContext(AlibabaContext)

    const {
        city,
        handleChange,
        handleRefresh,
        filterCity
    } = context
    return(
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
                                <select id="filterCity" name="filterCity" 
                                className="hotelsearchpanel-select text-muted"
                                onChange={handleChange}
                                required>
                                <option value="" disabled selected>جستوجوی مقصد یا هتل داخلی یا خارجی</option>
                                <option className="hotelsearchpanel-option" value='tr-istanbul'>
                                    Istanbul
                                </option>
                                <option className="hotelsearchpanel-option" value='fr-paris'>
                                    Paris
                                </option>
                                <option className="hotelsearchpanel-option" value='ae-dubai'>
                                    Dubai
                                </option>
                                <option className="hotelsearchpanel-option" value='tr-ankara'>
                                    Ankara
                                </option>
                                <option className="hotelsearchpanel-option" value='az-baku'>
                                    Baku
                                </option>
                                <option className="hotelsearchpanel-option" value='ge-tiflis'>
                                    Teflisi
                                </option>
                                </select>
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
                        <Link to={`/${filterCity}/hotel-filters`} >
                        <button className="hotelsearchpanel-search">
                            <img src={Ellipsis} alt="loading-gif"
                            className="loading-gif-hide" />
                            <p className="loading-text" >
                                جستجو
                            </p>
                        </button> 
                        </Link>
                    </div>
                    </div>
        </form>
        )
    }
