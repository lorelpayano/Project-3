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
  render() {
    return (
      <div>
        <h2 className="inspo-heading1" id="kitchens">
          Kitchens
        </h2>
        <Carousel style={{ width: "65%", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="kitchen5.jpg"
              alt="First slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption style={{ color: "black" }}>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="kitchen2"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="kitchen3"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="kitchen4"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="kitchen1"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="livingrooms">
          Living Rooms
        </h2>

        <Carousel style={{ width: "65%", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="livingroom1"
              alt="First slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption style={{ color: "black" }}>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="livingroom2"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="livingroom3"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="livingroom4"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="livingroom5"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="diningrooms">
          Dining Rooms
        </h2>

        <Carousel style={{ width: "65%", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="diningroom5"
              alt="First slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption style={{ color: "black" }}>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="diningroom2"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="diningroom3"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="diningroom4"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="diningroom1"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="bathrooms">
          Bathrooms
        </h2>

        <Carousel style={{ width: "65%", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="bathroom1"
              alt="First slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption style={{ color: "black" }}>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="bathroom2"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="bathroom3"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="bathroom4"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="bathroom5"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="patios">
          Patios
        </h2>

        <Carousel style={{ width: "65%", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="patio3"
              alt="First slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption style={{ color: "black" }}>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="patio2"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="patio1"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="patio4"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="patio5"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="inspo-heading" id="entryways">
          Entryways
        </h2>

        <Carousel style={{ width: "65%", margin: "auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="entryway2"
              alt="First slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption style={{ color: "black" }}>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="entryway1"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="entryway3"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="entryway4"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="entryway5"
              alt="Third slide"
              style={{ height: "75vh" }}
            />
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
