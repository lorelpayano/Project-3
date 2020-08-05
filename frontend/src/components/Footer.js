import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Site footer --> */}
                    <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <h6>About</h6>
                                    <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                                </div>

                                <div className="col-xs-6 col-md-3">
                                    <h6>CATEGORIES</h6>
                                    <ul className="footer-links">
                                    <li><a href="/getinspired/#kitchens">Kitchens</a></li>
                                    <li><a href="/getinspired/#livingrooms">Living Rooms</a></li>
                                    <li><a href="/getinspired/#diningrooms">Dining Rooms</a></li>
                                    <li><a href="/getinspired/#bathrooms">Bathrooms</a></li>
                                    <li><a href="/getinspired/#patios">Patios</a></li>
                                    <li><a href="/getinspired/#entryways">Entryways</a></li>
                                    </ul>
                                </div>

                                <div className="col-xs-6 col-md-3">
                                    <h6>QUICK LINKS</h6>
                                    <ul className="footer-links">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/getinspired">Get Inspired</Link></li>
                                    <li><Link to="/profile">Your Profile</Link></li>
                                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <hr></hr>
                        </div>
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-12">
                                    <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                                    <Link to="#">Scanfcode</Link>.
                                    </p>
                                </div> */}

                                <div className="col-md-4 col-sm-6 col-xs-12">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                    <ul className="social-icons">
                                    <li><a href="www.facebook.com" className="fa fa-facebook"></a></li>
                                    <li><a href="www.twitter.com" className="fa fa-twitter"></a></li>
                                    <li><a href="www.instagram.com" className="fa fa-instagram"></a></li>
                                    <li><a href="www.pinterest.com" className="fa fa-pinterest"></a></li>   
                                    </ul>
                                </div>
                            {/* </div> */}
                        </div>
                </footer>
            </div>
        );
    }
}

export default Footer;