import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogInContext } from "./Context"
const SignUp = () => {
  const { SignUp ,currentuser} = useContext(LogInContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordInvalid, setPasswordInvalid] = useState(false);
  const [EmailInvalid, setEmailInvalid] = useState(false);
  const [identity,setIdentity] = useState("");

  useEffect (()=>{if (currentuser) {
    if (currentuser.identity === "admin"){
      navigate("/admin/profile")
    }
    else {
 navigate("/profile")
    }
   
  }},[navigate,currentuser])

  const signUpHandle = () => {
     if (!firstName||!lastName||!email||!phone||!password||!identity) {
      alert("all field requierd")
      return
    }

    if(!email.includes("@")){
      setEmailInvalid(true)
      return
    }
    else{
      setEmailInvalid(false)
    }

    if(password.length < 8){
      setPasswordInvalid(true)
      return
    }
    else{
      setPasswordInvalid(false)
    }

    console.log("Done");
    
    
    const add = SignUp({ firstName, lastName, email, phone, password,identity});
    if (add) {
      alert("user registered successfully");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="min-h-screen  bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-black p-6">
          <div>
            <h1 className="flex justify-center mb-3 text-lg font-bold">
              REGISTER NOW / SIGN UP
            </h1>
          </div>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div>
              <label className="font-medium">First Name</label>
              <input
                onChange={(event) => setFirstName(event.target.value)}
                type="text"
                placeholder="enter your first name"
                className="mt-1 max-w-sm px-1 w-full py-2 border focus:ring-1 border-gray-300 rounded-lg focus:border-blue-300"
              />
            </div>
            <div>
              <label className="font-medium">Last Name</label>
              <input
                onChange={(event) => setLastName(event.target.value)}
                type="text"
                placeholder="enter your last name"
                className="mt-1 max-w-sm w-full px-1 py-2 border  border-gray-300 rounded-lg  focus:ring-1 focus:border-blue-300"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="email@.com"
              className={`${EmailInvalid?"border-red-500":"border-gray-300"}
              mt-1 w-full px-3 py-2 rounded-lg focus:border-blue-300 
              `}
            />
          </div>
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              placeholder="+91"
              className="mt-1 w-full px-3 py-2 rounded-lg focus:border-blue-300 focus:ring-1"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">identity</label>
              <select onChange={(e) => setIdentity(e.target.value)} className="mt-1 max-w-sm w-full px-1 py-2 border  border-gray-300 rounded-lg   focus:border-blue-300">
                <option disabled selected>select</option>
                <option value="admin">admin</option>
              <option value="user">user</option>
               </select>
          </div>
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a password"
              className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg  focus:ring-1 focus:border-blue-400 ${
                PasswordInvalid?"border-red-500":"border-gray-300"
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            {
              PasswordInvalid && <p>password must contain at least 8 characters</p>
            }
          </div>
          <div className=" flex flex-col items-center mt-5 ">
            <button
              onClick={signUpHandle}
              type="submit"
              className="w-full py-2  bg-zinc-500 text-white rounded hover:bg-gray-800"
            >
              SIGNUP
            </button>
            <p className="mt-3">
              Already have account ?{" "}
              <Link className=" hover:underline" to="/login">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
