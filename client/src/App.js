// import './App.css';

import { Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Docs,
  Donation,
  Games,
  Register,
  ShareInfo,
  GameDetail,
  LoginView
} from "./views";
import DashboardAdmin from "./component/DashboardAdmin/DashboardArdmin";
import NavBar from "./component/NavBar/NavBar";
import ChatBox from "./component/Chatbox/Chatbox"
import axios from "axios";
import { PageNotFound } from "./component/PageNotFound/PageNotFound";
import DocDetail from "./views/DocDetail/DocDetail";
// import style from './App.module.

axios.defaults.baseURL = "https://back-henrygame.up.railway.app";

function App() {
  // const location = useLocation();

  return (
    <div>
      <NavBar />

      <ChatBox />

      <Switch>
        <Route exact path="/" render={() => <Home />} />

        <Route exact path="/games">
          <Games />
        </Route>

        <Route exact path="/games/:id">
          <GameDetail />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/docs">
          <Docs />
        </Route>

        <Route exact path="/doc/:id">
          <DocDetail />
        </Route>

        <Route exact path="/docs/share">
          <ShareInfo />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/donation">
          <Donation />
        </Route>

        <Route exact path="/login">
          <LoginView />
        </Route>
        <Route exact path="/dashboardAdmin">
            <DashboardAdmin/>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
