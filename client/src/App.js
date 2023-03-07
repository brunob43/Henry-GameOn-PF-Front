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
} from "./views";
import NavBar from "./component/NavBar/NavBar";
import axios from "axios";
import { PageNotFound } from "./component/PageNotFound/PageNotFound";
import DocDetail from "./views/DocDetail/DocDetail";
import Footer from "./component/Footer/Footer";
import ChatBox from "./component/Chatbox/Chatbox"
import DashboardAdmin from "./component/DashboardAdmin/DashboardAdmin";
import Profile from "./views/Profile/Profile";
import EdiProfile from "./views/EdiProfile/EdiProfile";
import { useSelector } from "react-redux";
// import style from './App.module.

axios.defaults.baseURL = "https://back-henrygame.up.railway.app";

function App() {
  // const location = useLocation();
  const user = useSelector((state) => state.profile)

  console.log(user)

  return (
    <div>
      <Route exact path="/dashboardAdmin">
            <DashboardAdmin/>
        </Route>
      <NavBar />
      <ChatBox/>
      <Switch>
        <Route exact path="/" render={() => <Home />} />

        <Route exact path="/games">
          <Games />
        </Route>

        <Route exact path="/games/:id">
          <GameDetail />
        </Route>

        <Route exact path="/about" render={() => {
          user.user_type == "admin" ? <About/> : <PageNotFound/>
        }}>
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

        <Route exact path="/user">
          <Profile/>
        </Route>

        <Route exact path="/userprofile">
          <EdiProfile/>
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;