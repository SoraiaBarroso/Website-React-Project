import React, {useEffect} from "react"
import "./Features.css"

import FeaturesImg from "../../assets/feature.svg"
import { ImBooks } from "react-icons/im"
import {LiaRulerCombinedSolid} from "react-icons/lia"
import {TbSeo} from "react-icons/tb"
import {MdTouchApp} from "react-icons/md"
import {SiPytest} from "react-icons/si"

// since the feature is all the same we create a component
import Feature from "./Feature"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Features() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            mirror: true,
        });
    }, [])

    return (
        <section id="features">
            <div className="container features">
                <div data-aos="zoom-in" className="u-title">
                    <ImBooks color="#00B0FF" size={30} className="icon"/>
                    <h2>- CORE FEATURES -</h2>
                    <p> TechX has Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Nullam mollis leo at dapibus dictum.
                        Ut posuere est erat, id semper dui ultricies at.
                    </p>
                </div>
                <div className="features-content">
                    <div data-aos="fade-right" className="features-left">
                        <img src={FeaturesImg} alt="features"></img>
                    </div>
                    <div data-aos="fade-left" className="features-right">
                        <Feature icon={<LiaRulerCombinedSolid color="#133771f4" size={30}/>} heading={"RESPONSIVE DESIGN"}/>
                        <Feature icon={<TbSeo color="#133771f4" size={30}/>} heading={"SEO OPTIMIZATION"}/>
                        <Feature icon={<MdTouchApp color="#133771f4" size={30}/>} heading={"UX DESIGN"}/>
                        <Feature icon={<SiPytest color="#133771f4" size={26}/>} heading={"TESTING AND QA"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;