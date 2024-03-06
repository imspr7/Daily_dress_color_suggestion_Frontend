import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg1.jpg";
import bg1 from "../assets/bg10.jpg";
import bg2 from "../assets/bg3.jpg";
import bg3 from "../assets/bg4.jpg";
import bg4 from "../assets/bg8.jpg";
import bg5 from "../assets/bg6.jpg";
import bg6 from "../assets/bg7.jpg";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  let navigate = useNavigate();

  let User = async () => {
    try {
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="dash">
        <Navbar className="nav" expand="md">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand className="text-white mx-auto brand-text">
            Vibrant vibes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto">
              <Button className="nav-btn" onClick={() => User()}>
                Signup/Login
              </Button>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="car">
          <Carousel data-bs-theme="light">
            <Carousel.Item>
              <img className="img" src={bg2} alt="First slide" />
              <Carousel.Caption>
                <h5> Life is too short to wear boring colors </h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={bg1} alt="Second slide" />
              <Carousel.Caption>
                <h5> Colors are the smiles of nature </h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={bg3} alt="Third slide" />
              <Carousel.Caption>
                <h5></h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={bg4} alt="First slide" />
              <Carousel.Caption>
                <h5> Every color has its own beauty </h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={bg5} alt="First slide" />
              <Carousel.Caption>
                <h5> Simplicity is the ultimate sophistication </h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={bg} alt="First slide" />
              <Carousel.Caption>
                <h5> Enjoy the magic of a colorful dress </h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={bg6} alt="First slide" />
              <Carousel.Caption>
                <h5> Colorful dress, colorful life. Let's paint the town with our fashion choices </h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
