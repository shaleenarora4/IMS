import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';

function Login() {

    const [result, setResult] = useState('');
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState(''); 
    
    function verify() {     
        //calls login api from backend.
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: username, password: password })
        }).then(res => res.json()).then((data) => {
            console.log(data.token);
            setResult(data.msg)});  
            console.log(`Welcome ${username}!`);            
    }

    return (
        <form className='login' autocomplete="off">
            <div>{result===`Welcome ${username}!`?<Redirect to ="/home"/>:result}</div>
            <div class="form-group">
                <label >Email address</label>
                <input type="text" onChange={(e)=>{setUserName(e.target.value)}} class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter name" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} class="form-control" id="userPassword" placeholder="Password" />
                <small  class="form-text">We'll never share your password with anyone else.</small>
            </div>
            <button type="button" class="btn btn-primary" onClick={verify} >Login</button>
        </form>
    );
}

export default Login;