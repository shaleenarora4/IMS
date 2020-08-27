import React, { useState } from 'react';

function Signup(props) {

    const [result, setResult] = useState('');
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState(''); 

    function validate() {
        //calls signup api from backend.
        fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: username, password: password })
        }).then(res => res.json()).then((data) => setResult(data.msg));  
        console.log(result);     
    }

    return (
        <form className='signup'>
            <div>{result}</div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" onChange={(e)=>{setUserName(e.target.value)}} class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter name" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" onKeyUp={(e)=>{setPassword(e.target.value)}} class="form-control" id="userPassword" placeholder="Password" />
                <small  class="form-text">We'll never share your password with anyone else.</small>
            </div>
            <button  class="btn btn-primary" onClick={validate()}>Submit</button>            
        </form>
    );
}

export default Signup;