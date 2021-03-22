import React from "react";
import styled from "styled-components";

let baseFontSize = "18px";
let bkgdColor = "#efefef";
let lineLength = "750px";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;

  color: black;
  font-size: ${baseFontSize};
`;

const Title = styled.header`
  font-size: 1.5em;
  background-color: ${bkgdColor};

  margin: 0 auto;
  width: 100vw;

  h1,
  h2 {
    margin: 0;
    text-align: flex-start;
    padding-left: 50px;
  }
`;

const Text = styled.div`
  font-size: 1em;
  background-color: ${bkgdColor};

  margin: 2em auto;
  width: 100vw;
  p {
    padding-left: 50px;
    max-width: ${lineLength};
  }
`;

const Intro = () => {
  return (
    <Content>
      <Title>
        <h1>NJ Watershed Adapt</h1>
      </Title>
      <Title>
        <h2>Overview</h2>
      </Title>
      <Text>
        <p>
          This portal provides scientifically verified data and management
          scenarios due to climate change in the landscapes primarily related to
          water resources.
        </p>
        <p>
          The data and scenarios are generated based on the hydrology/water
          quality model (i.e. physically based semi-distributed model). The data
          and scenarios provided in this portal highlight the potential impacts
          of climate change on hydrology and water quality in the watershed as
          well as various adaptation strategies. This data can be used by
          variety of target audiences such as researchers, policymakers, NRCS
          personnel, watershed associations and municipalities.
        </p>
        <p>
          Understanding the potential impacts of climate change will help inform
          policy and planning for better climate resilient strategies on water
          resources.
        </p>
      </Text>
    </Content>
  );
};

export default Intro;
