import React from "react";
import Layout from "../components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout title={"About us - Ecommerce"}>
      <div className="row contactus about ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="Aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <h4 className="text-justify text-center ">
            Our mission is to provide best product and services.
          </h4>
          <p className="text-justify text-center ">
             PRIGITAL is a new P Group website dreamt to provide best digital products.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
