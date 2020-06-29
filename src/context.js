import React, { Component } from 'react'
import items from './data'
import Hotel from './components/Hotel'

const AlibabaContext = React.createContext()

class AlibabaProvider extends Component {
    state= {
        hotels: [],
        sortedHotels: [],
        filteredHotels : [],
        loading: true,
        city: 'istanbul',
        region: 'all',
        type: '',
        price: 0,
        minPrice: 0,
        maxPrice: 0,             
        ziafat: false,
        sona: false,
        defectivePerson: false,
        bolling: false,
        torkishBath: false,
        rate5:false,
        rate4:false,
        rate3:false,
        rate2:false,
        rate1:false,
        rateNun:false,
        pop9: false,
        pop8: false,
        pop7: false,
        pop6: false,
        pop5: false,
        search: '',
    }

    // getData

    componentDidMount() {
        let hotels = this.formatData(items)
        let sortedHotels = hotels.filter(hotel => hotel.city === "istanbul")
        sortedHotels.length = 6
        let maxPrice = Math.max(...hotels.map(item => item.price))
        this.setState({
            hotels,
            sortedHotels,
            filteredHotels: hotels,
            loading: false,
            // price: maxPrice,
            maxPrice
        })
    }

    // filterFeachuredHotels () {

    // }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url
            )
            let hotel = {...item.fields, images, id}
            return hotel
        })
        return tempItems
    }

    getHotel = slug => {
        let tempHotels = [...this.state.hotels]
        const hotel = tempHotels.find(hotel => hotel.slug === slug)
        return hotel
    }

    getHotels = url => {
        let tempHotels = [...this.state.filteredHotels]
        const filteredHotels = tempHotels.filter(hotel => hotel.url === url)
        return filteredHotels
    }

    hadleFeachuredHotel = event => {
        const btnContainer = document.getElementById('feachured-btn')
        const feachuredBtns = btnContainer.getElementsByClassName('hotel-list__city')
        for (let i = 0; i < feachuredBtns.length; i++) {
            feachuredBtns[i].addEventListener("click", function() {
            const activeBtn = document.getElementsByClassName("active-btn")
            activeBtn[0].className = activeBtn[0].className.replace(" active-btn", "")
            this.className += " active-btn"
            })}
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        }, this.feachuredHotels)
    }

    feachuredHotels = () => {
        let {
            city,
            hotels
        } = this.state
        let tempHotels = [...hotels]
        const sixTemHotels = tempHotels.filter(hotel => hotel.city === city)
        sixTemHotels.length = 6
        this.setState({
            sortedHotels: sixTemHotels
        })
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? 
        target.checked : target.value
        const name = event.target.name
        console.log(target.checked);
        
        this.setState({
            [name]: value
        }, this.filtering)
        
    }

    filtering = () => {
        let {
            hotels,
            region,
            city,
            price,
            minPrice,
            maxPrice,
            ziafat,
            sona,
            defectivePerson,
            bolling,
            torkishBath,
            rate5,
            rate4,
            rate3,
            rate2,
            rate1,
            rateNun,
            pop9,
            pop8,
            pop7,
            pop6,
            pop5
        } = this.state
        let tempHotels = [...hotels]
        // parseint
        price = parseInt(price)
        // city
        // if(city){
        //     tempHotels = tempHotels.filter(hotel => hotel.city === city)
        // }
        // region
        // if(region !== 'all'){
        //     tempHotels = tempHotels.filter(hotel => hotel.region === region)
        // } else {
        //     tempHotels = tempHotels
        // }
            console.log("hotel gets");
        // rate 5
        if(rate5) {
            tempHotels = tempHotels.filter(hotel => hotel.hotelRate === 5)
        }
        // rate 4
        if(rate4) {
            tempHotels = tempHotels.filter(hotel => hotel.hotelRate === 4)
        }        
        // rate 3
        if(rate3) {
            tempHotels = tempHotels.filter(hotel => hotel.hotelRate === 3)
        }        
        // rate 5
        if(rate2) {
            tempHotels = tempHotels.filter(hotel => hotel.hotelRate === 2)
        }        
        // rate 1
        if(rate1) {
            tempHotels = tempHotels.filter(hotel => hotel.hotelRate === 1)
        }        
        // rate 5
        if(rateNun) {
            tempHotels = tempHotels.filter(hotel => hotel.hotelRate === 0)
        }        
        // pop 9
        if(pop9) {
            tempHotels = tempHotels.filter(hotel => hotel.popularity >= 9)
        }        
        // pop 8
        if(pop8) {
            tempHotels = tempHotels.filter(hotel => hotel.popularity >= 8 && hotel.popularity < 9)
        }        
        // pop 7
        if(pop7) {
            tempHotels = tempHotels.filter(hotel => hotel.popularity >= 7 && hotel.popularity < 8)
        }        
        // pop 6
        if(pop6) {
            tempHotels = tempHotels.filter(hotel => hotel.popularity >= 6 && hotel.popularity < 7)
        }        
        // pop 5
        if(pop5) {
            tempHotels = tempHotels.filter(hotel => hotel.popularity <= 6)
        }
        // sona
        if(sona) {
            tempHotels = tempHotels.filter(hotel => hotel.sona === true)
        }
        // torkish bath
        if(torkishBath) {
            tempHotels = tempHotels.filter(hotel => hotel.torkishBath === true)
        }
        // ziafat
        if(ziafat) {
            tempHotels = tempHotels.filter(hotel => hotel.ziafat === true)
        }
        // defective persons
        if(defectivePerson) {
            tempHotels = tempHotels.filter(hotel => hotel.defectivePerson === true)
        }
        // price 
        tempHotels = tempHotels.filter(hotel => hotel.price >= price)
        // city
        this.setState({
            filteredHotels: tempHotels
        } , console.log("state changed"))

    }

    handleReset = () => {
        let {
            hotels, region, price ,minPrice, maxPrice, ziafat ,sona, defectivePerson, bolling, torkishBath,
        } = this.state
        this.setState({
            filteredHotels: hotels,
            region: 'all',
            type: '',
            price: 0,
            minPrice: 0,
            maxPrice: 0,             
            ziafat: false,
            sona: false,
            defectivePerson: false,
            bolling: false,
            torkishBath: false,
        })
    }
    render() {
        return (
            <AlibabaContext.Provider value={{
                ...this.state,
                getHotel: this.getHotel,
                getHotels: this.getHotels,
                hadleFeachuredHotel: this.hadleFeachuredHotel,
                handleChange: this.handleChange,
                handleReset: this.handleReset
            }}>
                {this.props.children}
            </AlibabaContext.Provider>
        )
    }
}

const AlibabaConsumer = AlibabaContext.Consumer

export function WithHotelConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <AlibabaConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </AlibabaConsumer>
    }
} 

export {AlibabaContext, AlibabaProvider, AlibabaConsumer}
