import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-gray-100">
      <ul className="divide-y divide-gray-200">
        {tasks.map((task, index) => (
          <li key={index} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">{task.name}</h2>
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  task.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {task.status}
              </span>
            </div>
            <div className="mt-1 sm:flex sm:justify-between">
              <p className="text-sm text-gray-500">{task.name}</p>
              <p className="mt-2 text-sm font-medium text-gray-900 sm:mt-0">
                {task.points}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
