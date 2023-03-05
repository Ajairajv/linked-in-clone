import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import Home from '@material-ui/icons/Home';
import { BusinessCenter, Chat, Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {

  const dispatch = useDispatch()
  const logoutofApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
    <div className='header__left'>
     <img src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw' alt=''/>
    </div>

    <div className='header__search'>
    <SearchIcon/>
    <input placeholder='Search' type='text'/>
    </div>

    <div className='header__right'>
    <HeaderOption Icon={Home} title={'Home'}/>
    <HeaderOption Icon={SupervisorAccount} title={"My Network"}/>
    <HeaderOption Icon={BusinessCenter} title={"Jobs"}/>
    <HeaderOption Icon={Chat} title={"Messaging"}/>
    <HeaderOption Icon={Notifications} title={"Notification"}/> 
    <HeaderOption avatar={true} title={"me"} 
    onClick={logoutofApp}
    />
    </div>



    </div>
  )
}

export default Header
