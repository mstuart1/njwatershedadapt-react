import React from "react";
import image from "./OswegoRiver_2015.jpeg";
import styled from "styled-components";

const Background = styled.div`
  background-image: url(${image});
`;

const IntroDiv = styled.div`
  background-color: rgba(239, 239, 239, 0.75);
  font-family: sans-serif;
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  width: auto;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
  background: #efefef;
`;

const Intro = () => {
  return (
    <>
      <Background>
        <IntroDiv>
          <h1>NJ Watershed Adapt</h1>
        </IntroDiv>
      </Background>
      <Overview>
        <br />
        <h3>Overview</h3>
        <br />
        <p>
          This portal provides scientifically verified data and management
          scenarios due to climate change in the landscapes primarily related to
          water resources. The data and scenarios are generated based on the
          hydrology/water quality model (i.e. physically based semi-distributed
          model). The data and scenarios provided in this portal highlight the
          potential impacts of climate change on hydrology and water quality in
          the watershed as well as various adaptation strategies. This data can
          be used by variety of target audience such as researchers,
          policymakers, NRCS personnel, watershed associations and
          municipalities. Understanding the potential impacts of climate change
          will help inform policy and planning for better climate resilient
          strategies on water resources.
        </p>
      </Overview>
    </>
  );
};

export default Intro;
