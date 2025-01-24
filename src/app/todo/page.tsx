// todo.tsx

'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore2 } from '../store';  
import { todoSchema } from '../store';  
import NavBar from "../navbar/page"

const ToDo: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');  
  const [error, setError] = useState<string | null>(null);  

  
  const { todos, updatedTitles, setTodos, addTodo, updateTodo, deleteTodo, toggleCompletion, setUpdatedTitle } = useStore2();

  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data); 
      } catch (error: any) {
        setError('Failed to fetch todos');
      }
    };
    fetchTodos();
  }, [setTodos]); 

  
  const postTodo = async () => {
    if (!newTodo) return;

    const newTodoObj = { title: newTodo, completed: false };

    
    const result = todoSchema.safeParse(newTodoObj);
    if (!result.success) {
      setError(result.error.errors[0].message);  
      return;
    }

    try {
      addTodo(newTodoObj);  
      setNewTodo('');  
    } catch (error) {
      setError('Failed to post todo');
    }
  };

  
  const putTodo = async (id: number) => {
    const updatedTitle = updatedTitles[id];
    if (!updatedTitle) return;

    
    const result = todoSchema.safeParse({ title: updatedTitle, completed: false });
    if (!result.success) {
      setError(result.error.errors[0].message);  
      return;
    }

    try {
      updateTodo(id, { title: updatedTitle });  
      setUpdatedTitle(id, ''); 
    } catch (error) {
      setError('Failed to update todo');
    }
  };

  
  const deleteTodoItem = async (id: number) => {
    try {
      deleteTodo(id);  
    } catch (error) {
      setError('Failed to delete todo');
    }
  };

  const patchTodo = async (id: number) => {
    try {
      toggleCompletion(id);  
    } catch (error) {
      setError('Failed to toggle todo status');
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <NavBar/>
      <div className="p-20  min-h-screen">
        <h1 className="text-black text-3xl font-semibold mb-6">ToDo List</h1>

        <div className="mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="bg-white text-black p-2 border border-gray-300 rounded-md w-72 mr-3"
          />
          <button
            onClick={postTodo}
            className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold"
          >
            Add Todo
          </button>
        </div>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <span
                  className={`text-black ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {todo.title}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => patchTodo(todo.id)}
                  className={`${
                    todo.completed ? 'bg-red-500' : 'bg-green-500'
                  } text-white px-3 py-1 rounded-md font-semibold`}
                >
                  {todo.completed ? 'Undo' : 'Done'}
                </button>

                <input
                  type="text"
                  value={updatedTitles[todo.id] || ''}
                  onChange={(e) => setUpdatedTitle(todo.id, e.target.value)} 
                  placeholder="Update title"
                  className="bg-white text-black p-1 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => putTodo(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md font-semibold"
                >
                  Update
                </button>

                <button
                  onClick={() => deleteTodoItem(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
