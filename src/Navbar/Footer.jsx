import React from 'react';
import { FaCaretUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImXing } from "react-icons/im";
import { IoMdArrowDropup } from "react-icons/io";
import './footer.css'
function Footer(props) {
    return (
        <div>
            <footer className="footer has-bg-image" style={{backgroundImage: "url('./assets/images/footer-bg.jpg')"}}>
                <div className="container">

                    <div className="footer-top section">

                        <div className="footer-brand">

                            <h3 className="h4 footer-list-title">About Covid-19</h3>

                            <p className="footer-text text">
                                We believe in Simple Creative and Flexible Design Standards.
                            </p>

                            <ul className="contact-list">

                                <li className="contact-item">
                                    <p className="contact-title">Headquarters:</p>

                                    <address className="address text">
                                        795 Folsom Ave, Suite 600 San Francisco, CA 94107
                                    </address>
                                </li>

                                <li className="contact-item">
                                    <p className="contact-title">Phone:</p>

                                    <a href="tel:+524623435643" className="text">(+52) 4623 435643</a>
                                </li>

                                <li className="contact-item">
                                    <p className="contact-title">Email:</p>

                                    <a href="mailto:info@covid-19.com" className="text">info@covid-19.com</a>
                                </li>

                            </ul>

                        </div>

                        <ul className="footer-list">

                            <li>
                                <h3 className="h4 footer-list-title">Navigate</h3>
                            </li>

                            <li className="footer-list-item">
                                <FaCaretUp />

                                <a href="google.com" className="footer-link">Advertisers</a>
                            </li>

                            <li className="footer-list-item">
                                <FaCaretUp />

                                <a href="google.com" className="footer-link">Developers</a>
                            </li>

                            <li className="footer-list-item">
                                <FaCaretUp />

                                <a href="google.com" className="footer-link">Resources</a>
                            </li>

                            <li className="footer-list-item">
                                <FaCaretUp />

                                <a href="google.com" className="footer-link">Company</a>
                            </li>

                            <li className="footer-list-item">
                                <FaCaretUp />

                                <a href="google.com" className="footer-link">Connect</a>
                            </li>

                        </ul>

                        <ul className="footer-list social-list">

                            <li>
                                <h3 className="h4 footer-list-title">Social Contact</h3>
                            </li>

                            <li className="footer-list-item">

                                <FaFacebook />
                                <a href="google.com" className="footer-link">Facebook</a>
                            </li>

                            <li className="footer-list-item">
                                <FaSquareTwitter />

                                <a href="google.com" className="footer-link">Twitter</a>
                            </li>

                            <li className="footer-list-item">
                                <FaInstagramSquare />

                                <a href="google.com" className="footer-link">Instagram</a>
                            </li>

                            <li className="footer-list-item">
                                <FaYoutube />

                                <a href="google.com" className="footer-link">YouTube</a>
                            </li>

                            <li className="footer-list-item">
                                <ImXing />

                                <a href="google.com" className="footer-link">Xing</a>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <h3 className="h4 footer-list-title">Privacy And Tos</h3>
                            </li>

                            <li className="footer-list-item">
                                <IoMdArrowDropup />

                                <a href="google.com" className="footer-link">Advertiser Agreement</a>
                            </li>

                            <li className="footer-list-item">
                                <IoMdArrowDropup />

                                <a href="google.com" className="footer-link">Acceptable Use Policy</a>
                            </li>

                            <li className="footer-list-item">
                                <IoMdArrowDropup />

                                <a href="google.com" className="footer-link">Privacy Policy</a>
                            </li>

                            <li className="footer-list-item">
                                <IoMdArrowDropup />

                                <a href="google.com" className="footer-link">Technology Privacy</a>
                            </li>

                            <li className="footer-list-item">
                                <IoMdArrowDropup />

                                <a href="google.com" className="footer-link">Developer Agreement</a>
                            </li>

                        </ul>

                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">
                            &copy; 2020 All Rights Reserved. Developed by codewithsadee
                        </p>
                    </div>

                </div>
            </footer>


            <a href="#top" className="back-top-btn" aria-label="back to top">
                <IoMdArrowDropup />
            </a>


        </div>
    );
}

export default Footer;