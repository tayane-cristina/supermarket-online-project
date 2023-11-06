import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className="ul-navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mercearia">Merceária</Link></li>
                <li><Link to="">Padaria</Link></li>
                <li><Link to="">Laticínios</Link></li>
                <li><Link to="">Açougue</Link></li>
                <li><Link to="">Peixaria</Link></li>
            </ul>
        </div>
    )
}
export default Navbar