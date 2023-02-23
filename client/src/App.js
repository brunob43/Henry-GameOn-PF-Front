// import './App.css';
import { Route, Switch} from 'react-router-dom';
import { Home, About, Contact, Docs, Donation, Games, Register, ShareInfo, GameDetail} from "./views";
import NavBar from "./component/NavBar/NavBar"
import axios from 'axios';
import { PageNotFound } from './component/PageNotFound/PageNotFound';
import Login from "../src/views/Auth/Login/Login";
import Logout from "../src/views/Auth/Logout/Logout";
import Profile from "../src/views/Auth/Profile/Profile"
// import style from './App.module.

axios.defaults.baseURL= 'https://back-henrygame.up.railway.app';

function App() {
    
    // const location = useLocation();
    
    return(
    
        <div>
            <NavBar />

            <Switch>

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
                <Profile />
                <Logout />
            </Route>
            
            <Route>
                <PageNotFound />
            </Route>

            </Switch>

        </div>

    )
}

export default App;