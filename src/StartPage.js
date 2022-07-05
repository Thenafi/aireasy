import { Card, Col, Row , Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import books from "./Logo/image/books.gif";
import cons from "./Logo/image/cons.png";
import geology from "./Logo/image/geology.png";
import hospital from "./Logo/image/hospital.gif";
import laptop from "./Logo/image/laptop.gif";
import presentation from "./Logo/image/presentation.gif";
import social_media from "./Logo/image/social-media.gif";
import React from 'react';

function StartPage() {
  let navigate = useNavigate();
  function goPurchase() {
    navigate("/dashboard");
  }
  return (
    <div className="">
      
        <Button onClick={goPurchase} className="btn btn-dark text-right px-5 mx-5 my-5 button_front">
          Get Started <img src={geology} class="ml-3" alt="" />
        </Button>
      
      <Row className="tobBody">
        <Col lg={6}>
          <h1 className="text-justify p-xl-5 p-3 my-2 my-xl-5 mx-3 toptx">
            <b>Vacation Rental Data</b> to Set You Apart. Insights to Keep You
            Ahead.
          </h1>
          <h3 className="text-justify p-xl-5 p-3 text-muted">
            Aireasy will be the next generation of real-time analytics which
            will provide a one-stop solution in the property management
            industry.
          </h3>
        </Col>
      </Row>
      <div className="topMidBody">
        <Col className="p-md-5">
          <Row>
            <Col xl={6} className="my-xl-5 ms-5 p-5 me-1">
              <p className="text-dark h1  ps-xl-5 ms-xl-5 mt-2 pt-2 mt-xl-5 pt-xl-5">
                Smart decisions start with better intelligence.
              </p>
              <p className="text-muted p-2 ps-xl-5 ms-5 h6">
                Powered by over 10 million global properties on Airbnb and Vrbo
                in 120,000 global markets, MarketMinder is the #1 leading
                platform for short-term rental intelligence.
              </p>
              <p className="text-muted p-2 ps-xl-5 ms-5 h6">
                Use MarketMinder to discover where to invest, set the perfect
                price every day, and stay two steps ahead of the competition.
              </p>
            </Col>
            <Col xl={5} className=" pb-3">
              <img
                src={laptop}
                class="w-50 d-block mx-auto bg-card rounded-circle img_margin img-fluid"
                alt=""
              />
            </Col>
          </Row>
        </Col>
      </div>
      <div class="container my-5">
        <Row>
          <Card className="border-0 bg-transparent optionCard mx-auto">
            <Card.Img src={presentation} className="d-block mx-auto w-75" />
            <Card.Body>
              <h3 className="py-2 text-center">Market Research</h3>
              <p className="py-2  text-center">
                Gain valuable insights on the performance of your market and
                understand exactly how the short-term rental industry is
                evolving.
              </p>
            </Card.Body>
          </Card>
          <Card className="border-0 bg-transparent optionCard mx-auto">
            <Card.Img src={social_media} className="d-block mx-auto w-75" />
            <Card.Body>
              <h3 className="py-2 text-center">Dynamic Pricing</h3>
              <p className="py-2  text-center">
                Connect listings to optimize and automate your vacation rental
                pricing strategy.
              </p>
            </Card.Body>
          </Card>
          <Card className="border-0 bg-transparent optionCard mx-auto">
            <Card.Img src={hospital} className="d-block mx-auto w-75" />
            <Card.Body>
              <h3 className="py-2 text-center">Real Estate Investing</h3>
              <p className="py-2  text-center">
                See the investment potential of any address or market and use
                smart valuation tools to inform your next decision.
              </p>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <div className="body">
        <div class="container my-5 py-5">
          <Row>
            <Col lg={6}>
              <p className="text-dark h1 p-3">
                Custom data for next-level business insights
              </p>
              <p className="text-muted p-2 ps-5 h6">
                Powered by over 10 million global properties on Airbnb and Vrbo
                in 120,000 global markets, MarketMinder is the #1 leading
                platform for short-term rental intelligence.
              </p>
              <p className="text-muted p-2 ps-5 h6">
                Enterprise data is downloadable, delivered as requested, and
                comes with expert account management.
              </p>

              <a
                className="btn btn-dark float-right px-5 mx-auto mt-5 button_front"
                href=""
              >
                Discover Enterprise Solution{" "}
                <img src={geology} class="ml-3" alt="" />
              </a>
            </Col>
            <Col md={6} className="">
              <img src={cons} class="w-75 d-block mx-auto rounded" alt="" />
            </Col>
          </Row>
        </div>
      </div>
      <div class="container my-5 py-5">
        <Row>
          <Col md={6} className="">
            <img src={books} class="w-75 d-block mx-auto rounded" alt="" />
          </Col>
          <Col lg={6}>
            <p className="text-dark h1 p-3">
              Ready to build your short-term rental business?
            </p>
            <p className="text-muted p-2 h6">
              AirDNA is the world's most trusted resource for vacation rental
              research. Check out our full library of educational videos,
              industry reports, blogs, and case studies to take the next step on
              your short-term rental journey.
            </p>

            <a
              className="btn btn-dark float-right px-5 mx-auto mt-5 button_front"
              href=""
            >
              View all resources <img src={geology} class="ml-3" alt="" />
            </a>
          </Col>
        </Row>
      </div>
      <div class="my-5 py-5 body">
        <h1 className="text-center text-dark py-2">
          Get started with Market
          <br />
          Minder today.
        </h1>
        <p className="text-center text-dark h5 py-2">
          With powerful easy to use tools, it's never been easier to dig deeper
          into
          <br />
          vacation rental data to keep you above the competition in a saturated
          market.
        </p>
      </div>
    </div>
  );
}
export default StartPage;
