import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';



console.log (login)


function Login() {

   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const [name , setName] = useState("");
   const [profilePic , setProfilePic] = useState("");
   const dispatch = useDispatch();

  
   const loginToApp = (e)=> {
     e.preventDefault();

    auth.signInWithEmailAndPassword( email, password)
    .then(userAuth => {
      dispatch(login({

        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL
            
  
      })

      );
    })
        .catch((error) => alert(error))
   };





     
   const register = () => {
     if (!name) {

      return alert ('Please enter a Full name')
    };
     

      
   

    auth
    .createUserWithEmailAndPassword( email, password)
    .then((userAuth) => {
      userAuth.user
      .updateProfile({
            displayName: name,
            photoURL : profilePic,
      })
      .then(() => {
        dispatch(
          login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic

        })
        );
      }).catch(error => alert(error));

    });
  };

  return (
   <div className="login">

       <img src="https://www.pngkey.com/png/full/80-802453_2018-supply-chain-solutions-linkedin-view-my-linkedin.png" 
       alt="" />

       <form >
         <input 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           placeholder='Full Name (Requried )' 
           type="text" />

         <input 
         value={profilePic}
         onChange={(e) => setProfilePic (e.target.value)}
         placeholder='Profile Picture URL (Optional)' 
         type="text" />

         <input value={email} 
         onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' 
          type="email" />

         <input
         value={password} 
         onChange={(e) => setPassword(e.target.value)} 
         placeholder='Password' 
         type="password" />

           <button type='submit' onClick={loginToApp}>
              Sign In</button>
       </form>

       <p>Not a member? 
           <span className="login__register"
            onClick={register}>
               Register now</span>
       </p>
   </div>
  )
}

export default Login