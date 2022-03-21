import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GallerySlide.css";

const GallerySlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const sliderData = [
        "/img/gallery/1.png",
        "/img/gallery/2.png",
        "/img/gallery/3.png",
        "/img/gallery/4.png",
        "/img/gallery/5.png",
    ];
    return (
        <div className="gallery_home">
            <div className="wrapper">
                <div className="gil30">{__("gallery")}</div>
            </div>
            <Slider {...settings} className="gallery_slide">
                {sliderData.map((img, i) => {
                    return (
                        <div className="img" key={i}>
                            <img src={img} alt="" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default GallerySlide;
