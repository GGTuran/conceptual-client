// import '../../src/index.css';



const PostUser = () => {

    const handlePostUSer = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        const myData = {
            name,email,password,
            
        };
        console.log(myData);
        fetch('http://localhost:5000/users',{
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(myData),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                alert("User Created Successfully ");
            }
        })

    }

    return (
        <div>
            <h1>Users</h1>
            <form onSubmit={handlePostUSer} >

                <input type="text" placeholder='Name' name='name' />
                <br />
                <input type="email" placeholder='Email' name='email' />
                <br />
                <input type="password" placeholder='Password' name='password' />
                <br />
                <input type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default PostUser;