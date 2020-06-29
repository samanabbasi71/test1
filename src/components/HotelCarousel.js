import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function HotelCarousel({images}) {
    const [...allImg] = images
    return (
      <div className=" hotelcarousel__container">
        <Carousel className="hotelcarousel hotel-carousel">
            {
                allImg.map((item, index) => {
                    return (
                    <Carousel.Item className="carousel-item">
                    <img
                      className="hotelcarousel-img"
                      key={index}
                      src={item}
                      alt="carousel image"
                    />
                  </Carousel.Item>
                )})
            }
        </Carousel >
      </div>
    )
  }
