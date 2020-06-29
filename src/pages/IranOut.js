import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import PanelIranOut from '../components/PanelIranOut'
import CCarousel from '../components/CCarousel'
import SvgTitles from '../components/SvgTitles'
import AppLink from '../components/AppLink'
import AboutIranOut from '../components/AboutIranOut'
import QuestionFlightOut from '../components/QuestionFlightOut'

export default class IranOut extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero >
                    <Banner>
                        <PanelIranOut />
                    </Banner>
                </Hero>
                <SvgTitles />
                <CCarousel />
                <AppLink />
                <AboutIranOut />
                <QuestionFlightOut />
            </React.Fragment>
        )
    }
}
