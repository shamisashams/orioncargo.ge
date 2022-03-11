import React from "react";
import GallerySlide from "./GallerySlide/GallerySlide";
import HeroSection from "./HeroSection/HeroSection";
import MiddleSection from "./MiddleSection/MiddleSection";
import ServiceHome from "./ServiceHome/ServiceHome";
import WhyUs from "./WhyUs/WhyUs";
import Layout from "../../Layouts/Layout";


const Home = () => {
    return (
        <Layout>
            <div className="homePage">
                <HeroSection/>
                <ServiceHome/>
                <GallerySlide/>
                <MiddleSection/>
                <WhyUs/>
            </div>
        </Layout>
    );
};

export default Home;
