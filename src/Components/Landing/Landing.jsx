import React from "react";
import Slick from "./Slick";
import mapimage from "../Images/cloudstry map.png";
// import '../Landing/Landing.css'
import staffingimage from "../Images/staffing sol.jpg";
import softwareimage from "../Images/software services.jpg";
import strategyimage from "../Images/it strategy.jpg";
import { Link } from "react-router-dom";
import government from "../Images/government.jpeg";
import education from "../Images/Education.jpg";
import whycs from '../Images/why cs.jpg'
import "../Landing/Landing.css";

function Landing() {
  return (
    // <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
    //   <div className="text-center py-5 px-5">
    //     <div className="text-primary fw-light display-5">
    //       Home page is work in progess..
    //       <span>
    //         <i className="fa fa-spinner spinning" aria-hidden="true"></i>
    //       </span>

    //     </div>
    //   </div>
    //   <style jsx>{`
    //     .spinning {
    //       font-size: 3rem; /* Adjust size if needed */
    //       display: inline-block;
    //       animation: spin 2s linear infinite;
    //     }

    //     @keyframes spin {
    //       0% { transform: rotate(0deg); }
    //       100% { transform: rotate(360deg); }
    //     }
    //   `}</style>
    // </div>
    <div>
      <Slick />

      <section className=" service-section" style={{ marginTop: "5rem" }}>
        <div className="container">
          <div className="row g-4">
            <h1 className="fw-normal text-danger text-center mb-4 mt-5">
              Services We Offer{" "}
            </h1>
            <div className="col-12 col-md-4 service-card  ">
              <div className="position-relative shadow">
                <img
                  src={staffingimage}
                  alt="Native Plant Garden"
                  className="card-img-top rounded-3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body bg-light p-4">
                  <h4 className="card-title text-primary mb-3">
                    Comprehensive Staffing Solutions for Global Captive Centers
                  </h4>
                  <Link to="/Staffing-Solution" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 service-card">
              <div className="position-relative shadow">
                <img
                  src={softwareimage}
                  alt="Native Plant Garden"
                  className="card-img-top rounded-3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body bg-light p-4">
                  <h4 className="card-title text-primary mb-3">
                    End-to-End Software Solutions and Support Services
                  </h4>
                  <Link to="/Software-Services" className="btn btn-danger">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 service-card">
              <div className="position-relative shadow">
                <img
                  src={strategyimage}
                  alt="Native Plant Garden"
                  className="card-img-top rounded-3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body bg-light p-4">
                  <h4 className="card-title text-primary mb-3">
                    Holistic IT Strategy Consulting for Seamless Digital
                    Transformation
                  </h4>
                  <Link
                    to="/IT-Strategy-Consultancy"
                    className="btn btn-danger"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="image-video-text-interactivity is-reverse fadeInUp "
        style={{ marginTop: "9rem", marginBottom: "6rem" }}
      >
        <div className="container px-3 px-md-5 mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={532}
                src={whycs}
                alt="AGENT511 REACH Orchestration"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-normal fs-3 text-primary mb-4">
                Why Cloudstry Technologies ?
              </h3>
              <p className="mb-4" style={{ lineHeight: 1.375 }}>
                At Cloudstry Technologies, we recognize  business’s unique
                challenges and provide tailored solutions for sustainable growth
                and operational excellence. Our advanced technologies enhance
                efficiency, improve customer engagement, and position you at the
                industry’s forefront
              </p>
              <ul className="list-unstyled mb-4">
                <li className="ps-4 mb-3">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  Targeted Communication: Deliver precise, timely messages
                  across multiple channels, ensuring  customers stay
                  informed and engaged.
                </li>
                <li className="ps-4 mb-3">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  Seamless Integration: Our solutions integrate effortlessly
                  with  existing systems, maximizing efficiency and
                  minimizing disruption.
                </li>
                <li className="ps-4 mb-3">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  Advanced Automation: Streamline operations with intelligent
                  automation, reducing manual effort and increasing accuracy.
                </li>
                <li className="ps-4 mb-3">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  Robust Security: Protect sensitive data with our
                  state-of-the-art security features, ensuring compliance and
                  peace of mind.
                </li>
                <li className="ps-4">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  Scalable Solutions:  business grows, our solutions grow
                  with you, adapting to  evolving needs without compromising
                  performance.
                </li>
              </ul>
              <Link
                className="btn btn-danger text-white rounded-pill"
                to="/Support"
              >
                Connect with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="text-center mb-5">
          <p
            className="display-5 text-primary mb-4 text-danger"
            style={{ letterSpacing: "0.6px" }}
          >
            Discover Our Impact on Public Services and Education.
          </p>
        </div>
        <div className="d-flex flex-wrap mb-3">
          <div className="row">
            <div className="col-lg-7 mb-4">
              <div className="bg-light rounded p-4">
                <h2
                  className="font-weight-bold mb-3"
                  style={{
                    fontFamily: "ATCArquette-Regular",
                    fontSize: "36px",
                    color: "rgb(14, 50, 206)",
                  }}
                >
                  We drive innovation in essential services and cutting-edge
                  education.
                </h2>
                <p
                  className="font-weight-semibold"
                  style={{ fontFamily: "ATCArquette-Semibold" }}
                >
                  Our expertise spans critical public services and advanced
                  learning environments, driving innovation and excellence
                  across these vital areas.
                </p>

                <div className="col-lg-8 mb-4 mt-4">
                  <Link
                    to="/Education"
                    className="text-decoration-none text-primary"
                  >
                    <div className="position-relative rounded overflow-hidden mb-3">
                      <img
                        src={education}
                        alt="Case Study"
                        className="img-fluid img-hover"
                      />
                      <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                        <li
                          className="bg-transparent text-white fw-bold border rounded-pill py-1 px-2 me-2 mb-2"
                          style={{
                            fontSize: "14px",
                            // fontFamily: "ATCArquette-Semibold",
                          }}
                        >
                          Education
                        </li>
                      </ul>
                    </div>
                    <div className="ps-2">
                      <h3
                        className="font-weight-bold mb-2"
                        style={{
                          fontFamily: "ATCArquette-Medium",
                          fontSize: "24px",
                          color: "rgb(53, 53, 53)",
                        }}
                      >
                        Empowering tomorrow’s leaders with transformative
                        technology for enhanced learning experiences.
                      </h3>
                      <p
                        class=" transparent mt-2 "
                        style={{
                          fontFamily: "ATCArquette-Medium",
                          fontSize: "16px",
                        }}
                      >
                        <Link to="/Education" className="text-danger ">
                          Visit more
                        </Link>
                        <i
                          class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mb-4">
              <Link
                to="/Government"
                className="text-decoration-none text-primary"
              >
                <div className="position-relative rounded overflow-hidden mb-3">
                  <img
                    src={government}
                    alt="Case Study"
                    className="img-fluid img-hover"
                    style={{ width: "100%" }}
                  />
                  <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                    <li
                      className=" text-white fw-bold border rounded-pill py-1 px-2 me-2 mb-2"
                      style={{
                        fontSize: "14px",
                        // fontFamily: "ATCArquette-Semibold",
                        background: "transparent",
                      }}
                    >
                      Government
                    </li>
                  </ul>
                </div>
                <div className="ps-2">
                  <h3
                    className="font-weight-bold mb-2"
                    style={{
                      fontFamily: "ATCArquette-Medium",
                      fontSize: "24px",
                      color: "rgb(53, 53, 53)",
                    }}
                  >
                    Enhancing public services with cutting-edge solutions that
                    drive efficiency and transparency.
                  </h3>
                  <p
                    class=" transparent mt-2 "
                    style={{
                      fontFamily: "ATCArquette-Medium",
                      fontSize: "16px",
                    }}
                  >
                    <Link to="/Government" className="text-danger ">
                      Visit more
                    </Link>
                    <i
                      class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section
        className="image-video-text-interactivity is-reverse fadeInUp"
        style={{ marginBottom: "5rem" }}
      >
        <div className="container px-3 px-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                className="img-fluid rounded-3"
                src={mapimage}
                alt="Global Presence"
                style={{ marginTop: "-3px" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-light fs-2 text-primary mb-3">
                Our Global Presence
              </h3>
              <p className="mb-4 text-muted" style={{ lineHeight: 1.375 }}>
                Cloudstry Technologies operates on a global scale, providing
                exceptional services and solutions that cater to diverse
                markets. Our international footprint ensures that we deliver
                impactful results and long-term support across various regions.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Global Network: </span>
                    Connecting clients and partners worldwide through a
                    collaborative network.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Localized Expertise: </span>
                    Providing tailored solutions that address specific regional
                    challenges and opportunities.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Ongoing Global Support: </span>
                    Ensuring continuous assistance to support international
                    business growth and success.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Innovative Global Solutions: 
                    </span> Utilizing cutting-edge technologies to deliver effective and
                    efficient outcomes worldwide.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Strategic International Partnerships:
                    </span> Forming alliances to enhance the value and impact of our
                    global services.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 order-md-1 order-2">
              <h3 className="text-primary fw-normal mb-3">
                Strategic Solutions for Business Growth
              </h3>
              <p className="text-muted">
                At Cloudstry Technologies, we understand the unique challenges
                 business faces and offer solutions designed to drive
                sustainable growth and operational excellence. Our advanced
                technologies are tailored to meet  specific needs, enabling
                you to enhance efficiency, improve customer engagement, and
                secure  place at the forefront of  industry.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Targeted Communication:</strong> Deliver precise,
                    timely messages across multiple channels, ensuring 
                    customers stay informed and engaged.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Seamless Integration:</strong> Our solutions
                    integrate effortlessly with  existing systems,
                    maximizing efficiency and minimizing disruption.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Advanced Automation:</strong> Streamline operations
                    with intelligent automation, reducing manual effort and
                    increasing accuracy.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Robust Security:</strong> Protect sensitive data
                    with our state-of-the-art security features, ensuring
                    compliance and peace of mind.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Scalable Solutions:</strong> As  business grows,
                    our solutions grow with you, adapting to  evolving needs
                    without compromising performance.
                  </span>
                </li>
              </ul>
              <p className="text-muted">
                Our solutions are designed to help you scale effectively,
                ensuring you remain competitive and innovative.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-md-end mb-3 mt-4 mt-md-0 order-md-2 order-1">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={strategyimage}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
