import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="netflix-bg">
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-lg bg-gray-800"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full rounded-lg bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-lg  bg-gray-800"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already a user? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;