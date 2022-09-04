// import React from "react";
import { useState, useEffect } from 'react';
import Employees from "./components/Employees/Employees";
import NewProducts from "./components/NewProducts/NewProducts";
import SignInGoogle from "./components/SignIn/SignInGoogle";
import firebase from './service/firebase';
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div>
      <Employees />
      <NewProducts />
      {/* <SignIn /> */}
      {user ? <Home user={user} /> : <SignInGoogle />}
    </div>
  );
}

export default App;
