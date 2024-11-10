import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

function HeroSection() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols ">
        <div className="hero-content">
          <h1 className="heading-xl">
            {" "}
            Explore the World, One Country at a Time
          </h1>
          <p className="paragraph">
            {" "}
            discover the history , culture and beauty of every nation . Sort,
            Search and every Filter throughs country to find the details you
            need .
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://github.com/thapatechnical/thapa-react-19-website/blob/master/react_country_thapa/public/images/world.png?raw=true"
            alt="World Beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  )
}

export default HeroSection