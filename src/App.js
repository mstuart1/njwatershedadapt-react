import image from "./OswegoRiver_2015.jpeg";
// import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// import Overview from "./pages/Overview";
// import { Reports, ReportsOne, ReportsTwo } from "./pages/Reports";
import RutgersHeader from "./components/RutgersReactComponents/RutgersHeader";
import UnitHeader from "./components/RutgersReactComponents/UnitHeader";
import RutgersFooter from "./components/RutgersReactComponents/RutgersFooter";
import Intro from "./components/Intro";
// import styled from "styled-components";

// const SidebarCntnr = styled.div`
//   z-index: 10;
// `;

// const Content = styled.div`
//   padding: 20px;
// `;

// const Image = styled.img`
//   float: left;
//   width: 300px;
//   height: 200px;
//   margin-right: 20px;
//   margin-bottom: 20px;
// `;

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
        <Sidebar />
        <Intro />
      </Page>

      {/* //   <Switch> */}
      {/* //     <Route path="/overview" exact component={Overview} /> */}
      {/* //     <Route path="/reports" exact component={Reports} /> */}
      {/* //     <Route path="/reports/reports1" exact component={ReportsOne} /> */}
      {/* //     <Route path="/reports/reports2" exact component={ReportsTwo} /> */}
      {/* //   </Switch> */}
      {/* // </SidebarCntnr> */}
      {/* // <Content> */}
      {/* // <Image></Image> */}

      {/* // </Content> */}
      <RutgersFooter />
    </Router>
    // </Page>
    // </Container>
  );
};

export default App;
