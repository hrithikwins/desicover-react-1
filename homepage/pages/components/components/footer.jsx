import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";
import "./footer.sass";

const SubFooter = (props) => {
  const { title, subTitles } = props;
  return (
    <div className="">
      <h5 className="px-2">{title}</h5>
      <div className="d-flex px-2 flex-column justify-content-center"> {subTitles.map((t) => (
          <p className="px-1">{t}</p>
        ))}
      </div>
    </div>
  );
};

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-background">
        <div className="d-md-flex flex-row justify-content-evenly pt-5">
          <div className="d-flex flex-column align-items-md-start align-items-center order-1">
            <img src={logo} alt="" className="py-2" />
            <p>The Daana Paani Grocery Store</p>
            <p>
              Ethnic grocery store offering diverse
              <br /> range of Indian 🇮🇳 | Bangladeshi 🇧🇩 <br />| Pakistani 🇵🇰 |
              Sri Lankan 🇱🇰 products.
            </p>
            <div className="d-flex d-md-none">
              <a href="/privacy" className="mx-2">
                Terms and conditions
              </a>
              <a href="/privacy" className="mx-2">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="order-3 p-4 px-md-0">
            <h5>Get our newsletters:</h5>
            <div className="input-group rounded">
              <input type="text" className="form-control" />
              <button className="btn btn-dark" type="submit">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
            <div className="d-flex d-none d-md-block">
              <a href="/privacy" className="mx-2">
                Terms and conditions
              </a>
              <a href="/privacy" className="mx-2">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row px-md-4 order-2 justify-content-evenly">
            <SubFooter
              title={"Company"}
              subTitles={["About", "Store", "FAQ"]}
            />
          </div>
          <div className="d-flex flex-column flex-md-row px-md-4 order-2 justify-content-evenly">
            <SubFooter
              title={"Service"}
              subTitles={["Delivery", "Contact", "Payment"]}
            />
          </div>
          <div className="d-flex flex-column flex-md-row px-md-4 order-2 justify-content-evenly">
            <SubFooter
              title={"Follow us"}
              subTitles={["Instagram", "Facebook", "Twitter"]}
            />
          </div>
        </div>

        {/* <div className="d-flex justify-content-center align-content-center">

          <p>Made with &#128151; at Swift Media Labs</p>
      </div> */}
        <div className="d-flex justify-content-center align-content-center">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved |{" "}
            <a className="text-decoration-none  text-dark" href="https://www.swiftmedialabs.com/">Swift Media Labs</a>
          </p>
        </div>
      </div>
    );
  }
}
