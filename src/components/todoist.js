import React, { useState } from 'react';
import axios from 'axios';

function TodoList(props) {
  const [todos, setTodos] = useState(props.todos);
  const [newTodo, setNewTodo] = useState({ name: '', points: '' });

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = !newTodos[index].status;
    setTodos(newTodos);
    updateBackend(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    updateBackend(newTodos);
  };

  const handleAdd = () => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNewTodo({ name: '', points: '' });
    updateBackend(newTodos);
  };

  const updateBackend = (newTodos) => {
    axios.post('https://Hashcode.sakshamalok.repl.co/change', { value: newTodos, email:"bob.johnson@example.com", var:"todo_list"})
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col space-y-4">
        {todos.map((todo, index) => (
          <div key={index} className="bg-white rounded-md shadow-md flex space-x-4 items-center p-4">
            <div className={`flex-grow ${todo.status ? 'line-through text-gray-400' : ''}`}>
              <h3 className="font-bold text-lg">{todo.name}</h3>
              <p className="text-sm">{todo.points}</p>
            </div>
            <div className="flex-none">
              <label className="inline-flex items-center">
                <input type="checkbox"
                       checked={todo.status}
                       className="form-checkbox h-5 w-5 text-gray-600"
                       onChange={() => handleCheckboxChange(index)} />
              </label>
            </div>
            <div className="flex-none">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-md shadow-md flex space-x-4 items-center p-4">
          <div className="flex-grow">
            <input type="text"
                   className="w-full"
                   placeholder="Enter Todo Name"
                   value={newTodo.name}
                   onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })} />
            <input type="text"
                   className="w-full"
                   placeholder="Enter Todo Points"
                   value={newTodo.points}
                   onChange={(e) => setNewTodo({ ...newTodo, points: e.target.value })} />
          </div>
          <div className="flex-none">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={handleAdd}>Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
