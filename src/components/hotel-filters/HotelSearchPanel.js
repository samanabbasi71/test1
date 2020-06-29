import React, { Component } from 'react'
import { FaRegUser, FaSearch } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { MdCardGiftcard } from 'react-icons/md'
import HotelPanel from '../hotel/HotelPanel'

export default class HotelSearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPanel: false
        }
    }
    handleShowPanel = () => {
        this.setState({
            showPanel: !this.state.showPanel
        })
    }
    render() {
        const {
            city
        } = this.props.hotels
        return (
            <form >
                <div className="hotelsearchpanel__container">
                    <div className="hotelsearchpanel-sm p-2">
                        <div className="hotelsearchpanel-sm__double">
                        <input type="text" value={city} className="hotelsearchpanel-sm__city"/>
                        <div onClick={this.handleShowPanel} className="hotelsearchpanel-sm__searchicon">
                            <FaSearch className="ml-1" />
                            <p className="hotelsearchpanel-sm__text mb-0">تغییر جستجو</p>
                        </div>
                        </div>
                        <div className="hotelsearchpanel-sm__reservation">
                            <MdCardGiftcard className="ml-1" />
                            <p className="hotelsearchpanel-sm__text mb-0">پنج‌شنبه از 29 خرداد تا 31 خرداد / 2 شب</p>
                        </div>
                    </div>
                    <div className={this.state.showPanel ? "hotelsearchpanel__container my-3 radios-white" : "hotelsearchpanel__container-hide"}>
                    <HotelPanel />
                    </div>
                </div>
        </form>
        )
    }
}
