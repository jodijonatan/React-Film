import { Card, Container, Row, Col, Image } from "react-bootstrap";
import hero1Image from "../assets/images/hero/hero1.jpg";
import hero2Image from "../assets/images/hero/hero2.jpg";
import hero3Image from "../assets/images/hero/hero3.jpg";
import hero4Image from "../assets/images/hero/hero4.jpg";
import hero5Image from "../assets/images/hero/hero5.jpg";
import hero6Image from "../assets/images/hero/hero6.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIE</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={hero1Image} alt="trending1" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className=" text-center">BATMAN</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hero2Image} alt="trending1" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className=" text-center">SUPERMAN</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 7 weeks ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hero3Image} alt="trending1" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className=" text-center">FLASH</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 days ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hero4Image} alt="trending1" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className=" text-center">THOR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 years ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hero5Image} alt="trending1" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className=" text-center">
                    CAPTAIN MARVEL
                  </Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 16 days ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hero6Image} alt="trending1" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className=" text-center">
                    CAPTAIN AMERIKA
                  </Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 9 weeks ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
