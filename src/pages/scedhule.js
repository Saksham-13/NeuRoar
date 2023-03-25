import React, { useState } from "react";
import { useRouter } from 'next/router'



const Scedhule = ({  }) => {
const initialData=[
        { title: "Meeting with clients", time: "2023-03-25T10:30:00" },
        { title: "Lunch break", time: "2023-03-25T12:00:00" },
        { title: "Team brainstorming session", time: "2023-03-25T14:00:00" },
        { title: "Finish project proposal", time: "2023-03-25T16:00:00" },
      ];
  const [data, setData] = useState(initialData);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleDelete = (index) => {
    const newData = [...data]; 
    newData.splice(index, 1);
    setData(newData);
  };
  const handleAddItem = () => {
    if (title && time) {
      const newItem = { title, time };
      setData([...data, newItem]);
      setTitle("");
      setTime("");
    }
  };

  const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));

  return (
    <div className="flex  justify-center" style={{
    backgroundColor : "#0cbaba",
backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"

    }}>
      <div className="w-full font-mono ">
        <div className="my-4 w-fit mx-auto p-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md rounded-md">
          <h2 className="text-lg  text-white font-medium mb-4">Add New Item</h2>
          <div className="flex gap-4 text-white">
            <label htmlFor="title" className="font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="mb-4 p-2 border border-gray-300 text-black rounded-md"
            />
            <label htmlFor="time" className="font-medium mb-2 items-center">
              Time
            </label>
            <input
              type="datetime-local"
              id="time"
              value={time}
              onChange={handleTimeChange}
              className="mb-4 p-2 border border-gray-300 text-black rounded-md"
            />
            <button
              type="button"
              onClick={handleAddItem}
              className="bg-blue-500 hover:bg-blue-600 text-white h-10 px-4 rounded-md"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="w-1/3 mx-auto">
        {sortedData.map((item, index) => (
          <><div key={index} className="my-4 p-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md rounded-md flex justify-between">
                <div>
                <h2 className="text-lg text-white font-medium">{item.title}</h2>
                <p className="text-gray-500">
                    {new Date(item.time).toLocaleString()}
                </p>
                </div>
                <div>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white rounded-md px-4 py-2 ">
          Delete
        </button>
                </div>
                
            </div>
            <div>
            <img
                src="https://media.discordapp.net/attachments/972456002844766228/1089179400525840414/Pngtreevector_cartoon_element_yellow_arrow_7187631.png?width=1036&height=1036"
                alt="Arrow"
                className="mx-auto mt-4"
                style={{ maxWidth: "50px" }}
              />
            </div>
            </>
          
        ))}
        <div className="my-4 p-4 bg-white text-center  shadow-md rounded-md">
                <h2 className="text-lg  mx-auto font-medium">Done for the day 🥳🥳🥳🥳</h2>
                
            </div>
        </div>

       
      </div>
    </div>
  );
};

export default Scedhule;
