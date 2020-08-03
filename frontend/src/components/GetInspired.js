import React, { Component } from 'react';
import '../stylesheets/GetInspired.css'
import Carousel from 'react-bootstrap/Carousel'
// import Bathroom from '../images/bC-Petersburg-Circle-Before-After-3.jpg'
import Dining from '../images/Gosbee-dining.jpg'
import Living from '../images/home-design.jpg'
import Living2 from '../images/ACS_0045-2.jpg'
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

class GetInspired extends Component {
    render() {
        return (
            <div>
            <h2>Kitchens</h2>
                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Living2} alt="First slide" style={{height: '600px'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Dining} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Living} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Living Rooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Living2} alt="First slide" style={{height: '600px'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Dining} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Living} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Dining Rooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Living2} alt="First slide" style={{height: '600px'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Dining} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Living} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Bathrooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Living2} alt="First slide" style={{height: '600px'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Dining} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Living} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Patios</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Living2} alt="First slide" style={{height: '600px'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Dining} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Living} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Laundry Rooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Living2} alt="First slide" style={{height: '600px'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Dining} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Living} alt="Third slide" style={{height: '600px'}}/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

export default GetInspired;