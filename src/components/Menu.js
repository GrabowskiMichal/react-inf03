import logo from '../img/logo.jpg';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <div className='header'>
        <div className='menu-left'>
            <img src={logo} alt='logo' className='logo'></img>
            <h1>Forum dla Programistów</h1>
        </div>
        <div className='menu-right'>
            <ul>
              <li><Link to="/" class="link">Strona Główna</Link></li>
              <li><Link to="/forum" class="link">Forum</Link></li>
              <li><Link to="/login" class="link">Login</Link></li>
            </ul> 
            {/* <ProfileInfo /> */}
        </div>
      </div>
     );
}
 
export default Menu;
