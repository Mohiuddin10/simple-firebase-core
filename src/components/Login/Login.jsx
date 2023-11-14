import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleClick =() => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user)})
        .catch(error => {
            console.log(error.message)})
    }


    return (
        <div>
            <button onClick={handleClick} className='btn btn-success'>Google</button>
        </div>
    );
};

export default Login;