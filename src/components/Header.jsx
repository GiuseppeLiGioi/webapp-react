import {NavLink} from 'react-router-dom'


function Header ()  {
return (
    <header>
    <NavLink className="nav-item nav-link" to='/'>
    Home
    </NavLink>
    </header>

)

}
export default Header