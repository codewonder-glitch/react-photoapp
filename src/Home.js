import React from 'react';
import { Link, withRouter } from 'react-router-dom'





export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
render(){

    return(

        <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>




    );
}
    }