import "./Navbar.css";
import Link from "./link.jsx"

function NavBar() {
    return (

        <ul>
        <li><Link>Nome</Link></li>
        <li><Link>Cognome</Link></li>
        <li><Link>Email</Link></li>
        <li><Link>Portfolio</Link></li>
        <li><Link>Sito</Link></li>
        </ul>

    );

}

export default NavBar