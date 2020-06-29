import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SvgTitlesTour from '../components/SvgTitlesTour'
import AppLink from '../components/AppLink'
import AlibabaLists from '../components/AlibabaLists'
import PanelIran from '../components/PanelIran'


export default class Tour extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero hero={"tourHero"} >
                    <Banner>
                        <PanelIran />
                    </Banner>
                </Hero>
                <SvgTitlesTour />
                <AppLink />
                <AlibabaLists />
            </React.Fragment>
        )
    }
}
