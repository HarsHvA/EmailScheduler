import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as actionType from "../constants/actionType";
import decode from "jwt-decode";

import HomeIcon from "@material-ui/icons/Home";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { GoogleLogout } from "react-google-login";

const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/login");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div className="w-1/4 bg-gray-100 h-screen">
      <h1 className="ml-10 mt-10 text-3xl">D-Mail</h1>
      <ul className="ml-10 mt-10 text-3xl ">
        <li className="flex w-full justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(0);
            }}
          >
            <EditIcon />
            <span className="text-sm  ml-2">Compose</span>
          </div>
        </li>
        <li className="flex w-full p-2 justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(1);
            }}
          >
            <HomeIcon />
            <span className="text-sm  ml-2">Home</span>
          </div>
        </li>
        <li className="flex w-full justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(2);
            }}
          >
            <ScheduleIcon />
            <span className="text-sm  ml-2">History</span>
          </div>
        </li>

        <li className="flex w-full justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <GoogleLogout
            clientId="951903792573-ed29i3f13q5hm5dmum863ajrhpua92fs.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
            <div className="flex items-center" onClick={logout}>
              <ExitToAppIcon />
              <span className="text-sm  ml-2">Logout</span>
            </div>
          </GoogleLogout>
        </li>

        <li className="flex w-full justify-between p-2 text-gray-600 items-center mt-10 p-2">
          <div className="flex items-center">
            <h1 className="text-lg">
              D-mail is a simple Email scheduler through which you can eaisly
              schedule your Email to any date and time of any week month or
              year. It will automaticaly send the mail when the time arrives.
            </h1>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
