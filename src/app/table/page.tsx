'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { z } from 'zod';
import { useStore3 } from '../store'
import { TableData } from '../store';
import NavBar from "../navbar/page"

const Table = () => {
    const { userData, setuserData } = useStore3();

    // Zod Schema
    const TableDataSchema = z.object({
        userID: z.number().min(1),
        userName: z.string().nonempty(),
        email: z.string().nonempty(),
        phoneNo: z.string().nonempty().min(10),
    });

    const [newUser, setNewUser] = useState({
        userName: '',
        email: '',
        phoneNo: ''
    });

    const [editMode, setEditMode] = useState(false); 
    const [userToEdit, setUserToEdit] = useState<TableData | null>(null); 

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                if (response.data) {
                    const validUsers = [];

                    for (const data of response.data) {
                        const zodParsing = TableDataSchema.safeParse({
                            userID: data.id,
                            userName: data.username,
                            email: data.email,
                            phoneNo: data.phone,
                        });

                        if (zodParsing.success) {
                            validUsers.push(zodParsing.data);
                        } else {
                            console.error("Data validation failed for user:", data, zodParsing.error);
                        }
                    }

                    setuserData(validUsers);
                    console.log("Data updated:");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setuserData]);

    // Post New User Data
    const postData = async () => {
        try {
            const newUserData: TableData = {
                userID: userData.length + 1,
                userName: newUser.userName,
                email: newUser.email,
                phoneNo: newUser.phoneNo,
            };
            const validation = TableDataSchema.safeParse(newUserData);

            if (validation.success) {
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUserData);
                console.log('New user added:', response.data);
                setuserData([...userData, response.data]);
                setNewUser({
                    userName: '',
                    email: '',
                    phoneNo: ''
                });
            } else {
                console.error('Validation failed:', validation.error);
            }
        } catch (error) {
            console.error('Error adding new user:', error);
        }
    };

    // Edit
    const editUser = (userID: Number) => {
        const user = userData.find((user) => user.userID === userID);
        if (user) {
            setUserToEdit(user); 
            setNewUser({
                userName: user.userName,
                email: user.email,
                phoneNo: user.phoneNo
            });
            setEditMode(true); 
        }
    };

    const saveEditedUser = async () => {
        try {
            if (userToEdit) {
                const updatedUserData: TableData = {
                    userID: userToEdit.userID, 
                    userName: newUser.userName,
                    email: newUser.email,
                    phoneNo: newUser.phoneNo,
                };

                const validation = TableDataSchema.safeParse(updatedUserData);
                if (validation.success) {
                    const response = await axios.put(
                        `https://jsonplaceholder.typicode.com/users/${userToEdit.userID}`,
                        updatedUserData
                    );
                    console.log('User updated:', response.data);

                    setuserData(
                        userData.map((user) =>
                            user.userID === userToEdit.userID ? updatedUserData : user
                        )
                    );

                    setNewUser({
                        userName: '',
                        email: '',
                        phoneNo: ''
                    });
                    setEditMode(false);
                    setUserToEdit(null);
                } else {
                    console.error('Validation failed:', validation.error);
                }
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const cancelEdit = () => {
        setEditMode(false);
        setUserToEdit(null);
        setNewUser({
            userName: '',
            email: '',
            phoneNo: ''
        });
    };

    // Delete User
    const deleteUser = async (userID: Number) => {
        try {
            setuserData(userData.filter((user) => user.userID !== userID));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Pagination Logic
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(userData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <NavBar/>
            <div className='pt-10'>
                <div className="p-4 rounded-lg shadow-lg mb-6 max-w-lg mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4">{editMode ? 'Edit User' : 'Add New User'}</h2>
                    <input
                        type="text"
                        value={newUser.userName}
                        onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
                        placeholder="Enter user name"
                        className="bg-gray-100 text-black p-2 border border-gray-300 rounded-md w-full mb-3"
                    />
                    <input
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        placeholder="Enter email"
                        className="bg-gray-100 text-black p-2 border border-gray-300 rounded-md w-full mb-3"
                    />
                    <input
                        type="text"
                        value={newUser.phoneNo}
                        onChange={(e) => setNewUser({ ...newUser, phoneNo: e.target.value })}
                        placeholder="Enter phone number"
                        className="bg-gray-100 text-black p-2 border border-gray-300 rounded-md w-full mb-3"
                    />
                    <button
                        onClick={editMode ? saveEditedUser : postData}
                        className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold w-full"
                    >
                        {editMode ? 'Save Changes' : 'Add User'}
                    </button>
                    {editMode && (
                        <button
                            onClick={cancelEdit}
                            className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold w-full mt-3"
                        >
                            Cancel
                        </button>
                    )}
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">S.No</th>
                                <th className="px-4 py-2">UserID</th>
                                <th className="px-4 py-2">UserName</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone.No</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user, index) => (
                                <tr key={String(user.userID)} className="border-b border-gray-200">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{(user.userID)}</td>
                                    <td className="px-4 py-2">{user.userName}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.phoneNo}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                                            onClick={() => editUser(user.userID)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded-md"
                                            onClick={() => deleteUser(user.userID)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="px-4 py-2 mx-2 bg-gray-300 text-black rounded-md"
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <span className="text-lg font-semibold">{currentPage}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="px-4 py-2 mx-2 bg-gray-300 text-black rounded-md"
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
