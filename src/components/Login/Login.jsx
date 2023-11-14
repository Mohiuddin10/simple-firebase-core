import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState({});

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleSignout = () => {
        signOut(auth)
            .then()
            .catch(error => console.log(error.message))
            setUser(null);
    }

    return (
        <div>
            {!user ? <button onClick={handleClick} className='btn btn-success'>Google</button>
            : <div onClick={handleSignout} className="btn btn-warning">Signout</div>}
           { user && <div className="mx-auto">
                <h3>User: {user.displayName}</h3>
                <h4>User Email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;