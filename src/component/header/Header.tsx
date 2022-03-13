import { FaUserAlt, FaDollyFlatbed, FaRegHeart, FaSistrix } from 'react-icons/fa';
import './Header.scss';
import Logo from '../../assets/shopsafe.png'

const Header = () => {
  const searchStyle = { color: "white", fontSize: "1em" }

  return(
  <div className="header">
    <div className='logo'> <img src={Logo}  alt='item-logo'/></div>
    <div className='searchbar'>
      <input className='search'/>
      <button className="search-btn"><FaSistrix style={searchStyle}/></button>
    </div>
    <div className='nav'>
      <div className='nav-item'> <FaUserAlt /> <span>Sign in</span></div>
      <div className='nav-item'><FaRegHeart/> <span>Watchlist</span></div>
      <div className='nav-item'> <FaDollyFlatbed /> <span>My cart</span></div>
    </div>
  </div> 
 )
}

export default Header