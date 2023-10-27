import React from "react";

const Home = () => {
  return (
    <>
      <div className="border-bottom border-dark hero">
        <video autoPlay loop muted playsInline className="back-video">
          <source src="Assets/Vertex.mp4" type="video/mp4" />
        </video>

        <div className="px-4 py-5 my-5 text-center">
          <img
            src="Assets/Brand-Label.svg"
            alt="Logo"
            height="50"
            id="hero-pic"
          />
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Our solutions address healthcare disparities by assisting
              healthcare systems in bridging the gaps between the care they
              provide and the various needs of the vulnerable communities they
              serve.
              <br />
              <br />
              Our flagship product, the Vertex 360 Platform, provides
              psychosocial tools and community resources for interdisciplinary
              healthcare teams to provide the highest quality of holistic care.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Vertex 360 Platform</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="Assets/Psychosocial-Assessment-Tool.svg"
                alt="Psychosocial-Assessment-Tool"
                height="100"
                className="Feature"
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Psychosocial Assessment Tool
            </h3>
            <p>
              Validated screening tools to assess social risks and the impacts
              of trauma
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="Assets/Trauma-Informed-Care-Plan.svg"
                alt="Trauma-Informed-Care-Plan"
                height="100"
                className="Feature"
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Trauma-Informed Care Plan
            </h3>
            <p>
              Trauma-Informed Questionnaire to promote sensitive,
              patient-centered care.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="Assets/Psychosocial-Resource-Platform.svg"
                alt="Psychosocial-Resource-Platform"
                height="100"
                className="Feature"
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Psychosocial Resource Platform
            </h3>
            <p>
              Network of evidence-based, accessible psychosocial resources
              within the communit
            </p>
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette" style={{ marginRight: "0px" }}>
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Psychosocial Assessment Tool
          </h2>
          <p className="lead">
            The Psychosocial Assessment Tool includes a social screening
            questionnaire based on the 5 social determinants of health domains
            that community services can help with: housing, food,
            transportation, health, utilities, interpersonal violence. It also
            assesses for impacts of trauma in a trauma-informed manner that
            resists retraumatization of the patient.
          </p>
        </div>
        <div className="col-md-5">
          <img src="Assets/Featurette-1.webp" alt="Featurette-1" height="400" />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette" style={{ marginRight: "0px" }}>
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Trauma-Informed Care Plan
          </h2>
          <p className="lead">
            Patient completes a trauma-informed questionnaire that physicians
            can use to implement patient-centered, trauma-informed care during
            clinical encounters. With a mix of open-ended questions on trauma
            history and targeted questions on pertinent factors such as triggers
            and coping skills, the trauma-informed care plan promotes more
            sensitive, personalized, holistic care.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src="Assets/Featurette-2.webp" alt="Featurette-2" height="400" />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette" style={{ marginRight: "0px" }}>
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Psychosocial Resource Platform
          </h2>
          <p className="lead">
            The Psychosocial Resource Platform connects community-based
            organizations and social services with various care settings to
            provide automated, well-curated, evidence-based interventions to the
            psychosocial risk factors assessed during the visit. This network of
            resources allows for higher quality care by connecting organizations
            and services that play a role in caring for the health of our
            communities.
          </p>
        </div>
        <div className="col-md-5">
          <img src="Assets/Featurette-3.webp" alt="featured-3" height="400" />
        </div>
      </div>
    </>
  );
};

export default Home;
