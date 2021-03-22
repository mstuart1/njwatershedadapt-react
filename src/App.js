import image from "./OswegoRiver_2015.jpeg";
// import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { sidebarData } from "./components/sidebarData";
import Streamflow from "./pages/upper_salem_river/model_performance/streamflow";
import RutgersHeader from "./components/RutgersReactComponents/RutgersHeader";
import UnitHeader from "./components/RutgersReactComponents/UnitHeader";
import RutgersFooter from "./components/RutgersReactComponents/RutgersFooter";
import Intro from "./components/Intro";

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1px;
  background-image: url(${image});
  background-size: cover;
`;

const App = () => {
  return (
    <Router>
      <RutgersHeader />
      <UnitHeader />
      <Page>
        <Sidebar sidebarData={sidebarData} />
        <Switch>
          {/* {sidebarData.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))} */}
          <Route exact path="/" component={Intro} />
          <Route
            exact
            path="/upper_salem_river/model_performance/streamflow"
            component={Streamflow}
          />
        </Switch>
      </Page>

      <RutgersFooter />
    </Router>
  );
};

export default App;
