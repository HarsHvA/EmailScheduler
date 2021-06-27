import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import Compose from "../Screens/ComposeEmail";
import History from "../Screens/History";
import Schedule from "../Screens/Schedulded";
import { getSchedule, getHistory } from "../actions/emailService";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(<Compose />);

  useEffect(() => {
    dispatch(getSchedule());
    dispatch(getHistory());
  }, [dispatch]);

  const handlePages = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        setCurrentPage(<Compose list={dispatch(getSchedule)} />);
        break;
      case 1:
        setCurrentPage(<Schedule />);
        break;
      case 2:
        setCurrentPage(<History />);
        break;
      default:
        return <Compose />;
    }
  };
  return (
    <div className="flex m-0">
      <Navbar handlePage={handlePages} />
      <div className="flex flex-col items-center justify-center m-auto">
        {currentPage}
      </div>
    </div>
  );
};

export default Home;
