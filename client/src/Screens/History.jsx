import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useSelector((state) => state.fetchHistory);

  return !history.length ? (
    <h1>empty list</h1>
  ) : (
    history.map((mail) => {
      if (mail.user_id === user.result._id) {
        return (
          <div
            key={mail._id}
            className="bg-gray-100 m-2 p-4 lg:w-200 md:w-full rounded shadow-lg"
          >
            <div className="flex p-2 mx-3 space-x-1">
              <label className="block text-gray-700 text-sm font-bold mb-2 bg-green-100">
                To:
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {mail.to}
              </label>
            </div>
            <div className="flex p-2 mx-3 space-x-1">
              <label className="block text-gray-700 text-sm font-bold mb-2 bg-green-100">
                FROM:
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {mail.from}
              </label>
            </div>
            <div className="flex p-2 mx-3 space-x-1">
              <label className="block text-gray-700 text-sm font-bold mb-2 bg-green-100">
                Subject:
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {mail.subject}
              </label>
            </div>
            <div className="flex p-2 mx-3 space-x-1">
              <label className="block text-gray-700 text-sm font-bold mb-2 bg-green-100">
                Mail Body:
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {mail.text}
              </label>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    })
  );
};

export default History;
