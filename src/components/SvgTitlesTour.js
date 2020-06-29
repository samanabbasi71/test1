import React from 'react'
import svgTitle1 from '../images/svg-title4.svg'
import svgTitle2 from '../images/svg-title5.svg'
import svgTitle3 from '../images/svg-title6.svg'

export default function SvgTitles() {
    return (
        <div className="svg-title__container">
            <div className="svges">
            <div className="svg-title__item">
                <img src={svgTitle1} alt="" className="svg-title-img svg-title-img__tour"/>
                <p className="svg-title__title" >مشاوره و پشتیبانی تخصصی رایگان </p>
                <p className="svg-title__p">
                مشاوره قبل و حین سفر توسط سفریار اختصاصی
                </p>
            </div>
            <div className="svg-title__item svg-title__item--midle">
                <img src={svgTitle2} alt="" className="svg-title-img svg-title-img__tour"/>
                <p className="svg-title__title" >قیمت رقابتی تورهای داخلی و خارجی</p>
                <p className="svg-title__p">
                قیمت‌های شفاف بدون پرداخت هزینه‌های جانبی
                </p>
            </div>
            <div className="svg-title__item">
                <img src={svgTitle3} alt="" className="svg-title-img svg-title-img__tour"/>
                <p className="svg-title__title" >تنوع تورهای داخلی و خارجی </p>
                <p className="svg-title__p">
                شخصی سازی انواع تور برای مسافران
                </p>
            </div>
            </div>
        </div>
    )
}
