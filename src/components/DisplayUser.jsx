// import React from 'react';

import { useLoaderData } from "react-router-dom";



const DisplayUser = () => {


    const users = useLoaderData();
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
        })
    }

    return (
        <div>
        <h1>User</h1>
        {
            users.map(user => (
                <div key={user._id}>
                    <h1>{user.name}</h1>
                    <span>{user.email}</span>
                    <br />
                    <button onClick={() => handleDelete(user._id)} type="submit">Delete</button>

                </div>
            ))
        }
        </div>
    );
};

export default DisplayUser;