import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [email,setEmail] =useState("");
    const [Password,setPassword] =useState("");
    const [name,setName]=useState("");
    const [profilepic,setProfilepic]=useState("");
    const dispatch = useDispatch();
    
    const loginToApp = (e) =>{
        e.preventDefault();

       
        auth.signInWithEmailAndPassword(email,Password)
        .then(userAuth => {
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            profileUrl:userAuth.user.photoUrl,
          }))
        }).catch(error => alert(error));
    };

  const register =  () =>{
      if(!name){
        return alert("Please enter your full name");
      }
       
       auth.createUserWithEmailAndPassword(email,Password).then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName:name,
          photoUrl:profilepic,

        })

        .then(()=>{
         dispatch(login({
            email: userAuth.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.name,
            photoUrl:userAuth.user.profilepic,
          }));
        });
      }).catch((error)=>alert(error));
    };

  return (
    <div className='login'>
       <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt=''/>
      

      <form>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name {required if registering}"
        type="text"/>

        <input  value={profilepic} onChange={e=>setProfilepic(e.target.value)} placeholder="Profile pic URL {optional}" type="text"/>
        <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" type="email"/>
        <input value={Password} onChange={e=> setPassword(e.target.value)} placeholder="Password" type="Password"/>

        <button type='submit' onClick={loginToApp} >Sign In</button>

      </form>


      <p>Not a member?{" "}
        <span className='Login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login;
