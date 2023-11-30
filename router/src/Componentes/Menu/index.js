import './menu.css';
import { NavLink } from "react-router-dom";

const Menu = () => {
    
   return (
    <header>
        <nav className="navegacao">
            <NavLink className="link"
                to="/"
                style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "blue" : "black",
                    };
                }}
                >
            Home
            </NavLink>

            <NavLink className="link"
                to="/contatos"
                style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "black" : "blue",
                    };
                }}
                >
            Contatos
            </NavLink>
            
        </nav>
    </header>
   )
    
}

export default Menu;