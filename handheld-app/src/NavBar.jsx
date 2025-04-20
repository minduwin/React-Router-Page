import { NavLink } from 'react-router-dom';

export default function NavBar() {
    
    return (
        <div className="headContainer">
            <div className="handTitle">
                <img src="./src/assets/game.svg" alt="game svg" />
                <h1>Handhelds</h1>
            </div>
            <div className="navBar">
                <ul>
                    <NavLink to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/Steam'>
                        <li>Steam Deck</li>
                    </NavLink>
                    <NavLink to='/Rog'>
                        <li>ROG Ally</li>
                    </NavLink>
                    <NavLink to='/Retroid'>
                        <li>Retroid Pocket 5</li>
                    </NavLink>
                    <NavLink to='/Odin'>
                        <li>AYN Odin 2</li>
                    </NavLink>
                    <NavLink to='/Switch'>
                        <li>Nintendo Switch</li>
                    </NavLink>
                </ul>
            </div>
        </div>

    )
}