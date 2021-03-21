// import logo from './logo.svg';
// import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// import Overview from "./pages/Overview";
// import { Reports, ReportsOne, ReportsTwo } from "./pages/Reports";
import RutgersHeader from "./components/RutgersReactComponents/RutgersHeader";
import UnitHeader from "./components/RutgersReactComponents/UnitHeader";
// import RutgersFooter from "./components/RutgersReactComponents/RutgersFooter";
// import Intro from "./components/Intro";
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
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentTest = styled.div`
  border: 1px solid black;
  background-color: blue;
  height: 200px;
  flex: 1;
`;

const App = () => {
  return (
    <Router>
      <HeaderContainer>
        <RutgersHeader />
        <UnitHeader />
      </HeaderContainer>
      <Page>
        <Sidebar />
        <ContentTest></ContentTest>
      </Page>
      {/* // <SidebarCntnr> */}

      {/* //   <Switch> */}
      {/* //     <Route path="/overview" exact component={Overview} /> */}
      {/* //     <Route path="/reports" exact component={Reports} /> */}
      {/* //     <Route path="/reports/reports1" exact component={ReportsOne} /> */}
      {/* //     <Route path="/reports/reports2" exact component={ReportsTwo} /> */}
      {/* //   </Switch> */}
      {/* // </SidebarCntnr> */}
      {/* // <Content> */}
      {/* // <Image></Image> */}
      {/* // <Intro /> */}
      {/* // </Content> */}
      {/* // <RutgersFooter /> */}
    </Router>
    // </Page>
    // </Container>
  );
};

export default App;
