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
import { useSelector } from "react-redux";
import NavBar from "./component/NavBar/NavBar";
import Thanks from "./views/Thanks/Thanks";
import axios from "axios";
import { PageNotFound } from "./component/PageNotFound/PageNotFound";
import DocDetail from "./views/DocDetail/DocDetail";
import Banned from "./views/Banned/Banned";
import Footer from "./component/Footer/Footer";
import ChatBox from "./component/Chatbox/Chatbox"
import DashboardAdmin from "./component/DashboardAdmin/DashboardAdmin";
import Profile from "./views/Profile/Profile";
import EdiProfile from "./views/EdiProfile/EdiProfile";
// import style from './App.module.

axios.defaults.baseURL = "https://back-henrygame.up.railway.app";

function App() {
  // const location = useLocation();
const profile= useSelector((state)=>state.profile)
console.log(profile)
console.log(profile.type)

  return (
    <div>
      <NavBar />
      <ChatBox/>
      <Switch>
      <Route exact path="/dashboardAdmin">
            {Object.keys(profile).length&&<div>
              {profile.user_type=="admin"?<DashboardAdmin/>:<Home/>}</div>}
        </Route>

        <Route exact path="/">
            <Home/>
        
        </Route>

        <Route exact path="/games">
        <Games />
        </Route>

        <Route exact path="/games/:id">
         <GameDetail/>
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

        <Route exact path="/user">
        {Object.keys(profile).length&&<div>
              {profile.user_state == "banned" ? <Banned/> : <Profile/>}</div>}
        </Route>

        <Route exact path="/userprofile">
        {Object.keys(profile).length&&<div>
              {profile.user_state == "banned" ? <Banned/> : <EdiProfile/>}</div>}
        </Route>

        <Route exact path="/thanks">
        <Thanks/>
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