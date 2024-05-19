import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./components/ExampleCarouselImage"; // Adjusted import path
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage
            imgSrc="https://www.prevoyancesolutions.com/Content/img/banner/banner_5.jpg"
            altText="Description of first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            imgSrc="https://www.prevoyancesolutions.com/Content/img/banner/banner_1.jpg"
            altText="Description of second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            imgSrc="https://www.prevoyancesolutions.com/Content/img/banner/banner_2.jpg"
            altText="Description of third slide"
          />
        </Carousel.Item>
      </Carousel>
      <container-fluid>
        <Row>
          <Col id="col1">
            <h1>We Design</h1>
            <p>
              Having experience in designing engaging UI, we assure you to cater
              optimal quality solutions that definitely boost business’
              performance incredibly.
            </p>
          </Col>
          <Col id="col2">
            <h1>We develop</h1>
            <p>
              At Prevoyance IT Solutions Pvt. Ltd., we are bestowed with
              dexterity to develop all your minutest application development
              specifications acutely & exact to the described requirements.
            </p>
          </Col>
          <Col id="col3">
            <h1>We test it</h1>
            <p>
              Our application development team tests the developed solutions
              thoroughly from the root and ensures satisfactory solution
              delivery within stipulated time.
            </p>
          </Col>
        </Row>
      </container-fluid>
      <div class="container-fluid p-5  text-black text-center bg-opacity">
        <h1 id="bold">
          We Work With <span id="dot">.</span>
        </h1>
        <p id="plight">
          Prevoyance IT Solutions Pvt. Ltd. is a team of professionals who are
          striving to deliver <br />
          best IT solution to people we work with.
        </p>
        <div class="row">
          <div class="col-sm-3 p-3  text-white ml-custom">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.prevoyancesolutions.com/Content/img/third-section-1.jpg"
                className="hover-zoom"
              />
              <Card.Body>
                <Card.Title>Enterprise Solutions</Card.Title>
                <Card.Text>
                  We work with large enterprises as well as small &amp;
                  medium-sized enterprises. We transform the way small, medium
                  &amp; large enterprises conduct their business with customers
                  / clients, vendors / suppliers, partners and employees in this
                  digital age.
                </Card.Text>
                <button class="cssbuttons-io-button">
                  More
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-3 p-3  text-white">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.prevoyancesolutions.com/Content/img/third-section-2..jpg"
                className="hover-zoom"
              />
              <Card.Body>
                <Card.Title>Agencies</Card.Title>
                <Card.Text>
                  We work with consulting companies, independent software
                  vendors (isvs), software product development companies or
                  agencies. We partner with agencies to work on a project
                  end-to-end, or as extended team to build their client's
                  project successfully.
                </Card.Text>
                <button class="cssbuttons-io-button">
                  More
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-3 p-3  text-white">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.prevoyancesolutions.com/Content/img/third-section-3.jpg"
                className="hover-zoom"
              />
              <Card.Body>
                <Card.Title>Startups</Card.Title>
                <Card.Text>
                  We worked with more than 100+ global tech startups - for their
                  web / cloud / mobile / iot needs. We empower and support
                  startups with our digital expertise & experience at each stage
                  - whether you are at Seed stage OR Expansion stage.with our
                  digital expertise
                </Card.Text>
                <button class="cssbuttons-io-button">
                  More
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      
      <Container fluid id="lastdivs">
      <Row>
        <Col><h1>Get in touch!</h1><br /><br />
        <h4>Your technical partner towards web success.</h4><br />
        <Button variant="outline-danger">Contact us</Button>{' '}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 class="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
                <li class="mb-2"><span class="text-red-500 mr-2"></span>Services</li>
                <li class="mb-2"><span class="text-red-500 mr-2"></span>Online Support</li>
                <li class="mb-2"><span class="text-red-500 mr-2"></span>Business Solution</li>
                <li class="mb-2"><span class="text-red-500 mr-2"></span>FAQs</li>
            </ul>
            <h5><span id="red">Prevoyance IT Solutions Pvt Ltd </span>© 2023. All Rights Reserved.</h5>
        </Col>
        <Col>
        <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
            <p class="mb-2"><span class="text-red-500 mr-2">✉️</span>info@prevoyancesolutions.com</p>
            <p class="mb-2"><span class="text-red-500 mr-2">📞</span>+91 9922317213</p>
            <p class="mb-2"><span class="text-red-500 mr-2">📍</span>17/1 Amar Plaza Salt Lake SMS, India Road, IT Park Rd, Nagpur - 440022, Third Floor, Beside Persistent.</p>
            <p class="mb-2"><span class="text-red-500 mr-2">📍</span>Unit No.12, First Floor, Building No. B-3, Cerebrum IT Park Complex, Kalyani Nagar, Pune - 411 014</p>
            <map name=""></map>
        </Col>
      </Row>
    </Container>
      
    </>
  );
};
