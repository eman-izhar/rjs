import React from "react";
import { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = [...task];
    newTask.push({ title, description });
    setTask(newTask);

    setTitle("");
    setDescription("");
  };

  const deleteTask = (idx) => {
    const newTask = [...task];
    newTask.splice(idx, 1);
    setTask(newTask);
  };
  return (
    <div className="min-h-screen lg:flex bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="flex gap-5  items-start  flex-col p-10 lg:w-1/2 "
      >
        <h1 className="text-2xl font-bold ">ADD NOTES</h1>
        {/* input for heading */}
        <input
          className="px-5 py-2 border-1 rounded outline-none w-full"
          type="text"
          placeholder="Enter a note..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* 2nd input */}
        <textarea
          className="px-5 py-2 border-1 rounded outline-none w-full h-30 flex-row flex items-start"
          placeholder="Enter what you want....."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="active:bg-blue-600 active:scale-95 px-5 py-2 bg-blue-500 w-full text-white outline-none rounded"
          type="submit"
        >
          Add Note
        </button>
        {/* <img
          className="w-80 m-10 rotate-y-180"
          src="https://www.freeiconspng.com/uploads/writing-png-18.png"
          alt=""
        /> */}
      </form>
      <div className=" p-10 lg:w-1/2 gap-5">
        <h1 className="text-2xl font-bold ">YOUR NOTES</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-autoh-full ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="p-5 h-50 w-40 rounded-2xl bg-blue-200 relative"
              >
                <h2
                  onClick={() => {
                    deleteTask(idx);
                  }}
                  className="absolute top-3 right-3 text-xs rounded-full bg-gray-200 p-1 flex items-center cursor-pointer active:scale-95"
                >
                  <X size={18} />
                </h2>
                <h2 className="font-bold text-sm">{elem.title}</h2>
                <p className="text-xs mt-2">{elem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
