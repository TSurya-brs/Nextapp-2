'use client';

import React, { useState } from 'react';
import { useStore } from "../store";
import { useRouter } from 'next/navigation';
import {loginSchema} from '../store'

const Page = () => {
  const [next, setNext] = useState(false);
  const { userName, password, updateName, updatePassword } = useStore();
  const router = useRouter();

//   const zodParsing=loginSchema.safeParse({
//     userName:
//     password:
//   })

  const showPassword = () => {
    if (userName.length > 5) {
      setNext(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-1/3 p-8">

      <form onSubmit={(e) => {
        e.preventDefault();  
        router.push('/navbar');  
        }}>
        {/* <form action="navbar"> */}

          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e)=>updateName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-red-500 mt-1">
              {userName && userName.length < 6 ? "Username must be at least 6 characters" : ""}
            </p>
          </div>

          <button
            type="button"
            onClick={showPassword}
            className="w-full py-2 bg-blue-600 text-white rounded-md mb-4"
          >
            Continue
          </button>

          {next && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e)=>updatePassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                //   required
                  minLength={4}
                />
                <p className="text-sm text-red-500 mt-1">
                  {password && password.length < 4 ? "Password should be at least 4 characters" : ""}
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>

    </div>
  );
};

export default Page;
