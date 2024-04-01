// import React from 'react';

import { useLoaderData } from "react-router-dom";



const DisplayUser = () => {


    const users = useLoaderData();
    console.log(users);


    return (
        <div>
        <h1>User</h1>
        </div>
    );
};

export default DisplayUser;