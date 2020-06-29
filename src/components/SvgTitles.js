import React from 'react'
import svgTitle1 from '../images/svg-title1.png'
import svgTitle2 from '../images/svg-title2.png'
import svgTitle3 from '../images/svg-title3.png'

export default function SvgTitles() {
    return (
        <div className="svg-title__container">
            <div className="svges">
            <div className="svg-title__item">
                <img src={svgTitle1} alt="" className="svg-title-img"/>
                <p className="svg-title__title" >پوشش ۱۰۰ درصدی پروازها و قطارها و اتوبوس‌ها </p>
                <p className="svg-title__p">
                کامل‌ترین سایت خرید بلیط
پروازهای داخلی، پروازهای خارجی، بلیط قطار و بلیط اتوبوس 
                </p>
            </div>
            <div className="svg-title__item svg-title__item--midle">
                <img src={svgTitle2} alt="" className="svg-title-img"/>
                <p className="svg-title__title" >دسترسی آسان از طریق وبسایت، موبایل و اپلیکیشن</p>
                <p className="svg-title__p">
                ساده‌ترین و سریع‌ترین راه
برای جستجو، خرید و استرداد بلیط 
                </p>
            </div>
            <div className="svg-title__item">
                <img src={svgTitle3} alt="" className="svg-title-img"/>
                <p className="svg-title__title" >قیمت رقابتی همراه با تضمین بلیط‌های چارتر </p>
                <p className="svg-title__p">
                معتبرترین و به‌صرفه‌ترین سامانه
فروش بلیط و چارتر با پشتیبانی ۲۴ ساعته 
                </p>
            </div>
            </div>
        </div>
    )
}
