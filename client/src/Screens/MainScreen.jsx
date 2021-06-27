import React from "react";
import { useHistory } from "react-router-dom";
import emailImage from "../images/email.jpg";

const MainScreen = () => {
  const history = useHistory();
  return (
    <div className="grid grid-cols-2 content-center">
      <div className="flex h-screen justify-center items-center">
        <img src={emailImage} alt="EmailImage" className="m-auto"></img>
      </div>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col items-center my-8">
          <h1 className="font-sans text-5xl">D-mail</h1>
          <p className="font-sans">An email scheduler MERN application</p>
        </div>
        <button
          className="w-1/2 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-red-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => history.push("/login")}
        >
          Login
        </button>
        <button
          className="w-1/2 text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-200 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => history.push("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
