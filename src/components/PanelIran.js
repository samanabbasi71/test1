import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { BsToggles } from 'react-icons/bs'
import { MdCardGiftcard } from 'react-icons/md'

export default function PanelIran() {
    return (
        <form action="">
                <div className="panel-form__container">
                    <div className="radios">
                    <div className="radio ml-3">
                        <label className="radio-container">
                        <input type="radio" checked name="optradio"/>
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
                    <div className="search-form__container">
                    <div className="panel-input__container">
                        <div className="input-pair input-pair__switch">
                            <div className="panel-input__group input-one multitab-picker__one">
                            <div className="input-group">
                                <span className="panel-input__svg">
                                    <GoLocation />
                                </span>
                                <input type="text" value="مبدا" className="panel-input text-muted mr-2" disabled/>
                            </div>
                            <div className="toggle-button__container">
                                <BsToggles className="toggle-button" />
                            </div>
                            </div>
                            <div className="panel-input__group multitab-picker__two">
                            <div className="input-group">
                                <span className="panel-input__svg two ">
                                    <GoLocation />
                                </span>
                                <input type="text" value="مقصد" className="panel-input text-muted mr-2" disabled/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-date__container">
                        <div className="date-pair">
                            <div className="panel-date__group panel-date__one" >
                            <div className="date-group">
                                <span className="panel-date__svg">
                                    <MdCardGiftcard />
                                </span>
                                <input type="text" value="رفت" className="panel-date mr-2 text-muted" disabled/>
                            </div>
                            </div>
                            <div className="panel-date__group panel-date__two">
                            <div className="date-group">
                                <span className="panel-date__svg ">
                                    <MdCardGiftcard />
                                </span>
                                <input type="text" value="برگشت" className="panel-date mr-2 text-muted" disabled/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-passenger__container">
                        <div className="passenger">
                            <div className="panel-passenger">
                                <span className="panel-passenger__svg">
                                    <FaRegUser />
                                </span>
                                <span className="passenger-value text-muted"></span>
                                <input type="text" value="مسافر" className="panel-passenger__input text-muted" disabled/>
                            </div>
                        </div>
                        </div>
                        <div className="panel-search__container">
                        <button className="panel-search__button">
                            جستجو
                        </button>
                    </div>
                    </div>

                {/* </div> */}
            </div>
        </form>
    )
}
