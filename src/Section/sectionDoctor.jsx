import React from 'react';
import doctor1 from '../assets/images/doctor-1.jpg'
import doctor2 from '../assets/images/doctor-2.jpg'
import doctor3 from '../assets/images/doctor-3.jpg'
import { IoMailUnreadSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import './SectionDoctor.css'
function SectionDoctor(props) {
    const doctor = [

        { image:require('../assets/images/doctor-1.jpg'),
            name: "Dorothy M. Nickell",
            title: "Throat Specialist",
            phone: "+502 1234 567 890",
            mail: "d.m.nickell@gmail.com",
            text: " Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Mor Procedur"
        },
        {
            image:require('../assets/images/doctor-2.jpg'),
            name: "Billie R. Courtney",
            title: "Cardiologist",
            phone: "+502 7895 012 040",
            mail: "b.r.courtney@gmail.com",
            text: " Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin"

        },
        {
            image: require('../assets/images/doctor-3.jpg'),
            name: "frederika August",
            title: "Rehabilitation Therapy",
            phone: "+502 4582 257 884",
            mail: "b.r.courtney@gmail.com",
            text: " Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin"
        }

    ];
    return (
        <div>
            <section className="section doctor" style={{backgroundImage: " url('./assets/images/service-bg.jpg')"}}
                     aria-labelledby="doctor-label">
                <div className="container">

                    <h2 className="h2 section-title" id="doctor-label">Meet Our Best Doctors</h2>



                    <ul className="grid-list">
                        {doctor.map((item, index) => (
                            <li key={index} className="card-item">

                                <li>
                                    <div className="doctor-card">

                                        <figure className="card-banner img-holder"
                                                style={{width: '110px', height: '110px'}}>
                                            <img src={item.image} width="350" height="360" loading="lazy" alt=""
                                                 className="img-cover"/>

                                        </figure>

                                        <div className="card-content">

                                            <h3 className="h4 card-title">{item.name}</h3>

                                            <p className="card-subtitle">{item.title}</p>

                                            <p className="card-text text">{item.text}
                                            </p>

                                            <ul className="card-list">

                                                <li className="card-item">
                                                    <div className="icon-box">
                                                        <IoCall/>
                                                    </div>

                                                    <span className="span">{item.phone}</span>
                                                </li>

                                                <li className="card-item">
                                                    <div className="icon-box">
                                                        <IoMailUnreadSharp/>
                                                    </div>

                                                    <span className="span">{item.mail}</span>
                                                </li>

                                            </ul>

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
    )

}

export default SectionDoctor;