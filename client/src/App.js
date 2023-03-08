// import './App.css';

import { Route,Routes } from "react-router-dom";
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
// import style from './App.module.

axios.defaults.baseURL = "https://back-henrygame.up.railway.app";

function App() {
  // const location = useLocation();
const profile=useSelector((state)=>state.profile)

  return (
<>
  <NavBar />
  <ChatBox/>
  <Routes>
      
      <Route path="/" element={ <Home />} />

      <Route path="/games" element ={<Games/>}/>

      <Route path="/games/:id" element={<GameDetail />}/>

      <Route path="/about" element={<About />}/>

      <Route path="/contact" element={<Contact/> }/>

      <Route path="/docs" element={<Docs />}/>

      <Route path="/doc/:id" element={<DocDetail />}/>
          
      <Route path="/docs/share" element={<ShareInfo />}/>

      <Route path="/register" element={<Register />}/>
          
      <Route path="/donation" element={<Donation />}/>
          
      <Route path="/user" element={<Profile/>}/>
          
      <Route path="userprofile" element={<EdiProfile/>}/>
      
      <Route path="/:any" element={<PageNotFound/>}/>

      <Route path="/dashboardAdmin" element={Object.keys(profile).length&&<>{profile.type=="admin"&&<DashboardAdmin/>}</>}
      />
          
  </Routes>
  <Footer/>
</>
  );
}

export default App;