import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { emailService } from "../actions/emailService";

import TextField from "@material-ui/core/TextField";

const time = new Date().getTime();
const initialState = {
  from: "",
  to: "",
  subject: "",
  text: "",
  start_time: time,
  user_id: "",
};

const Compose = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailService(form, history));
  };
  const handleChange = (e) =>
    setForm({
      ...form,
      user_id: user.result._id,
      from: user.result.email,
      [e.target.id]: e.target.value,
    });

  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            To
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="Recipient"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subject
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Date and time
          </label>
          <TextField
            id="start_time"
            label="Select date and time"
            type="datetime-local"
            defaultValue="2020-10-30T10:30"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mail Body
          </label>
          <textarea
            onChange={handleChange}
            className="resize-y border rounded-lg shadow appearance-none border rounded w-96 h-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            type="text"
            placeholder="Mail Body"
          />
        </div>
        <div className="flex flex-col items-center ">
          <button
            className="w-96 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-green-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
