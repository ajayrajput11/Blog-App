import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogInContext } from "./Context";

const LogIn = () => {
  const navigate = useNavigate();
  const { LogInn, forgetPassword ,currentuser} = useContext(LogInContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect (()=>{
    if (currentuser) {
      if (currentuser.identity === "admin"){
      navigate("/")
      }
      else{
        navigate("/")
      }
    }
  },[currentuser,navigate])

  const loginhandle = () => {
    if (!email || !password) {
      alert("both field requierd");
      return
    }
    if (!email.includes("@")) {
      setEmailError(true);
      return;
    }
    if (password.length < 8) {
      setPasswordError(true);
      return;
    }
    const result = LogInn(email, password);
    if (result) {
      alert("login succesful");
      if (result.identity === "admin")
      navigate("/");
    } else {
      navigate("/");
    }
  };
  const PasswordForget = () => {
    if (!email) {
      alert("Please enter your email to reset password");
      return;
    }
    forgetPassword(email);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-black p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Login to your account</h2>
            <span
              onClick={() => navigate("/signup")}
              className="text-sm text-black hover:underline"
            >
              Sign Up
            </span>
          </div>
          <p className="text-gray-700 text-sm mb-6">
            Enter your email below to login to your account
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="email@.com"
                className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-300 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {emailError && (
                <p className="text-xs text-red-500 mt-1">Enter a valid email</p>
              )}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label>password</label>
                <span onClick={PasswordForget} className="text-sm">
                  forget your password
                </span>
              </div>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="enter your password. . . . . ."
                className={`mt-1 w-full px-3 py-2 border-gray-300 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:border-blue-300`}
              />
              {passwordError && (
                <p className="text-xs text-red-500 mt-1">
                  Password must be of atleast of 8 characters
                </p>
              )}
            </div>
            <button
              onClick={loginhandle}
              type="submit"
              className="w-full py-2 bg-zinc-500 text-white rounded hover:bg-gray-800"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
