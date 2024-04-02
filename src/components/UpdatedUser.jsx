import { useLoaderData } from "react-router-dom";

const UpdatedUser = () => {
  const singleData = useLoaderData();

  const handleUpdate = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    const updateData = {
        name,email,password,
        
    };

    console.log(updateData);
    fetch(`http://localhost:5000/users/${singleData._id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(updateData),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })


  }
  return (
    <div>
      <h1>Gotta Update</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={singleData?.name} placeholder="Name" name="name" />
        <br /> 
        <input type="email" defaultValue={singleData?.email} placeholder="Email" name="email" />
        <br />
        <input type="password" defaultValue={singleData?.password} placeholder="Password" name="password" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdatedUser;
