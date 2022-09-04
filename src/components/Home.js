import React from 'react';

import { auth } from '../service/firebase'

// import '../App.css';

const Home = ({ user }) => {
    console.log(user);
    return (
        <div >
            <h1>Hello, <span></span>{user.displayName}</h1>
            <img src={user.photoURL} />
            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}

export default Home;