import { Link } from "react-router-dom";
function NavBar(){
    return(
        <>
            <nav className="flex flex-col gap-1 m-4 max-w bg-sky-200">
                <Link to="/" className="hover:bg-amber-300  p-3">Home</Link>
                <Link to="/clue-game" className="hover:bg-amber-300  p-3">Clue Game</Link>
                <Link to="/creature-lab" className="hover:bg-amber-300  p-3">Creature Lab</Link>
            </nav>
        </>
    )
}

export default NavBar;