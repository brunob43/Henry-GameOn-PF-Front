import { NavLink } from "react-router-dom";
import logo from "../../styles/images/HenryLogo.png"

const NavBar = () =>{

    return(
        <nav>
            <NavLink to="/"><button>HOME</button></NavLink>

            <NavLink to="/games"><button>GAMES</button></NavLink>

            <NavLink to="/docs"><button>HENRYDOCS</button></NavLink>

            <NavLink to="/about"><button>ABOUT US</button></NavLink>

            <NavLink to="/register"><button>REGISTER</button></NavLink>

            <NavLink to="/donation"><button>DONATION</button></NavLink>

            <a href="https://www.soyhenry.com"><img src={logo} alt="Henry-Logo" height="15px"></img></a>

            <button>dark mode</button>            
        </nav>

    )
}

export default NavBar;