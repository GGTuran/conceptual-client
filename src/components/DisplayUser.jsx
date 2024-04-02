// import React from 'react';

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const DisplayUser = () => {


    const users = useLoaderData();
    const [updatedUser, setUpdatedUser] = useState(users);
    console.log(users);

    const handleDelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert("User Deleted successfully");
            }
            const filteredData = updatedUser.filter((item) => item._id !== _id);
            setUpdatedUser(filteredData);
        })
    }

    return (
        <div>
        <h1>User</h1>
        {
            updatedUser.map(user => (
                <div key={user._id}>
                    <h1>{user.name}</h1>
                    <span>{user.email}</span>
                    <br />
                    <button onClick={() => handleDelete(user._id)} type="submit">Delete</button>
                    <Link to={`/users/${user._id}`}>
                    <button type="submit">Update</button>
                    </Link>

                </div>
            ))
        }
        </div>
    );
};

export default DisplayUser;