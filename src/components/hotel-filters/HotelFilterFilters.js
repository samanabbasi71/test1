import React, { Component } from 'react'
import {AlibabaContext} from '../../context'
import Rater from 'react-rater'
import {BsChevronDown} from 'react-icons/bs'

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default class HotelFilterFilters extends Component {
    constructor(props){
        super(props)
        this.state = {
            ShowPrice: true,
            ShowRate: true,
            ShowRegion: false,
            ShowPop: true,
            ShowExtras: true,
        }
    }
    static contextType = AlibabaContext

    handleShowPrice = () => {
        this.setState({
            ShowPrice: !this.state.ShowPrice
        })
    }
    handleShowRate = () => {
        this.setState({
            ShowRate: !this.state.ShowRate
        })
    }
    handleShowRegion = () => {
        this.setState({
            ShowRegion: !this.state.ShowRegion
        })
    }
    handleShowPop = () => {
        this.setState({
            ShowPop: !this.state.ShowPop
        })
    }
    handleShowExtras = () => {
        this.setState({
            ShowExtras: !this.state.ShowExtras
        })
    }
    render(){
        const {
            sona,
            region,
            handleChange,
            hotels,
            price,
            maxPrice,
            minPrice,
            defectivePerson,
            ziafat,
            torkishBath,
            rate5,
            rate4,
            rate3,
            rate2,
            rate1,
            rateNun,
            hotelRate,
            pop9,
            pop8,
            pop7,
            pop6,
            pop5,
        } = this.context
    // extras uniqye
    let regions = getUnique(hotels, 'region')
    regions = ['all', ...regions]
    regions = regions.map((item, index) => {
        return (
            <li className="filter-li" key={index} value={item}>
            <label class="checkbox-container" htmlfor={region[index]} >
            <input type="checkbox" checked={item} id='region' name='region'
                onClick={handleChange} />
                <span class="checkbox-checkmark"></span>
                {item}
            </label>
            </li>
        )
    })

    return (
        <section className="filter-section">
            <form className="filter-form">
                {/* filter title */}
                <div className="filter">
                    <p className="filter-title">
                    فیلتر نتایج جستجو 
                    </p>
                    <div className="filter-title-found d-flex justify-content-between align-items-baseline">
                        <p>
                        نمایش 1 هتل از 
                        </p>
                        {/* <button className="hotelsearch-empty-btn" onClick={handleReset}>
                        لغو فیلترها
                        </button> */}
                    </div>
                </div>
                {/* filter name search */}
                {/* <div className="filter">
                    <p className="filter-title">
                    فیلتر نتایج جستجو 
                    </p>
                    <div className="filter-search">
                        <input type="text" className="filter-search-input form-control"
                        placeholder="جستجو براساس نام هتل"/>
                    </div>
                </div> */}
                {/* filter price range */}
                <div className="filter form-group">
                    <strong onClick={this.handleShowPrice}
                    className="filter-title d-flex justify-content-between">
                            <p className="filter-title-text">
                    رنج قیمتی هتل <small> (قیمت به ریال)</small><span className="mr-3">{price}</span>
                            </p>
                            <BsChevronDown />
                    </strong>
                    <div className={this.state.ShowPrice ? "filter-search" : "filter-search-hide"}>
                    <input type="range" name="price" id="price"
                    min={minPrice} max={maxPrice} 
                    onChange={handleChange} className="form-control"
                    />
                    </div>

                </div>
                {/* filter rate */}
                <div className="filter">
                    <strong className="filter-title d-flex justify-content-between"
                    onClick={this.handleShowRate}>
                            <p className="filter-title-text">
                            درجه هتل
                            </p>
                            <BsChevronDown />
                    </strong>
                    <div
                    className={this.state.ShowRate?"filter-search" : "filter-search-hide" }>
                        <ul className="filter-ul">
                            <li className="filter-li align-items-center">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={rate5} id="rate5" name="rate5"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                <div className="filter-star-rate ">
                                <div className="hotel-starrate">
                                    <Rater rating={5} total={5} interactive={false} />
                                </div>
                                </div>
                            </label>
                            </li>
                            <li className="filter-li align-items-center">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={rate4} id="rate4" name="rate4"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                <div className="filter-star-rate ">
                                <div className="hotel-starrate">
                                    <Rater rating={4} total={5} interactive={false} />
                                </div>
                                </div>
                            </label>
                            </li>
                            <li className="filter-li align-items-center">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={rate3} id="rate3" name="rate3"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                <div className="filter-star-rate ">
                                <div className="hotel-starrate">
                                    <Rater rating={3} total={5} interactive={false} />
                                </div>
                                </div>
                            </label>
                            </li>
                            <li className="filter-li align-items-center">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={rate2} id="rate2" name="rate2"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                <div className="filter-star-rate ">
                                <div className="hotel-starrate">
                                    <Rater rating={2} total={5} interactive={false} />
                                </div>
                                </div>
                            </label>
                            </li>
                            <li className="filter-li align-items-center">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={rate1} id="rate1" name="rate1"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                <div className="filter-star-rate ">
                                <div className="hotel-starrate">
                                    <Rater rating={1} total={5} interactive={false} />
                                </div>
                                </div>
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={rateNun} id="rateNun" name="rateNun"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                رتبه بندی نشده
                            </label>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* filter zone  if not exist dont display*/}
                {/* <div className="filter">
                    <strong onClick={this.handleShowRegion}
                    className="filter-title d-flex justify-content-between">
                            <p className="filter-title-text">
                            منطقه
                            </p>
                            <BsChevronDown />
                    </strong>
                    <div className={this.state.ShowRegion?"filter-search" : "filter-search-hide" }>
                        <ul className="filter-ul" name="region" id="region" value={region}
                        onClick={handleChange}
                        >
                        {regions}
                        </ul>
                    </div>
                </div> */}
                {/* filter popularity */}
                <div className="filter">
                    <strong onClick={this.handleShowPop} 
                    className="filter-title d-flex justify-content-between">
                            <p className="filter-title-text">
                            محبوبیت
                            </p>
                            <BsChevronDown />
                    </strong>
                    <div  className={this.state.ShowPop?"filter-search" : "filter-search-hide" }>
                        <ul className="filter-ul">
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={pop9} id="pop9" name="pop9"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                فوق العاده (9 تا 10)
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={pop8} id="pop8" name="pop8"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                بسیار عالی (۸ تا ۹)
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={pop7} id="pop7" name="pop7"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                عالی (۷ تا ۸)
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={pop6} id="pop6" name="pop6"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                خوب (۶ تا ۷)
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={pop5} id="pop5" name="pop5"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                قابل قبول (کمتر از ۶)
                            </label>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* filter other extras */}
                <div className="filter">
                    <strong onClick={this.handleShowExtras} 
                    className="filter-title d-flex justify-content-between">
                            <p className="filter-title-text">
                            دیگر امکانات
                            </p>
                            <BsChevronDown />
                    </strong>
                    <div className={this.state.ShowExtras ? "filter-search" : "filter-search-hide"}>
                        <ul className="filter-ul">
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={sona} id="sona" name="sona"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                سونا
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={defectivePerson} id="defectivePerson" name="defectivePerson"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                امکانات ویژه برای معلولان
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={torkishBath} id="torkishBath" name="torkishBath"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                حمام ترکی
                            </label>
                            </li>
                            <li className="filter-li">
                            <label class="checkbox-container" >
                            <input type="checkbox" checked={ziafat} id="ziafat" name="ziafat"
                                onClick={handleChange} />
                                <span class="checkbox-checkmark"></span>
                                ضیافت و پذیرایی
                            </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>
    )
    }
}
