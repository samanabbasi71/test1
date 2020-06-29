import React from 'react'
import { Link } from 'react-router-dom'
import bazar from '../images/bazar.svg'
import alibabaFooterLogo from '../images/alibaba-footer-logo.svg'
import alibabaAppStore from '../images/alibaba-appstore.svg'
import googlePlay from '../images/googleplay.svg'
import iApps from '../images/iapps.svg'
import pwa from '../images/pwa.svg'
import etehadieh from '../images/etehadieh.png'
import rezayat from '../images/rezayat.png'
import enamad from '../images/e-namad.png'
import passengerright from '../images/passenger-right.svg'
import aira from '../images/aira.png'
import cao from '../images/cao.svg'

export default function Footer() {
    return (
        <section className="footer-container">
            <div className="footer">
                <div className="footer-col">
                    <h4 className="footer-title text-justify">
                    علی‌بابا 
                    </h4>
                    <ul className="footer-ul footer-about" >
                        <div className="footer-ul__col">
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                درباره ما
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                تماس با ما
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                چرا علی بابا
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                باشگاه مشتریان
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                قوانین و مقررات
                            </Link>
                        </li>
                        </div>
                        <div className="footer-ul__col">
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                راهنمای خرید
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                پرسش و پاسخ
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                مجله علی بابا
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                                فرصت های شغلی
                            </Link>
                        </li>
                        </div>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title text-justify">
                    اطلاعات تکمیلی 
                    </h4>
                    <ul className="footer-ul footer-information" >
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            بلیط چارتر 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            راهنمای خرید بلیط هواپیما(داخلی) 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            راهنمای خرید بلیط هواپیما(خارجی) 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            راهنمای خرید بلیط قطار 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            راهنمای خرید بلیط اتوبوس 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            راهنمای رزرو هتل خارجی 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            راهنمای استرداد بلیط 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            بلیط قطار 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            خرید بلیط هواپیما خارجی 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            اطلاعات فرودگا‌هی 
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link to="" className="footer-li__link">
                            شیوه‌نامه حقوق مسافر
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col__links">
                    <div className="footer-links">
                    <h4 className="footer-title text-justify">
                    اپلیکیشن علی بابا 
                    </h4>
                    <p className="footer-text text-justify footer-text__992">
                    با نصب اپلیکیشن علی‌بابا بلیط همه سفرها در جیب شماست. آسان‌ترین، کامل‌ترین و مطمئن‌ترین روش تهیه بلیط و هتل را با اپلیکیشن علی‌بابا تجربه کنید. 
                    </p>
                    <div className="footer-appstores">
                        <div className="app-icon"> 
                            <a href="https://cafebazaar.ir/app/ir.alibaba/?l=fa" className="app-link" >
                                <img src={bazar} alt="" className="app-icon__img"/>
                            </a>
                        </div>
                        <div className="app-icon"> 
                            <Link to="/app" className="app-link" >
                                <img src={alibabaAppStore} alt="" className="app-icon__img"/>
                            </Link>
                        </div>
                        <div className="app-icon"> 
                            <a href="https://play.google.com/store/apps/details?id=co.alibabatravels.play" className="app-link" >
                                <img src={googlePlay} alt="" className="app-icon__img"/>
                            </a>
                        </div>
                        {/* <div className="appstore-iapps app-icon"> 
                            <Link to="https://iapps.ir/app/%D8%B9%D9%84%DB%8C-%D8%A8%D8%A7%D8%A8%D8%A7/5baa92d5-ea35-47d7-902b-b8ac0a0c18de-87aaebe2-5343-45e3-a14a-cddc6e3c7374" className="iapps-icon" >
                                <img src={iApps} alt="" className="app-icon__img" />
                            </Link>
                        </div> */}
                        <div className="app-icon"> 
                            <a href="https://app.alibaba.ir/" className="app-link" >
                                <img src={pwa} alt="" className="app-icon__img"/>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="footer-namads">
                        <div >
                            <img src={alibabaFooterLogo} alt="" className="footer-alibaba__logo"/>
                        </div>
                        <p className="footer-text">
                        تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰
                        </p>
                        <div className="footer-namads__container">
                        <div className="namad"> 
                            <a href="https://ecunion.ir/verify/alibaba.ir?token=45162255b6952bb8af5b" className="namad-link" >
                                <img src={etehadieh} alt="" className="namad-img"/>
                            </a>
                        </div>
                        <div className="namad"> 
                            <a href="https://logo.samandehi.ir/Verify.aspx?id=33643&p=xlaoxlaogvkaaodsxlao" className="namad-link" >
                                <img src={rezayat} alt="" className="namad-img"/>
                            </a>
                        </div>
                        <div className="namad"> 
                            <a href="https://trustseal.enamad.ir/?id=8607&Code=MKrh33vhkzb6UNA2VDkk" className="namad-link" >
                                <img src={enamad} alt="" className="namad-img"/>
                            </a>
                        </div>
                        <div className="namad"> 
                            <a href="https://www.cao.ir/paxrights" className="namad-link" >
                                <img src={passengerright} alt="" className="namad-img"/>
                            </a>
                        </div>
                        <div className="namad"> 
                            <a href="www.aira.ir" className="namad-link" >
                                <img src={aira} alt="" className="namad-img"/>
                            </a>
                        </div>
                        <div className="namad"> 
                            <a href="https://www.cao.ir/home" className="namad-link" >
                                <img src={cao} alt="" className="namad-img"/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

