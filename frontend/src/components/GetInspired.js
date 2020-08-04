import React, { Component } from 'react';
import '../stylesheets/GetInspired.css'
import Carousel from 'react-bootstrap/Carousel'
// import Bathroom from '../images/bC-Petersburg-Circle-Before-After-3.jpg'
import Kitchen1 from '../images/kitchen1.jpeg'
import Kitchen2 from '../images/kitchen2.jpg'
import Kitchen3 from '../images/kitchen3.jpg'
import Kitchen4 from '../images/kitchen4.jpg'
import Kitchen5 from '../images/kitchen5.jpg'
import LivingRoom1 from '../images/livingroom1.jpg'
import LivingRoom2 from '../images/livingroom2.jpeg'
import LivingRoom3 from '../images/livingroom3.jpg'
import LivingRoom4 from '../images/livingroom4.jpg'
import LivingRoom5 from '../images/livingroom5.jpg'
import DiningRoom1 from '../images/diningroom1.jpg'
import DiningRoom2 from '../images/diningroom2.jpg'
import DiningRoom3 from '../images/diningroom3.jpg'
import DiningRoom4 from '../images/diningroom4.jpg'
import DiningRoom5 from '../images/diningroom5.jpg'
import Bathroom1 from '../images/bathroom1.jpg'
import Bathroom2 from '../images/bathroom2.jpg'
import Bathroom3 from '../images/bathroom3.jpg'
import Bathroom4 from '../images'
import Bathroom5 from '../images'
import Patio1 from '../images/patio1.jpg'
import Patio2 from '../images/patio2.jpg'
import Patio3 from '../images/patio3.jpg'
import Patio4 from '../images/patio4.png'
import Patio5 from '../images/patio5.jpg'
import Entryway1 from '../images/entryway1.jpeg'
import Entryway2 from '../images/entryway2.jpg'
import Entryway3 from '../images/entryway3.jpg'
import Entryway4 from '../images/entryway4.jpeg'
import Entryway5 from '../images/entryway5.jpg'


// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

class GetInspired extends Component {
    render() {
        return (
            <div>
            <h2>Kitchens</h2>
                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Kitchen1} alt="First slide" style={{height: '75vh'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Kitchen2} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Kitchen3} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Kitchen4} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Kitchen5} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Living Rooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={LivingRoom1} alt="First slide" style={{height: '75vh'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={LivingRoom2} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={LivingRoom3} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={LivingRoom4} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={LivingRoom5} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Dining Rooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={DiningRoom1} alt="First slide" style={{height: '75vh'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={DiningRoom2} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={DiningRoom3} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={DiningRoom4} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={DiningRoom5} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Bathrooms</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Bathroom1} alt="First slide" style={{height: '75vh'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Bathroom2} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Bathroom3} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Bathroom4} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Bathroom5} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Patios</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Patio1} alt="First slide" style={{height: '75vh'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Patio2} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Patio3} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Patio4} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Patio5} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2>Entryways</h2>

                <Carousel style={{width:'85%', margin:'auto'}}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Entryway1} alt="First slide" style={{height: '75vh'}}/>
                            <Carousel.Caption style={{color:'black'}}>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Entryway2} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Entryway3} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Entryway4} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Entryway5} alt="Third slide" style={{height: '75vh'}}/>
                            <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

export default GetInspired;