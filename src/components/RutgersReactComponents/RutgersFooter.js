import React from "react";
import { contactInfo } from "./contactInfo";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import styled from "styled-components";

// .footer-container {
const FooterCntnr = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-size: 14px;
  line-height: 1.2em;

  a:link,
  a:visited {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: white;
    text-decoration: underline;
  }
`;

const FooterOne = styled.div`
  display: flex;

  background-color: #666666;

  // .footer-1-container {
  //   max-width: 750px;
  //   display: flex;
  //   justify-contents: space-between;
  // }
`;

const FooterTwo = styled.div`
  display: flex;
  background-color: black;
  color: white;
  text-align: center;

  .footer-container {
    display: flex;
    justify-content: center;

    .copywrite {
      max-width: 500px;

      .michelle {
        font-size: 0.7em;
      }
    }
  }
`;

const FooterItem = styled.div`
  flex: 1;
  margin-bottom: 0;

  h3 {
    color: #fecd31;
    margin-top: 1em;
    margin-left: 1em;
    margin-bottom: 0.5em;
  }
`;

const Contact = styled.div`
  color: white;
`;

const Webmaster = styled.div`
  margin: 1em 2.5em;

  color: white;

  address {
    justify-content: flex-start;
    align-self: flex-start;
    font-style: normal;
  }
`;

const AddressIcon = styled.div`
  color: #fecd31;
  display: inline;
  margin: 0.5em 0.5em 0 1em;
`;

const AddressCntnr = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    padding-top: 0.5em;
    margin: 0;
  }
`;

// const Social = styled.div`
//   padding-top: 0;
//   padding-left: 20px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;

//   li {
//     display: inline;
//     margin-right: 10px;
//     font-size: 20px;
//   }
// `;

const RelatedLinks = styled.ul`
  display: flex;
  flex-direction: column;

  padding-left: 1em;

  li {
    list-style: none;
    padding-bottom: 0.5em;
  }
`;

const Footer = () => {
  return (
    <FooterCntnr>
      {/* <div className="footer-container"></div> */}
      <FooterOne>
        {/* <div className="footer-1-contianer"> */}
        <FooterItem>
          <Contact>
            <h3>Contact</h3>
            <AddressCntnr>
              <AddressIcon>
                <MdIcons.MdLocationOn />
              </AddressIcon>
              <p>
                {contactInfo.unitName}
                <br />
                {contactInfo.schoolName}
                <br />
                {contactInfo.rutgers}
                <br />
                {contactInfo.street}
                <br />
                {contactInfo.cityStateZip}
                <br />
                <a
                  href={`https://maps.rutgers.edu/#/?selected=${contactInfo.buildingNumber}`}
                >
                  {contactInfo.buildingName}
                </a>
                , {contactInfo.campus}
              </p>
            </AddressCntnr>
            <AddressCntnr>
              <AddressIcon>
                <AiIcons.AiFillPhone />
              </AddressIcon>
              <p>{contactInfo.phone}</p>
            </AddressCntnr>
          </Contact>
          {/* <Social>
            <ul>
              <li>
                <a href="https://www.facebook.com/RutgersSEBS">
                  <FaIcons.FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/RutgersSEBS">
                  <FaIcons.FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RutgersSEBS">
                  <FaIcons.FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/RutgersSEBS">
                  <FaIcons.FaYoutubeSquare />
                </a>
              </li>
            </ul>
          </Social> */}
          <Webmaster>
            <address>
              Webmaster:{" "}
              <a href={`mailto:${contactInfo.webMaster}`}>
                {contactInfo.webMaster}
              </a>
            </address>
          </Webmaster>
        </FooterItem>
        <FooterItem>
          <div className="related-units">
            <h3>Related Units</h3>
            <RelatedLinks>
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
            </RelatedLinks>
          </div>
        </FooterItem>
        {/* </div> */}
      </FooterOne>
      <FooterTwo>
        <FooterItem>
          <div className="footer-container">
            <div className="copywrite">
              <p>
                <a href="https://www.rutgers.edu/site-resource/copyright-information">
                  Copyright &copy; {new Date().getFullYear()}
                </a>{" "}
                Rutgers, The State University of New Jersey
              </p>

              <address id="accessibility">
                Rutgers University is an equal access/equal opportunity
                institution. Individuals with disabilities are encouraged to
                direct suggestions, comments, or complaints concerning any
                accessibility issues with Rutgers web sites to:{" "}
                <a href="mailto:accessibility@rutgers.edu">
                  accessibility&#64;rutgers.edu
                </a>{" "}
                or complete the{" "}
                <a href="https://it.rutgers.edu/it-accessibility-initiative/barrierform/">
                  Report Accessibility Barrier or Provide Feedback Form
                </a>
                .
              </address>

              <p className="michelle">
                This website was designed and developed by Michelle Stuart for
                the Office of Research Analytics, SEBS
              </p>
            </div>
          </div>
        </FooterItem>
      </FooterTwo>
    </FooterCntnr>
  );
};

export default Footer;
