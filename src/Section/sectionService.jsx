import React from 'react';
import serviceImage from '../assets/images/service-1-1.jpg'
import serviceImage2 from '../assets/images/service-1-2.jpg'
import serviceImage3 from '../assets/images/service-1-3.jpg'
import serviceImage4 from '../assets/images/service-1-4.jpg'
import serviceImage5 from '../assets/images/service-1-5.jpg'
import serviceImage6 from '../assets/images/service-1-6.jpg'
import './Service.css'
function SectionService(props) {
    const Simptoms=[
        {
            image:require('../assets/images/service-1-1.jpg'),
            name:"Coughing And Sneezing",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
        },
        {
            image:require('../assets/images/service-1-2.jpg'),
            name:"Hot Fever",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
        },
        {
            image:require('../assets/images/service-1-3.jpg'),
            name:"Strong Headacke",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
        },
        {
            image:require('../assets/images/service-1-4.jpg'),
            name:"Shortness Of Breath",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
        },
        {
            image:require('../assets/images/service-1-5.jpg'),
            name:"Confusion",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
        },
        {
            image:require('../assets/images/service-1-6.jpg'),
            name:"Sore Throat",
            text:"Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."
        }
    ]
    return (
        <div>
            <section className="section service has-bg-image"
                     style={{backgroundImage:" url('./assets/images/service-bg.jpg')"}}
                     aria-labelledby="service-label-1">
                <div className="container">

                    <h2 className="h2 section-title" id="service-label-1"> Corona Virus Symptoms</h2>

                    <p className="section-text text">
                        Dynamically formulate fully tested catalysts for change via focused methods of empowerment
                        Assertively
                        extend
                        alternative synergy and extensive web services.
                    </p>

                    <ul className="service-list">
                        {Simptoms.map((item, index) => (
                            <li key={index} className="card">

                        <li>
                            <div className="service-card">

                                <figure className="card-banner img-holder"
                                        style={{"--width": "110px", "--height": "110px"}}>
                                    <img src={item.image} width="110" height="110" loading="lazy"
                                         alt="service name"/>
                                </figure>

                                <div className="card-content">
                                    <h3 className="h4 card-title">{item.name}</h3>

                                    <p className="card-text text">
                                        {item.text}
                                    </p>
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

export default SectionService;