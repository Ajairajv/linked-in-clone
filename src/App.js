import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Feed from './Feed';
import Widgets from './Widgets';
import Header from './Header';
import { logout, selectUser } from './features/userSlice';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login.js';
import { auth} from './firebase';

import { login } from './features/userSlice';
//import { unstable_createMuiStrictModeTheme } from '@material-ui/core';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{
   auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      //if user is  logged in
      dispatch(login({
        email:userAuth.email,
        uid: userAuth.user.uid,
        displayName: userAuth.name,
        photoURL:userAuth.profilepic,
      })); 
  
    }else{
      // user is logged out
      dispatch(logout());
    }

   })
  },[])

  return (
    <div className="App">

      <Header/>

      {!user?(
        <Login/>
      ):(
      <div className='app__body'>
       <Sidebar/>
       <Feed /> 
      <Widgets/>
      </div>
      )}


    </div>
  );
}

export default App;
