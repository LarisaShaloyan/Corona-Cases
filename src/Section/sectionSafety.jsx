import React from 'react';
import safety1 from '../assets/images/safety-1.jpg'
import safety2 from '../assets/images/safety-2.jpg'
import safety3 from '../assets/images/safety-3.jpg'
import safety4 from '../assets/images/safety-4.jpg'
import safety5 from '../assets/images/safety-5.jpg'
import safety6 from '../assets/images/safety-6.jpg'
import safety7 from '../assets/images/safety-7.jpg'
import safety8 from '../assets/images/safety-8.jpg'
import safety9 from '../assets/images/safety-9.jpg'
import safety10 from '../assets/images/safety-10.jpg'
import safety11 from '../assets/images/safety-11.jpg'
import safety12 from '../assets/images/safety-12.jpg'
import './sectionSafeti.css'
function SectionSafety(props) {
    const Safety = [
        {
            id: 1,
            image: require('../assets/images/safety-1.jpg'),
            alt: "Wet Hands",
            name: "Wet Hands",

        },
        {
            id: 2,
            image: require('../assets/images/safety-2.jpg'),
            alt: "Apply Soap",
            name: "Apply Soap",
        },
        {   id:3,
            image: require('../assets/images/safety-3.jpg'),
            alt:" Rub Hands Palm to palm",
            name:"Rub Hands Palm to palm"
        },
        {
            id:4,
            image: require("../assets/images/safety-4.jpg"),
            alt:" Lather The Back of Both Hands",
            name:"Lather The Back of Both Hands",
        },
        {
            id:5,
            image: require('../assets/images/safety-5.jpg'),
            alt:"Scrub Between Your Fingers",
            name:"Scrub Between Your Fingers",
        },
        {
            id:6,
            image: require('../assets/images/safety-6.jpg'),
            alt:" Rub The Back of Fingers on The Opposing Palm",
            name:"Rub The Back of Fingers on The Opposing Palm"
        },
        {
            id:7,
            image: require('../assets/images/safety-7.jpg'),
            alt:" Clean Thumbs",
            name:"Clean Thumbs"
        },
        {
            id:8,
            image: require('../assets/images/safety-8.jpg'),
            alt:" Wash Fingernails And Fingertips",
            name:"Wash Fingernails And Fingertips"
        },
        {
            id:9,
            image: require('../assets/images/safety-9.jpg'),
            alt:" Rinse Hands",
            name:"Rinse Hands"
        },
        {
            id:10,
            image: require('../assets/images/safety-10.jpg'),
            alt:" Dry with a Single Use Towel",
            name:"Dry with a Single Use Towel"
        },
        {
            id:11,
            image: require('../assets/images/safety-11.jpg'),
            alt:" Use The Towel to Rurn off The Foucet",
            name:"Use The Towel to Rurn off The Foucet"
        },

    ]
    return (
        <div>

            <section className="section safety" aria-labelledby="safety-label">
                <div className="container">

                    <h2 className="h2 section-title" id="safety-label">How to Wash Your Hands</h2>

                    <p className="section-text text">
                        Dynamically formulate fully tested catalysts for change via focused methods of empowerment
                        Assertively
                        extend
                        alternative synergy and extensive web services.
                    </p>

                    <ol className="safety-list">
                        {Safety.map((item, index) => (
                            <li key={index} className="card">

                                <li className="safety-item">
                                    <figure className="card-banner img-holder"
                                            style={{"--width": "110px", "--height": "110px"}}>
                                        <img src={item.image} width="170" height="170" loading="lazy"
                                             alt={item.alt}
                                             className="img"/>
                                    </figure>

                                    <span className="number">{item.id}</span>

                                    <h3 className="h4 item-title">{item.name}</h3>
                                </li>



                            </li>
                        ))
                        }
                </ol>

        </div>
</section>


</div>
)
    ;
}

export default SectionSafety;