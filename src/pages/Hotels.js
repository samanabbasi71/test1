import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SvgTitles from '../components/SvgTitles'
import QuestionHotel from '../components/QuestionHotel'
import HotelsList from '../components/HotelsList'
import AlibabaListReserve from '../components/AlibabaListReserve '
import HotelPanel from '../components/hotel/HotelPanel'
export default class Hotel extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero hero={"hotelHero"} >
                    <Banner>
                        <HotelPanel />
                    </Banner>
                </Hero>
                <SvgTitles />
                <HotelsList />
                <QuestionHotel />
                <AlibabaListReserve />
            </React.Fragment>
        )
    }
}
