import React from 'react';
import aboutBanner from '../assets/images/about-banner-1.png'
import about1 from '../assets/images/about-1-1.jpg'
import about2 from '../assets/images/about-1-2.jpg'
import about3 from '../assets/images/about-1-3.jpg'
import './sectionAbout.css'
import '../assets/css/style.css'
function SectionAbout(props) {
    const About=[
        {
            id:1,
            image:require("../assets/images/about-1-1.jpg"),
            name:"Human Contact",
            text:" Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."

        },
        {
           id:2,
           image:require("../assets/images/about-1-2.jpg"),
            name:"Air Transmission",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hencemonthly sales."
        },
        {
            id:3,
            image:require("../assets/images/about-1-3.jpg"),
            name:"Contaminated Objects",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hencemonthly sales."
        }
    ]
    return (
        <div>
            <section className=" section_about " id="about7" aria-labelledby="about-label-1" >
                <div className="container">

                    <figure className="about-banner">
                        <img src={aboutBanner} width="540" height="540" loading="lazy"
                             alt="about "
                             className="w-100"/>
                    </figure>

                    <div className="about-content">

                        <p className="about-subtitle" id="about-label-1">How Virus Spread</p>

                        <h2 className="h2 section-title">How Contagion Coronavirus</h2>

                        <p className="section-text text">
                            Don’t get shirty with mein owtto doing with me arse down the problems have it car boot happy
                            days no
                            biggie bevvy only
                            awesome quid I,m goods info my theme flat the lttle rotter cheeky boot happy days
                        </p>

                        <ul className="about-list">

                            {About.map((item, index) => (
                                <li key={index} className="card">
                            <li className="about-item">
                                <figure className="item-img img-holder" style={{"--width": "80", "--height": "80"}}>
                                    <img
                                    src={item.image} width="80" height="80" loading="lazy"
                                    alt="Human Contact"/>
                                </figure>

                                <div className="item-content">
                                <h3 className="h4 item-title"></h3>
                                    {item.name}

                                    <p className="item-text text">{item.text}
                                    </p>
                                </div>
                            </li>

                                </li>
                                ))
                            }
                        </ul>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default SectionAbout;