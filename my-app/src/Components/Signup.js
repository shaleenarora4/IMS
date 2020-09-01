import React, { useState } from 'react';

function Signup(props) {

    const [result, setResult] = useState('');
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState(''); 
    // const [modalShow, setModalShow] =useState(false);

    function verify() {
        //calls signup api from backend.
        fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: username, password: password })
        }).then(res => res.json()).then((data) => setResult(data.msg)).catch((e)=>console.log(e));  
        console.log(result);     
    }
    
    return (
        <form className='signup' >
            <div >{result}</div>
            <div class="form-group" autocomplete="off">
                <label >Email address</label>
                <input type="text" onChange={(e)=>{setUserName(e.target.value)}} class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter name" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" onKeyUp={(e)=>{setPassword(e.target.value)}} class="form-control" id="userPassword" placeholder="Password" />
                <small  class="form-text">We'll never share your password with anyone else.</small>
            </div>
            <button  type='button' class="btn btn-primary" onClick={verify}>Register</button> 
            <small  class="form-text">Already a user?
            <button type="button" id='loginbtn' class="btn btn-primary btn-sm" variant="primary" onClick={()=>window.location.href='/login'}>Login</button></small>                          
        </form>
    );
}

export default Signup;



