import './Profile.css'
import { logout } from "../Redux/ReduxSignUp/ReduxSignUp"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Profile = () => {

  const dispatch = useDispatch();
  const navigation  = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));


  const logoutHandlar = () => {
    localStorage.clear()
    dispatch(logout())
    navigation('/')
  }

  return (
    <div className="container">
      <h1>Profile</h1>
      <p className='profile_txt'>Full Name : {user.username}</p>
      <p className='profile_txt'>Email : {user.email}</p>
      <p className='profile_txt'>Password : {user.password}</p>

      <button className='profile_btn' onClick={logoutHandlar}>Logout</button>
    </div>
  )
}

export default Profile
