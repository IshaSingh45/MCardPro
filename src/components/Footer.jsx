import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="bg-gray-400 dark:bg-gray-900 dark:text-gray-400">
      <br/><br/>
      <footer className="w-[80%] mx-auto">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 px-2 md:grid-cols-4">
          <div>
            {/* <h5 className="mt-4 text-lg font-semibold dark:text-gray-200">
              Company
            </h5> */}
            {/* <p>
              <Link to="/">About</Link>
            </p>
            <p>
              <Link to="/">Awards</Link>
            </p>
            <p>
              <Link to="/">Contact us</Link>
            </p>
            <p>
              <Link to="/">Bus Terminals</Link>
            </p> */}
          </div>
          <div>
            {/* <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
              Exerience
            </h5>
            <p>
              <Link to="/">Tour Moments</Link>
            </p>
            <p>
              <Link to="/">Academy</Link>
            </p>
            <p>
              <Link to="/">Safety</Link>
            </p>
            <p>
              <Link to="/">FAQs</Link> */}
            {/* </p> */}
          </div>
          <div>
            {/* <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
              Terms
            </h5>
            <p>
              <Link to="/">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/">Terms & Condition</Link>
            </p> */}
          </div>
          <div>
            {/* <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
              Connect
            </h5> */}
            {/* <Link to="https://www.twitter.com/">
              <FontAwesomeIcon
                className="mt-1 mr-3 text-lg text-blue-800"
                icon={faTwitter}
              />
            </Link> */}
            {/* <Link to="https://www.facebook.com/">
              <FontAwesomeIcon
                className="mt-1 mr-3 text-lg text-blue-800"
                icon={faFacebook}
              />
            </Link> */}
            {/* <Link to="https://wa.me/">
              <FontAwesomeIcon
                className="mt-1 mr-3 text-lg text-red-800"
                icon={faInstagram}
              />
            </Link> */}
            {/* <Link to="https://www.instagram.com/">
              <FontAwesomeIcon
                className="mt-1 mr-3 text-lg text-green-800"
                icon={faWhatsapp}
              />
            </Link> */}
            {/* <p className="mt-4">Download Our App</p>
            <div className="">
              <Link to="/">
                <img
                  src="/images/playstore.png"
                  alt="Google playstore"
                  className="inline h-8 w-16 md:w-20"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/appstore.png"
                  alt="Appstore"
                  className="md:w-26 inline h-11 w-24"
                />
              </Link>
            </div> */}
          </div>
        </div>
        <p className="p-3 text-center">
          Copyright &copy; {getYear()}. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
