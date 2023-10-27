import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="../Assets/CONTACT.webp" alt="Contact" />
          </div>
          <div className="col-lg-6" id="Form">
            <h1 className="display-5 lh-1 mb-3 Contact">
              Contact us for a demo or for more information!
            </h1>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="#" className="form-label">
                  First name
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Last name
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
