import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null) ;
const googleProvider = new GoogleAuthProvider() ;
const githubProvider = new GithubAuthProvider() ;
const twitterProvider = new TwitterAuthProvider() ;

const handleGoogleSignin = () => {
    console.log('google mama coming soon') ;
    signInWithPopup(auth, googleProvider)
    .then(res => {
        console.log(res.user) ;
        setUser(res.user)
        // console.log(user.photoURL)
    }
    ) 
    .catch(er =>{
         console.log('ERROR: ',er)
        setUser(null)
        })
}

const handleSignOut = () => {

    signOut(auth)
    .then(()=>   {
         console.log('signed out')
        setUser(null)
        } )
    .catch(er=> console.error(er))
}


const handleGithubSignin = () => {
    console.log('gittu logged in') ;
    signInWithPopup(auth, githubProvider)
    .then(res => {
        console.log(res.user)
        setUser(res.user)
    })
    .catch(er => console.error(er))
}

const handleTwitterSignin = () => {
    console.log('tttt twitter arrived') ;
    signInWithPopup(auth, twitterProvider)
    .then( res =>{
         console.log(res) 
        // setUser(res)
        })
        .catch(er =>console.log(er))
}

    return (
        <div>
        { user 
        ? <button onClick={handleSignOut}>Sign Out</button>
:   
<>
<button onClick={handleGoogleSignin}>Login with GOOGLE</button>
<button onClick={handleGithubSignin}>Login with GITHUB</button>
<button onClick={handleTwitterSignin}>Login with TWITTER</button>
</>
}


            {
                user && <div>
                    <h3>Name: {user.displayName}</h3>
                    <h3>Email: {user.email}</h3>
                    <div><img src={user.photoURL} alt="PROFILE PIC" /></div>
                </div>
            }
        </div>
    );
};

export default Login;