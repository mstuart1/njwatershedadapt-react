// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo } from "./pages/Reports";
import RutgersHeader from "./components/RutgersReactComponents/RutgersHeader";
import UnitHeader from "./components/RutgersReactComponents/UnitHeader";
import RutgersFooter from "./components/RutgersReactComponents/RutgersFooter";
import Intro from "./components/Intro";
import styled from "styled-components";

const Container = styled.div`
  // display: flex;
`;

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <RutgersHeader />
          <UnitHeader />
          <Sidebar />
          <Switch>
            <Route path="/overview" exact component={Overview} />
            <Route path="/reports" exact component={Reports} />
            <Route path="/reports/reports1" exact component={ReportsOne} />
            <Route path="/reports/reports2" exact component={ReportsTwo} />
          </Switch>
          <Intro />
          <RutgersFooter />
        </Container>
      </Router>
    </>
  );
};

export default App;
