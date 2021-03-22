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

  margin: 0 auto;
  width: 100vw;

  padding-left: 50px;
  max-width: ${lineLength};
`;

const Streamflow = () => {
  return (
    <Content>
      <Text>
        <h1>Streamflow</h1>
        <p>
          {" "}
          A hydrology/water quality model known as SWAT (Soil and Water
          Assessment Tool) is used to understand the potential impacts of
          climate change on streamflow. The SWAT model is calibrated and
          validated using a model evaluation parameter called NSE (Nash-Sutcliff
          efficiency) before using it for different climate change scenarios.
          The blue color solid line is the observed monthly average streamflow
          from the Upper Salem River Watershed whilst the dotted red line is the
          model predicted streamflow. From the figure it is clear that both
          solid and dotted lines are matching quite well. Additionally, the
          model evaluation parameter (i.e. NSE) is 0.76 which is higher than 0.5
          (recommended). This suggests that the hydrologic model is very good
          for predicting streamflow in this watershed. However, few peaks of
          streamflow are not matched well by model which may be due to
          measurement error with precipitation and streamflow in the field
          combined with inability of the model to capture the sudden increase
          and decrease of streamflow during storm event.{" "}
        </p>

        <p>
          The blue color solid line is the observed monthly average streamflow
          from the Upper Salem River Watershed whilst the red dotted line is the
          model predicted streamflow. From the figure it is clear that both
          lines are matching quite well. Additionally, the model evaluation
          parameter (i.e. NSE) is 0.76 which is higher than 0.5 (recommended).
          This suggests that the hydrologic model is very good for predicting
          streamflow in this watershed. However, few peaks of streamflow are not
          matched well by model which may be due to measurement error with
          precipitation and streamflow in the field combined with inability of
          the model to capture the sudden increase and decrease of streamflow
          during storm event.
        </p>
      </Text>
    </Content>
  );
};

export default Streamflow;
