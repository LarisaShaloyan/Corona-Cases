import React from 'react';
import HeroBanner from '../assets/images/hero-banner.png'
import './sectionHero.css'
import Hero from '../assets/images/hero-bg.jpg'
function SectionHero(props) {
    return (
        <div>
            <section className="section hero has-bg-image" id="home"
                     style={{ backgroundImage: `url(${Hero})` }}                   aria-label="home">
                <div className="container">

                    <div className="hero-content">

                        <h1 className="h1 hero-title">COVID-19 Tracker</h1>

                        <p className="hero-text">
                            Tatal Confirmed Corona Cases
                        </p>

                        <data className="counter" value="960708">960708</data>

                        <ul className="hero-list">

                            <li className="hero-list-item yellow">
                                Active cases <span className="span">799571</span>
                            </li>

                            <li className="hero-list-item green">
                                Recovered cases <span className="span">302826</span>
                            </li>

                            <li className="hero-list-item red">
                                Deaths <span className="span">52558</span>
                            </li>

                        </ul>

                        <a href="google.com" className="btn btn-primary">Meet The Doctor</a>

                    </div>

                    <figure className="hero-banner">
                        <img src={HeroBanner} width="570" height="562" alt="corona virus"
                             className="w-100"/>
                    </figure>

                </div>
            </section>

        </div>
    );
}

export default SectionHero;