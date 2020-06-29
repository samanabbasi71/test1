import React, { Component } from 'react'
import {MdContentCopy} from 'react-icons/md'
import { FaWhatsapp, FaTelegramPlane} from 'react-icons/fa'
import {BsChevronDown} from 'react-icons/bs'

export default class HotelPageReservation extends Component {
    render() {
        return (
            <div className="hotelpage-reservation">
                <div className="hotelpage-reservation__top">
                {/* date input */}
                <div className="hotelpage-reservation__date">
                <div className="hotelpage-reservation-date--btn text-right">
                    <div className="hotelpage-reservation-date__income">
                        <div className="hotelpage-reservation-date__income">
                            <p className="hotelpage-reservation-date__p">تاریخ ورود</p>
                            <p className="grey">
                                انتخاب کنید
                                <span>
                                    <BsChevronDown className="hotelpage-reservation__icon" />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="line-grey"></div>
                <div className="hotelpage-reservation-date--btn text-right">
                    <div className="hotelpage-reservation-date__outcome">
                        <div className="hotelpage-reservation-date__outcome">
                            <p className="hotelpage-reservation-date__p">تاریخ خروج</p>
                            <p className="grey">
                                انتخاب کنید
                                <span>
                                    <BsChevronDown className="hotelpage-reservation__icon"/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                {/* end of date input */}                
                {/* passengers input */}
                <div className="hotelpage-reservation__passenger text-right">
                    <p className="grey">مسافران</p>
                    <div className="hotelpage-reservation__passenger--flex">
                    <div className="hotelpage-reservation__passenger--inputs">
                        <p className="hotelpage-reservation__passenger-people"> 2 بزرگسال </p>
                        <p> , </p>
                        <p className="hotelpage-reservation__passenger-room"> 1 اتاق </p>
                    </div>
                    <BsChevronDown className="hotelpage-reservation__icon"/>
                    </div>
                </div>
                {/* end of passengers input */}
                {/* notice */}
                <p className="text-center mb-4">
                برای مشاهده قیمت‌ها، تاریخ ورود و خروج خود را انتخاب کنید 
                </p>
                {/* end of notice */}
                {/* show available rooms */}
                <button className="btn btn-primary btn-block py-2">
                    مشاهده ی اتاق های موجود
                </button>
                {/* end of show available rooms */}
                </div>
                <div className="hotelpage-reservation__bottom my-2">
                    <p className="text-right">
                    اشتراک‌گذاری این هتل
                    </p>
                    <div className="hotelpage-reservation__share text-muted">
                        <div className="hotelpage-reservation__share--copy">
                        <MdContentCopy className="hotelpage-reservation__icon"/>
                        <span className="copy-tooltiptext">کپی لینک این هتل</span>
                        </div>
                        <div className="hotelpage-reservation__share--telegram">
                        <FaTelegramPlane className="hotelpage-reservation__icon"/>
                        <span className="telegram-tooltiptext">اشتراک با تلگرام</span>
                        </div>
                        <div className="hotelpage-reservation__share--whatsapp">
                        <FaWhatsapp className="hotelpage-reservation__icon"/>
                        <span className="whatsapp-tooltiptext ">اشتراک با واتساپ</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
