import React from 'react';
// import userdata from '../userdata';

function Entry() {
    return (
        <div className='entry'>
            <h1>Inventory Managment System</h1>
            <div>
                <button type="button" class="btn btn-primary btn-lg" onClick={()=>{window.location.href='http://localhost:3000/signup'}}>Sign Up</button>
                <button type="button" class="btn btn-primary btn-lg" onClick={()=>{window.location.href='http://localhost:3000/login'}}>Login</button>
            </div>
        </div>
    );
}

export default Entry;