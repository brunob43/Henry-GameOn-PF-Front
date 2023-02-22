import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Docs, Donation, Games, Register, ShareInfo, GameDetail} from "./views";
import NavBar from "./component/NavBar/NavBar"
import axios from 'axios';
import { PageNotFound } from './component/PageNotFound/PageNotFound';
import Login from "../src/views/Auth/Login/Login";
import Logout from "../src/views/Auth/Logout/Logout";
import Profile from "../src/views/Auth/Profile/Profile"

axios.defaults.baseURL= 'https://back-henrygame.up.railway.app';

function App() {
    
    //const location = useLocation();
    
    return(
        <div>
            <NavBar />

            <Route exact path='/' render ={() => <Home />} />

            <Route exact path='/games'>
                <Games />
            </Route>

            <Route exact path='/games/:id'>
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
                <Login />
            </Route>
            
            <Route exact path="/login">
                <Logout />
            </Route>

            <Route exact path="/login">
                <Profile />
            </Route>
          
            <Route path='/*'>
                <PageNotFound />
            </Route>

        </div>
        
    )
}

export default App;