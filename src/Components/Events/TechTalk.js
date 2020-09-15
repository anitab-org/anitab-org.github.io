import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Events/style.css";
import { Row, Col, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TechTalk() {
  const photos = [
    {
      photo:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      topic: "TOPIC1",
      date: "DATE1",
      location: "Location1",
      time: "Time 1",
      description:
        "Lorem a developer, I need to see all the videos of the talks held by the community regarding open source and anitab-org, so that the user can know more about us and what we do.",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      topic: "TOPIC2",
      date: "DATE2",
      location: "Location2",
      time: "Time 2",
      description:
        "Lorem a developer, I need to see all the videos of the talks held by the community regarding open source and anitab-org, so that the user can know more about us and what we do.",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      topic: "TOPIC3",
      date: "DATE3",
      location: "Location3",
      time: "Time",
      description:
        "Lorem a developer, I need to see all the videos of the talks held by the community regarding open source and anitab-org, so that the user can know more about us and what we do.",
    },
  ];
  const settings = {
    fade: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };
  return (
    <div className="container">
      <h2>TECH TALK</h2>
      <p>
        Lorem a developer, I need to see all the videos of the talks held by the
        community regarding open source and anitab-org , so that the user can
        know more about us and what we do.
      </p>
      <Slider {...settings}>
        {photos.map((pht) => {
          return (
            <Container className="sliderContainer">
              <Row>
                <Col className="talkImageCol my-auto" md={6}>
                  <img className="talkImage" src={pht.photo} />
                </Col>
                <Col md={6}>
                  <h2>{pht.topic}</h2>
                  <div className="info">
                    <ul>
                      <li>
                        <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
                        {pht.date}
                      </li>
                      <li>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        {pht.location}
                      </li>
                      <li>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        {pht.time}
                      </li>
                    </ul>
                    <h5>SPEAKERS: XYZ, ABC</h5>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its</p>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Slider>
    </div>
  );
}

export default TechTalk;
