import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import carousel3 from '../images/carousel3.jpg'
import carousel4 from '../images/carousel4.jpg'
import carousel5 from '../images/carousel5.png'

export default function CCarousel() {
    return (
      <div className="carousel__container">
        <Carousel className="carousel sm-carousel">
  <Carousel.Item className="carousel-item">
    <img
      className="carousel-img"
      src={carousel1}
      alt="carousel image"
    />
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="carousel-img"
      src={carousel2}
      alt="carousel image"
    />
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="carousel-img"
      src={carousel3}
      alt="carousel image"
    />
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="carousel-img"
      src={carousel4}
      alt="carousel image"
    />
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="carousel-img"
      src={carousel5}
      alt="carousel image"
    />
  </Carousel.Item>
</Carousel >
{/* carousel duble */}
<Carousel className="carousel md-carousel">
  <Carousel.Item className="carousel-item">
    <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel2}
      alt="carousel image"
    />
    </div>
    <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel1}
      alt="carousel image"
    />
    </div>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
  <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel3}
      alt="carousel image"
    />
    </div>
    <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel2}
      alt="carousel image"
    />
    </div>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
  <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel4}
      alt="carousel image"
    />
    </div>
    <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel3}
      alt="carousel image"
    />
    </div>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
  <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel5}
      alt="carousel image"
    />
    </div>
    <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel4}
      alt="carousel image"
    />
    </div>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
  <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel1}
      alt="carousel image"
    />
    </div>
    <div className="carousel__imgcontainer">
    <img
      className="carousel-img"
      src={carousel5}
      alt="carousel image"
    />
    </div>
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
