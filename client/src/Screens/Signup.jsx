import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import { signup } from "../actions/authentication";
import { AUTH } from "../constants/actionType";

import signupImage from "../images/signup.jpg";

const initialState = { email: "", password: "" };

const Signup = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form, history));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const responseGoogle = (response) => {
    console.log(response);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 content-center">
      <div className="flex h-screen justify-center items-center">
        <img src={signupImage} alt="EmailImage" className="m-auto"></img>
      </div>
      <div className="flex flex-col h-screen justify-center items-center ">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className="w-80 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-green-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              SIGNUP
            </button>
            <GoogleLogin
              clientId="951903792573-ed29i3f13q5hm5dmum863ajrhpua92fs.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="w-80 text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-200 hover:text-white active:bg-green-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  SIGNUP with Google
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
