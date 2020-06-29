import React, { Component } from 'react'
import {GrGallery} from 'react-icons/gr'
export default class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const [mainImg, ...galleryImages] = this.props.images
        const [...allImages] = this.props.images

        return (
    <div className="gallery-container">
        <div className="mainimage-container">
                <div className="mySlides">
                    <img  src={mainImg} alt="gallery image" 
                    className="gallery-main__img" 
                    />
                </div>    
        </div>

{/* Thumbnail images */}
        <div className="galley-thumbnail">
            {
                allImages.map((item, index) => {
                    return (
                <div className="gallery-thumbnail__col">
                    <img key={index} src={item} alt="gallery image" 
                    className="gallery-thumbnail-images demo" 
                    />
                </div>
                    )
                })
            }
            <div className="gallery-thumbnail__col gallery-modal">
                <GrGallery className="gallery-modal-icon" />
                <p>گالری</p>
            </div>
        </div>
    </div>
        )
    }
}
