import {NavLink} from 'react-router-dom'


function Header ()  {
return (
    <header>
    <NavLink className="nav-item nav-link" to='/'>
    HomePage
    </NavLink>
    </header>

)

}
export default Header