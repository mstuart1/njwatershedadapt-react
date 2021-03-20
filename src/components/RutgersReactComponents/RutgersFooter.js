import React from "react";
import Config from "./crssaConfig";

// for Css used
/* <link rel="stylesheet" href="https://sebs.rutgers.edu/2019/css/foundation.min.css" />
    <link rel="stylesheet" href="https://sebs.rutgers.edu/2019/css/sebs.min.css" />
    <link rel="stylesheet" href="https://sebs.rutgers.edu/2019/css/sebs-unit.min.css" /> 
    <script src="https://kit.fontawesome.com/47417a6db9.js" crossorigin="anonymous"></script>
    */

const Footer = () => {
  return (
    <footer id="footer-wrapper">
      <div id="footer1-wrapper" className="grid-container full">
        <div id="footer1" className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6 large-5">
            <h2>Contact</h2>

            <p id="address" className="icon i-location">
              {Config.UNIT_NAME}
              <br />
              {Config.SCHOOL_NAME}
              <br />
              {Config.RUTGERS}
              <br />
              {Config.STREET_ADDRESS}
              <br />
              {Config.CITY_STATE_ZIP}
              <br />
              <a href="https://maps.rutgers.edu/#/?selected=6006">
                {Config.BUILDING_NAME}
              </a>
              , {Config.CAMPUS}
              <br />
            </p>

            <ol id="phones" className="icon i-phone">
              <li>{Config.PHONE_NUMBER}</li>
            </ol>

            <ol id="social">
              <li>
                <a href="https://www.facebook.com/RutgersSEBS">
                  <i className="fab fa-facebook-square">
                    <span className="vh">Facebook</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/RutgersSEBS">
                  <i className="fab fa-instagram">
                    <span className="vh">Instagram</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RutgersSEBS">
                  <i className="fab fa-twitter">
                    <span className="vh">Twitter</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/RutgersSEBS">
                  <i className="fab fa-youtube-square">
                    <span className="vh">YouTube</span>
                  </i>
                </a>
              </li>
            </ol>

            <p id="webmaster">Webmaster: {Config.WEB_MASTER}</p>
          </div>

          <div className="cell small-12 medium-6 large-5">
            <h2>Related Units</h2>

            <ol className="lined">
              <li>
                <a href="https://www.rutgers.edu">
                  Rutgers, The State University of New Jersey
                </a>
              </li>
              <li>
                <a href="https://newbrunswick.rutgers.edu">
                  Rutgers&ndash;New Brunswick
                </a>
              </li>
              <li>
                <a href="https://sebs.rutgers.edu">
                  Rutgers School of Environmental and Biological Sciences
                </a>
              </li>
              <li>
                <a href="https://njaes.rutgers.edu">
                  Rutgers New Jersey Agricultural Experiment Station
                </a>
              </li>
              <li>
                <a href="https://execdeanagriculture.rutgers.edu">
                  Executive Dean of Agriculture &amp; Natural Resources
                </a>
              </li>
            </ol>
          </div>

          {/* <div className="cell small-12 medium-6 large-2">
            <a href="http://health.rutgers.edu/do-something-to-help/">
              <img
                className="lazyload campaign"
                src={
                   
                  "/ru-sebs/images/concerned-logo-m.png"
                }
                alt="Click to share a concern."
              />
            </a>
          </div> */}
        </div>
      </div>

      <div id="footer2-wrapper" className="grid-container full">
        <div id="footer2" className="grid-x grid-margin-x">
          <p>
            <a href="https://www.rutgers.edu/site-resource/copyright-information">
              Copyright &copy; 2020
            </a>{" "}
            Rutgers, The State University of New Jersey
          </p>

          <p id="accessibility">
            Rutgers University is an equal access/equal opportunity institution.
            Individuals with disabilities are encouraged to direct suggestions,
            comments, or complaints concerning any accessibility issues with
            Rutgers web sites to:{" "}
            <a href="mailto:accessibility@rutgers.edu">
              accessibility&#64;rutgers.edu
            </a>{" "}
            or complete the{" "}
            <a href="https://it.rutgers.edu/it-accessibility-initiative/barrierform/">
              Report Accessibility Barrier or Provide Feedback Form
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
