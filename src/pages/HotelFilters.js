import React, { Component } from 'react'
import {AlibabaContext} from '../context'
import Error from './Error'
import HotelFilterContainer from '../components/hotel-filters/HotelFilterContainer'

export default class HotelFilters extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: this.props.match.params.url
        }
    }
    static contextType = AlibabaContext
    render() {
        const { getHotels } = this.context
        const filteredHotels = getHotels(this.state.url)
        if(!filteredHotels) {
            return <Error />
        }
        return (
            <React.Fragment>
                <HotelFilterContainer hotels={filteredHotels}/>
            </React.Fragment>        
        )
    }
}