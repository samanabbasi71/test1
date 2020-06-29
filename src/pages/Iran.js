import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import PanelIran from '../components/PanelIran'
import CCarousel from '../components/CCarousel'
import SvgTitles from '../components/SvgTitles'
import AppLink from '../components/AppLink'
import AlibabaLists from '../components/AlibabaLists'
import AboutIran from '../components/AboutIran'
import QuestionFlight from '../components/QuestionFlight'



export default class Iran extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero >
                    <Banner>
                        <PanelIran />
                    </Banner>
                </Hero>
                <SvgTitles />
                <CCarousel />
                <AppLink />
                <AlibabaLists />
                <AboutIran />
                <QuestionFlight />
            </React.Fragment>
        )
    }
}