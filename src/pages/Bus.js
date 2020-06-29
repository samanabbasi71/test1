import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SvgTitles from '../components/SvgTitles'
import AboutBus from '../components/AboutBus'
import QuestionBus from '../components/QuestionBus'
import PanelIranOut from '../components/PanelIranOut'


export default class BusTicket extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero hero={"busHero"} >
                    <Banner>
                        <PanelIranOut />
                    </Banner>
                </Hero>
                <SvgTitles />
                <AboutBus />
                <QuestionBus />
            </React.Fragment>
        )
    }
}
