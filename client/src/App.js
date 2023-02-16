import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, CreateGame, Docs, Donation, Games, Register, ShareInfo, GameDetail} from "./views";
import NavBar from "./component/NavBar/NavBar"

function App() {
    // const location = useLocation();

    return(
        <div>
            <NavBar />

            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/games'>
                <Games />
            </Route>

            <Route exact path="/games/create">
                <CreateGame />
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
        </div>

    )
}

export default App;