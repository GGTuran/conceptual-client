/* eslint-disable no-undef */
// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Users2 = () => {

    const { data: users} = useQuery({
        queryKey: ["users"],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users');
            return res.json()
        }
    })

    // const users = useLoaderData();
    // const [updatedUser, setUpdatedUser] = useState(users);
    // console.log(users);
//   const handleDelete = (_id) => {
//     console.log(_id);
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.deletedCount > 0) {
//           alert("User Deleted successfully");
//         }
//         // const filteredData = updatedUser.filter((item) => item._id !== _id);
//         // setUpdatedUser(filteredData);
//       });
//   };

  return (
    <div>
      <h1>User</h1>
      {users?.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <span>{user.email}</span>
          <br />
          <button onClick={() => handleDelete(user._id)} type="submit">
            Delete
          </button>
          <Link to={`/users/${user._id}`}>
            <button type="submit">Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users2;
