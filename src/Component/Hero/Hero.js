import React from "react";

const Hero = () => {
  return (
    <section className="py-12 overflow-hidden" id="banner">
      {/*/.bg-holder*/}
      <div
        style={{
          backgroundImage:
            "url(/business-woman-making-presentation-office.jpg)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          width: "100%",
          height: "500px",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="row justify-content-center align-items-center pt-9 pt-lg-8 pb-5 mb-8 mt-8">
          <div className="col-md-11 col-lg-12 col-xl-12 pb-3 pb-xl-3 text-center text-xl-center">
            <h1
              className="font-weight-bold text-white"
              style={{ fontSize: "55px" }}
            >
              Premium Guest Posting{" "}
              <span style={{ color: "yellow" }}>Services</span>
            </h1>
            <h3 className="mb-1 text-white font-weight-bold">
              Get <span style={{ color: "yellow" }}>Backlinks</span> From
              High-Quality Websites
            </h3>
            <h4 className="mb-1 text-white mt-2">
              Only Pay If You Are Satisfied With The Results
            </h4>
            <a
              href="/register-1"
              className="btn fs-0 rounded btn-lg mr-2 mt-3 btn-light"
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Sign Up Now
            </a>
            <a
              href="/#viewPricing"
              className="btn fs-0 rounded btn-lg mr-2 mt-3 btn-primary  ml-2"
            >
              <i className="fas fa-money-check-alt mr-2"></i> View Pricing
            </a>
            <h6 className="mb-3 mt-2 ml-n3 text-white">
              <span style={{ color: "yellow" }}>*</span> Starting From
              <span className="font-weight-bold" style={{ color: "yellow" }}>
                $4.99
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
