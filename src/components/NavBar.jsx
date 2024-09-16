import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="hearder">
        <p className='hearder_txt'>Header</p>
      </div>
      <div className="navlink">
        <Link to="/">SignUp</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default NavBar
