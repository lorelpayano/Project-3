import React, { Component } from "react";
import "../stylesheets/GetInspired.css";
import Carousel from "react-bootstrap/Carousel";
// import Bathroom from '.bC-Petersburg-Circle-Before-After-3.jpg'\
// import Kitchen2 from "kitchen2.jpg";
// import Kitchen3 from "kitchen3.jpg";
// import Kitchen4 from "kitchen4.jpeg";
// import Kitchen5 from "kitchen5.jpg";
// import LivingRoom1 from "livingroom1.jpg";
// import LivingRoom2 from "livingroom2.jpeg";
// import LivingRoom3 from "livingroom3.jpg";
// import LivingRoom4 from "livingroom4.jpg";
// import LivingRoom5 from "livingroom5.jpg";
// import DiningRoom1 from "diningroom1.jpg";
// import DiningRoom2 from "diningroom2.jpg";
// import DiningRoom3 from "diningroom3.jpg";
// import DiningRoom4 from "diningroom4.jpg";
// import DiningRoom5 from "diningroom5.jpg";
// import Bathroom1 from "bathroom1.jpg";
// import Bathroom2 from "bathroom2.jpg";
// import Bathroom3 from "bathroom3.jpg";
// import Bathroom4 from "bathroom4.jpg";
// import Bathroom5 from "bathroom5.jpg";
// import Patio1 from "patio1.jpg";
// import Patio2 from "patio2.jpg";
// import Patio3 from "patio3.jpg";
// import Patio4 from "patio4.png";
// import Patio5 from "patio5.jpg";
// import Entryway1 from "entryway1.jpeg";
// import Entryway2 from "entryway2.jpg";
// import Entryway3 from "entryway3.jpg";
// import Entryway4 from "entryway4.jpeg";
// import Entryway5 from "entryway5.jpg";

// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

class GetInspired extends Component {

  componentDidMount(){
    
  }

  render() {
    console.log(this)
    return (
      <div>

        <h2 className="inspo-heading1" id="kitchens">
          Kitchens
        </h2>

        <Carousel className='get-inspired'>
          <Carousel.Item>
            <img className="inspire-image" src="kitchen5.jpg" alt="First slide"/>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="kitchen2.jpg" alt="Third slide"/>
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="kitchen3.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="kitchen4.jpeg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="kitchen1.jpeg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="livingrooms">
          Living Rooms
        </h2>

        <Carousel className='get-inspired'>
          <Carousel.Item>
            <img className="inspire-image" src="livingroom1.jpg" alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="livingroom2.jpeg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="livingroom3.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="livingroom4.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="livingroom5.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="diningrooms">
          Dining Rooms
        </h2>

        <Carousel className='get-inspired'>
          <Carousel.Item>
            <img className="inspire-image" src="diningroom5.jpg" alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="diningroom2.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="diningroom3.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="diningroom4.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="diningroom1.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="bathrooms">
          Bathrooms
        </h2>

        <Carousel className='get-inspired'>
          <Carousel.Item>
            <img className="inspire-image" src="bathroom1.jpg" alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="bathroom2.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="bathroom3.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="bathroom4.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="bathroom5.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="patios">
          Patios
        </h2>

        <Carousel className='get-inspired'>
          <Carousel.Item>
            <img className="inspire-image" src="patio3.jpg" alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="patio2.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="patio1.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="patio4.png" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="patio5.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="entryways">
          Entryways
        </h2>

        <Carousel className='get-inspired'>
          <Carousel.Item>
            <img className="inspire-image" src="entryway2.jpg" alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="entryway1.jpeg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="entryway3.jpg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="entryway4.jpeg" alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="inspire-image" src="entryway5.jpg" alt="Third slide" />
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
