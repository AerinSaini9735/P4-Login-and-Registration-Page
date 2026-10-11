import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { faUser as faUserSolid, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // Check if passwords match
            if (password !== confirmPassword) {
                throw new Error("Passwords do not match!");
            }

            // Create account using Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            // Update the user's display name
            await updateProfile(user, {
                displayName: name
            });

            // Store user details in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: user.email
            });

            alert("Account created successfully!");

            navigate("/");

        } catch (error) {
            console.error("Registration error:", error);
            alert(error.message);
        }
    }
    return (
        <div>
            <div className="home">
                <FontAwesomeIcon icon={faArrowLeftLong} className="left-arrow" />
                <Link className="homepage" to="/"> Back to Homepage</Link>
            </div>
            <form className="login" onSubmit={handleSubmit}>
                <label className="sign-up-heading">
                    Create a DEV@Deakin Account
                </label>
                <div className='search-box-block-1'>
                    <FontAwesomeIcon icon={faAddressCard} className='name-icon' />
                    <input className="search-box-1" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='search-box-block-2'>
                    <FontAwesomeIcon icon={faUserSolid} className='pass-icon' />
                    <input className="search-box-2" type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='search-box-block-2'>
                    <FontAwesomeIcon icon={faKey} className='pass-icon' />
                    <input className="search-box-2" type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='search-box-block-2'>
                    <FontAwesomeIcon icon={faKey} className='pass-icon' />
                    <input className="search-box-2" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <label className="sign-up-block">
                    Already have an account? <Link className="sign-up" to="/login">
                        Login Here
                    </Link>
                </label>
                <button className="log-in" type='submit'>
                    Create
                </button>
            </form>
        </div>

    )
}

export default SignUp