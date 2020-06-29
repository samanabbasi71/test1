import React, { Component } from 'react'
import {AlibabaContext} from '../context'
import Error from './Error'
import {Link} from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Gallery from '../components/Gallery'
import HotelPageReservation from '../components/hotelpage/HotelPageReservation'
import HotelCarousel from '../components/HotelCarousel'
import { FaHotel, FaHandHoldingHeart , FaTaxi, FaHandHoldingUsd , FaRegHandshake, FaPrayingHands, FaTv} from 'react-icons/fa'
import {IoIosBed} from 'react-icons/io'
import {GoLocation} from 'react-icons/go'
import {BsStar, BsThreeDots} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {MdRestaurantMenu , MdLocationOn} from 'react-icons/md'
import {GrSwim} from 'react-icons/gr'
import {GiSugarCane} from 'react-icons/gi'
import {RiStore2Line} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import reserveRoom from '../images/reserveRoom.svg'
import Alert from '../components/Alert'



export class HotelPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = AlibabaContext
    render() {
        const {getHotel} = this.context
        const hotel = getHotel(this.state.slug)
        if(!hotel) {
            return <Error />
        }
        const {
            shortName,
            name,
            url,
            hotelRate,
            adress,
            farsiName,
            map,
            lat,
            long,
            city,
            alibabaOffer,
            price,
            region,
            popularity,
            type,
            about,
            images,
            cityFarsi,
            extras,
            importantNotics
        } = hotel
        const {all, servicess, EdibleAndDrinkable, sportsExtras,
        transportServicess, customerServicess, publicArea,
        familyEntertainment, roomCleaningServicess, BusinessMeeting, 
        stores, others
        } = extras
        return (
            <React.Fragment>
            <Alert title="برای دیدن فیلتر پیج از  مسیر زیر هتل ها را انتخاب کنید..." />
            <div className="hotelpage__container">
                <div className="hotelpage-top mx-auto">
                {/* breadcrumb */}
                <div className="breadcrumb__container">
                <nav aria-label="breadcrumb " className="hotelpage-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/hotel" className="hotelpage-breadcrumb__link" >
                            رزرو هتل
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to={`/${url}/hotel-filters`} className="hotelpage-breadcrumb__link" >
                            <span className="mr-2">هتل های </span>
                            <span>{cityFarsi}</span>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <span className="mr-2">{name}</span>
                        </li>
                    </ol>
                </nav>
                </div>
                {/* end of breadcrumb */}

                {/* hotel top in sm and mediom */}
                <div className="hotelpage-top-sm">
                <HotelCarousel images={images} />
                <div className="hotelpage-top__info-sm ">
                    <div className="hotelpage-title--sm ">
                    <h7 className="hotelpage-title__text--sm mr-2">{name}</h7>
                    <div className="hotel-starrate">
                    <Rater rating={hotelRate} total={5} interactive={false} />
                    </div>
                    </div>
                    <p className="hotelpage-adress">
                        {adress}
                    </p>
                </div>
                </div>
                {/* end of hotel carousel */}
                <div className="hotelpage-top__info">
                    <div className="hotelpage-title d-flex flex-start">
                    <h4 className="hotelpage-title__text ml-2">{name}</h4>
                    <div className="hotel-starrate">
                    <Rater rating={hotelRate} total={5} interactive={false} />
                    </div>
                    </div>
                    <div className="hotelpage-addres d-flex align-items-center text-muted text-right mt-0 mb-2">
                        {adress}
                        <a href="#hotelpage-location" className="adress-anchor mr-3">
                        <h7 className="">
                            <span className="ml-1">
                                <MdLocationOn />
                            </span>
                            مشاهده هتل روی نقشه
                        </h7>
                        </a>
                    </div>
                </div>
                </div>
                <div className="hotelpage mx-auto">
                <div className="hotelpage-center">
                    {/* gallery */}
                    <div className="gallery">
                    <Gallery images={images} />
                    </div>
                    {/* end of gallery */}
                    {/* sticky location anchor */}
                    <div className="sticky-anchors">
                        <a href="#hotelpage-about" className="sticky-anchors__item">
                        <p className="sticky-anchor">
                            درباره هتل
                        </p>
                        </a>
                        <a href="#hotelpage-rooms" className="sticky-anchors__item">
                        <p className="sticky-anchor">
                            اتاق های موجود
                        </p>
                        </a>
                        <a href="#hotelpage-location" className="sticky-anchors__item">
                        <p className="sticky-anchor">
                            موقعیت مکانی
                        </p>
                        </a>
                        <a href="#hotelpage-extras" className="sticky-anchors__item">
                        <p className="sticky-anchor">
                            امکانات هتل
                        </p>
                        </a>
                    </div>
                    {/* end of sticky anchor */}
                    {/* about hotel section */}
                    <section id="hotelpage-about" className="hotelpage-about__section my-5">
                        <div className="hotelpage-title mb-3">
                            <div className="bb-orange d-flex">
                            <FaHotel className="hotelpage-icon" />
                            <h4 className="hotelpage-name">
                                {name}
                            </h4>
                            </div>
                        </div>
                        <p className="hotelpage-about__p text-justify">
                            {about}
                        </p>
                    </section>
                    {/* end of about hotel section */}
                    {/* available room reserve section */}
                    <section id="hotelpage-rooms" className="hotelpage-rooms__section my-5">
                        <div className="hotelpage-title mb-3">
                            <div className="bb-orange d-flex">
                            <IoIosBed className="hotelpage-icon" />
                            <h4 className="hotelpage-name">
                            اتاق های قابل رزرو 
                            </h4>
                            </div>
                        </div>
                        <div className="reservation-sm">
                            <div className="reserv-date d-flex">
                                <div className="reserve-date text-right">
                                    <p className="text-muted">
                                        ورود
                                    </p>
                                    <p >
                                        انتخاب کنید
                                    </p>
                                </div>
                                <div className="reserve-date text-right">
                                    <p className="text-muted">
                                        خروج
                                    </p>
                                    <p>
                                        انتخاب کنید
                                    </p>
                                </div>
                            </div>
                            <button className="reserv-btn-sm">
                                انتخاب تاریخ
                            </button>
                        </div>
                        <div className="hotelpage-rooms__img--container my-5">
                        <img src={reserveRoom} alt="room not found" className="hotelpage-rooms__img d-flex"/>
                        <p className="text-orange text-center mt-2">
                        برای مشاهده اتاق ها تاریخ را انتخاب کنید.
                        </p>
                        </div>
                    </section>
                    {/* end of rooms section */}                    
                    {/* available room reserve section */}
                    <section id="hotelpage-location" className="hotelpage-location__section my-5">
                        <div className="hotelpage-title mb-3">
                            <div className="bb-orange d-flex">
                            <GoLocation className="hotelpage-icon" />
                            <h4 className="hotelpage-name">
                            موقعیت مکانی  
                            </h4>
                            </div>
                        </div>
                        <div className="hotelpage-location__container my-5">                    
                        {/* google map */}
                    {/* <div className="google-map__container">
                        <Map google={this.props.google} zoom={17}
                            initialCenter={{
                            lat: lat || defaultLat ,
                            lng: long || defaultLong
                                    }}
                                        >
                                <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                </InfoWindow>
                        </Map>
                    </div> */}
                    {/* end of google map */}
                        </div>
                    <p className="text-right hotelpage-about__p">
                    فاصله‌ها بر اساس خط صاف در نقشه برآورد شده‌اند. فاصله واقعی ممکن است متفاوت باشد.
                    </p>
                    </section>
                    {/* end of rooms section */}      
                    {/* about hotel section */}
                    <section id="hotelpage-extras" className="hotelpage-extras__section">
                        <div className="hotelpage-title mb-3">
                            <div className="bb-orange d-flex">
                            <BsStar className="hotelpage-icon" />
                            <h4 className="hotelpage-name">
                            امکانات هتل 
                            </h4>
                            </div>
                        </div>
                        <div className="hotelpage-extras-lists">
                        {/* کلی */}
                        <div className="hotelpage-extras__container">
                            <AiOutlineInfoCircle className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                کلی 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        all.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of کلی */}       
                        {/* خدمات دهی هتل  */}
                        <div className="hotelpage-extras__container">
                            <FaHandHoldingHeart className="hotelpage-icon"/>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                خدمات دهی هتل 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        servicess.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of خدمات دهی هتل  */}
                        {/* خوردنی و اشامیدنی   */}
                        <div className="hotelpage-extras__container">
                            <MdRestaurantMenu className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                خوردنی و اشامیدنی 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        EdibleAndDrinkable.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of خوردنی و اشامیدنی  */}
                        {/* end of استخر و سالن های ورزشی و بدنسازی  */}
                        <div className="hotelpage-extras__container">
                            <GrSwim className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                استخر و سالن های ورزشی و بدنسازی 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        sportsExtras.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of استخر و سالن های ورزشی و بدنسازی  */}
                        {/* سرویس حمل و نقل  */}
                        <div className="hotelpage-extras__container">
                            <FaTaxi className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                سرویس حمل و نقل  
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        transportServicess.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of سرویس حمل و نقل  */}       
                        {/* خدمات دهی به مشتری  */}
                        <div className="hotelpage-extras__container">
                            <FaHandHoldingUsd className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                خدمات دهی به مشتری
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        customerServicess.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of خدمات دهی به مشتری  */}
                        {/* فضای عمومی    */}
                        <div className="hotelpage-extras__container">
                            <GiSugarCane className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                فضای عمومی 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        publicArea.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of فضای عمومی   */}
                        {/* end of خدمات نظافت اتاق   */}
                        <div className="hotelpage-extras__container">
                            <FaPrayingHands className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                خدمات نظافت اتاق  
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        roomCleaningServicess.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of خدمات نظافت اتاق   */} 
                        {/* سرگرمی های خانوادگی  */}
                        <div className="hotelpage-extras__container">
                            <FaTv className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                سرگرمی های خانوادگی 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        familyEntertainment.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of سرگرمی های خانوادگی  */}       
                        {/* امکانات هماهنگی جلسات تجاری  */}
                        <div className="hotelpage-extras__container">
                            <FaRegHandshake className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                امکانات هماهنگی جلسات تجاری
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        BusinessMeeting.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of امکانات هماهنگی جلسات تجاری  */}
                        {/* فروشگاه ها    */}
                        <div className="hotelpage-extras__container">
                            <RiStore2Line className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                فروشگاه ها 
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        stores.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of فروشگاه ها   */}
                        {/* end of متفرقه    */}
                        <div className="hotelpage-extras__container">
                            <BsThreeDots className="hotelpage-icon"/>
                            <div className="hotelpage-extras__line"></div>
                            <div className="hotelpage-extras__info">
                                <h6 className="hotelpage-extras__info--name text-black text-right">
                                متفرقه   
                                </h6>
                                <div className="hotelpage-extras-ul">
                                <ul className="hotelpage-extras__info--services">
                                    {
                                        others.map((item, index) => {
                                        return <li className="hotelpage-extras__info--list hotelpage-about__p" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        {/* end of متفرقه    */}
                        </div>
                    </section>
                    {/* end of about hotel section */}
                    {/* important information */}
                    <section className="hotelpage-important">
                    <div className="hotelpage-title mb-3">
                            <div className="bb-orange d-flex">
                            <FiMessageSquare className="hotelpage-icon" />
                            <h4 className="hotelpage-name">
                            نکات ضروری 
                            </h4>
                            </div>
                        </div>
                        <div className="hotelpage-important__ps">
                                {
                                    importantNotics.map((item, index) => {
                                        return <p className="hotelpage-important__p hotelpage-about__p"
                                    key={index} >{item}</p>
                                    })
                                }
                            </div>
                    </section>
                    {/* end of important information */}
                </div>
                <HotelPageReservation />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAkfoWshUfC2sfJZM1GV4FuDvxTvHKxyQM")
  })(HotelPage)