import React from 'react';
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import { FaPerson } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import './sectionBlog.css'
function SectionBlog(props) {
    const Section =[
        {
            image:require('../assets/images/blog-1.jpg'),
            a: "Conulting Reporting Qouncil Arei Not Could More..." ,
            time:"July 12, 2022",
            name:"John Doe",
            text:" Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvelycordinate performe"

        },
        {
            image:require('../assets/images/blog-2.jpg'),
            a: "Financial Reporting Qouncil What Could More..." ,
            time:"July 25, 2024",
            name:"Mark Doe",
            text:" Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvelycordinate performe"
        },
        {
            image:require('../assets/images/blog-3.jpg'),
            a:" Consulting Reporting Qounc Arei Could More...",
            time:"July 08, 2015",
            name:"Ella Goe",
            text:"Pluoresntly customize pranci an plcentered customer service anding strategic amerials Interacvely"
        }
    ]
    return (
        <div>
            <section className="section blog" id="blog" aria-labelledby="blog-lable">
                <div className="container">

                    <h2 className="h2 section-title" id="blog-label">Our Most Popular Blog</h2>

                    <p className="section-text text">
                        Dynamically formulate fully tested catalysts for change via focused methods of empowerment
                        Assertively
                        extend
                        alternative synergy and extensive web services.
                    </p>

                    <ul className="grid-list">
                        {Section.map((item, index) => (
                            <li key={index} className="card">

                        <li>
                            <div className="blog-card">

                                <figure className="card-banner img-holder"
                                        style={{"--width": "110px", "--height": "110px"}}>

                                    <img src={item.image} width="370" height="280" loading="lazy"
                                         alt="Conulting Reporting Qouncil Arei Not Could More..."
                                         className="img-cover"/>
                                </figure>

                                <div className="card-content">

                                <h3 className="h4">
                                        <a href="google.com" className="card-title">
                                            {item.a}
                                        </a>
                                    </h3>

                                    <div className="card-meta">

                                        <div className="wrapper">
                                            <BsCalendar2DateFill />

                                            <time className="meta-text" dateTime="2022-07-12">{item.time}</time>
                                        </div>

                                        <div className="wrapper">
                                            <FaPerson />

                                            <p className="meta-text">{item.name}</p>
                                        </div>

                                    </div>

                                    <p className="card-text text">
                                        {item.text}
                                    </p>

                                </div>

                                <div className="card-footer">
                                    <a href="google.com" className="btn-link">Read More</a>
                                </div>

                            </div>
                        </li>

                            </li>

                            ))
                        }
                    </ul>

                </div>
            </section>

        </div>
    );
}

export default SectionBlog;