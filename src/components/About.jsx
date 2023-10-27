import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="../Assets/About/Mission.webp"
              className="img-fluid"
              alt="Mission"
            />
          </div>
          <div className="col-lg-6 background">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 Header">
              Mission
            </h1>
            <p className="lead text">
              Our mission is to provide innovations to bridge the gaps between
              medicine and the communities we serve to promote more equitable,
              trauma-informed, patient-centered care.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="../Assets/About/Mission.webp"
              className="img-fluid"
              alt="Mission"
            />
          </div>
          <div className="col-lg-6 background">
            <h1 className="display-5 fw-bold lh-1 mb-3 Header">Mission</h1>
            <p className="lead text">
              Our mission is to provide innovations to bridge the gaps between
              medicine and the communities we serve to promote more equitable,
              trauma-informed, patient-centered care.
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-4 background">
          <h1 className="display-5 fw-bold lh-1 mb-3 Header">Vision</h1>
          <p className="lead text">
            Through our innovations, we hope to disrupt the current practice of
            medicine and establish a new standard of care that involves social
            and community services to effectively address social and structural
            determinants of health.
          </p>
        </div>
        <div className="col-10 col-sm-8 col-lg-8">
          <img src="../Assets/About/Vision.webp" alt="Vision" height="600" />
        </div>
      </div>

      {/* Mo */}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-4">
          <img src="../Assets/About/Mo.webp" alt="Mo" />
        </div>
        <div className="col-lg-8 background">
          <h1 className="display-5 fw-bold lh-1 mb-3 Header">
            Maurice Hicks Jr.
          </h1>
          <h2 className="card-subtitle"></h2>
          <p className="lead text">
            Our mission is to provide innovations to bridge the gaps between
            medicine and the communities we serve to promote more equitable,
            trauma-informed, patient-centered care.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <a href="http://www.linkedin.com/in/mhicksjr">
                  <img
                    src="../Assets/About/Linkedin.svg"
                    alt="Linkedin"
                    height="30px"
                  />
                </a>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <a href="https://www.instagram.com/mohicks_md/">
                  <img
                    src="../Assets/About/Instagram.svg"
                    alt="Instagram"
                    height="30px"
                  />
                </a>
              </button>
            </div>
            <small className="text-body-secondary">
              hicks@vertexmedsolutions.com
            </small>
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div className="container-fluid Board">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src="../Assets/About/Derek Rucker.webp" alt="Derek Rucker" />
              <div className="card-body">
                <h5 className="card-title">Derek Rucker</h5>
                <h6 className="card-subtitle text-body-secondary mb-2">
                  Chief Technology Officer, StoryForge
                </h6>
                <p className="card-text">
                  Derek Rucker is a successful tech entrepreneur, angel
                  investor, pilot, and data geek. He had a successful exit from
                  his startup Carrot Health, which was acquired by UniteUS in
                  August 2021. His current venture is StoryForge, which he
                  started with his daughter Sabrina in 2022. He is an active
                  angel investor with a focus on Minnesota startups. He loves
                  big data, AI, machine learning, and Dungeons & Dragons.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other cards */}
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default About;
