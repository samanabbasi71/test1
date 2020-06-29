import React, { Component } from 'react'

export default class Range extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}
    }
    render() {
        return (
<div class="range__container">
<div class="range-slider">
    <span id="rs-bullet" class="rs-label">0</span>
    <input id="rs-range-line" class="rs-range" type="range" value={this.props.minPrice} 
    min={this.props.minPrice} max={this.props.maxPrice} />
    
</div>
  
<div class="box-minmax">
    <span>{this.props.minPrice}</span><span>{this.props.maxPrice}</span>
</div>
  
</div>
        )
    }
}
