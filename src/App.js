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

const Container = styled.div``;

const Page = styled.div``;

const HeaderContainer = styled.div`
  z-index: 100;
`;

const SidebarCntnr = styled.div`
  z-index: 10;
`;

const Content = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  float: left;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const App = () => {
  return (
    <Container>
      <Page>
        <Router>
          <HeaderContainer>
            <RutgersHeader />
            <UnitHeader />
          </HeaderContainer>
          <SidebarCntnr>
            <Sidebar />
            <Switch>
              <Route path="/overview" exact component={Overview} />
              <Route path="/reports" exact component={Reports} />
              <Route path="/reports/reports1" exact component={ReportsOne} />
              <Route path="/reports/reports2" exact component={ReportsTwo} />
            </Switch>
          </SidebarCntnr>
          {/* <Content> */}
          {/* <Image></Image> */}
          {/* <Intro /> */}
          {/* </Content> */}
          {/* <RutgersFooter /> */}
        </Router>
      </Page>
    </Container>
  );
};

export default App;
