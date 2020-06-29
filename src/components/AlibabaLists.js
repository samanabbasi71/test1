import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {BsChevronDown} from 'react-icons/bs'

export default class AlibabaLists extends Component {
    state = {
        listIsOpen: false,
    }

    handleList = () => {
        this.setState({
            listIsOpen: !this.state.listIsOpen
        })
    }

    render() {
    return (
        <div className="alibabaLists__container">
            <div className="alibabaLists">
                <div className="alibabaLists-read alibabaList-item">
                    <button onClick={this.handleList} className="alibabaLists-read__title">
                    <p>خواندنی ها </p>
                    <span><BsChevronDown /></span>
                    </button>
                    <ul className={this.state.listIsOpen?"alibabaList-ul__active" : "alibabaList-ul"} >
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                قیمت بلیط هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط ارزان هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط چارتر
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط لحظه آخری
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور دبی
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور استانبول
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور تایلند
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور سریلانکا
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور فیلیپین
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور هنگ کنگ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="alibabaLists-read alibabaList-item">
                    <button onClick={this.handleList} className="alibabaLists-read__title">
                    <p>تور ها </p>
                    <span><BsChevronDown /></span>
                    </button>
                    <ul className={this.state.listIsOpen?"alibabaList-ul__active" : "alibabaList-ul"} >
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                قیمت بلیط هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط ارزان هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط چارتر
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط لحظه آخری
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور دبی
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور استانبول
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور تایلند
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور سریلانکا
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور فیلیپین
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور هنگ کنگ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="alibabaLists-read alibabaList-item">
                    <button onClick={this.handleList} className="alibabaLists-read__title">
                    <p>همکاران ما </p>
                    <span><BsChevronDown /></span>
                    </button>
                    <ul className={this.state.listIsOpen?"alibabaList-ul__active" : "alibabaList-ul"}>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                قیمت بلیط هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط ارزان هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط چارتر
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط لحظه آخری
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور دبی
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور استانبول
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور تایلند
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور سریلانکا
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور فیلیپین
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور هنگ کنگ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="alibabaLists-read alibabaList-item">
                    <button onClick={this.handleList} className="alibabaLists-read__title">
                    <p>مسیرهای پر تردد </p>
                    <span><BsChevronDown /></span>
                    </button>
                    <ul className={this.state.listIsOpen?"alibabaList-ul__active" : "alibabaList-ul"} >
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                قیمت بلیط هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط ارزان هواپیما
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط چارتر
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                بلیط لحظه آخری
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور دبی
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور استانبول
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور تایلند
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور سریلانکا
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور فیلیپین
                            </Link>
                        </li>
                        <li className="alibabaList-li">
                            <Link to="" className="alibabaList-link">
                                تور هنگ کنگ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }
}
