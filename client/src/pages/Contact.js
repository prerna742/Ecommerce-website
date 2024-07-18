import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const ContactPage = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contact contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we are 24X7
            Available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@pgroup.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0141-2546199
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Toll Free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
