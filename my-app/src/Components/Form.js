import React,{useState} from 'react';

function Form(props) {
    const mainActivity = props.mainActivity;
    const subActivity = props.subActivity;
    const [categoryName,setCategoryName]=useState('');
    const [newCategoryName,setNewCategoryName]=useState('');
    const [result,setResult]=useState('');

    const create=function(){
        fetch(`http://localhost:4000/${mainActivity}/create`, {
        method: 'POST',   
        headers: {
        'Content-Type': 'application/json'
        },   
        body: JSON.stringify({name:categoryName}) 
        }).then(res=>res.json()).then((data)=>setResult(data.msg));
    }

    const update=function(){
        fetch(`http://localhost:4000/${mainActivity}/update`, {
        method: 'PUT',   
        headers: {
        'Content-Type': 'application/json'
        },   
        body: JSON.stringify({name:categoryName,updatedName:newCategoryName}) 
        }).then(res=>res.json()).then((data)=>setResult(data.msg));
    }

    const deleteData=function(){
        fetch(`http://localhost:4000/${mainActivity}/delete`, {
        method: 'DELETE',   
        headers: {
        'Content-Type': 'application/json'
        },   
        body: JSON.stringify({name:categoryName}) 
        }).then(res=>res.json()).then((data)=>setResult(data.msg));
    }

    switch (subActivity) {
        case 'create': if (mainActivity === 'categories') {
                            return (
                                <form className='create' autocomplete="off">
                                    <div class="form-group">
                                        <label>{`Enter ${mainActivity} Name`}</label>
                                        <input type="text" onChange={(e)=>{setCategoryName(e.target.value)}} class="form-control" placeholder="Enter name" />
                                    </div>
                                    <button type="button" class="btn btn-primary" onClick={create}>Create</button>
                                    <div>{result==='success'?'Category Added':result}</div>
                                </form>
                            );
                        }
                            break;
        case 'update': if(mainActivity==='categories'){
                            return (
                                <form className='update'autocomplete="off">
                                    <div class="form-group" >
                                        <label>{`Enter old ${mainActivity} Name`}</label>
                                        <input type="text" onChange={(e)=>{setCategoryName(e.target.value)}} class="form-control" placeholder="Enter name" />
                                    </div>
                                    <div class="form-group">
                                        <label>{`Enter new ${mainActivity} Name`}</label>
                                        <input type="text" onChange={(e)=>{setNewCategoryName(e.target.value)}} class="form-control" placeholder="Enter name" />
                                    </div>
                                    <button type="button" class="btn btn-primary" onClick={update}>Update</button>
                                    <div>{result==='updation success'?'Updation Successfull':result}</div>
                                </form>
                            );
        }   
                             break;   
        case 'delete': if(mainActivity==='categories'){
                            return (
                                <form className='delete' autoComplete='off'>
                                    <div class="form-group" autocomplete="off">
                                        <label>{`Enter ${mainActivity} Name`}</label>
                                        <input type="text" onChange={(e)=>{setCategoryName(e.target.value)}} class="form-control" placeholder="Enter name" />
                                    </div>                                   
                                    <button type="button" class="btn btn-primary" onClick={deleteData}>Delete</button>
                                    <div>{result==='deletion success'?'Deletion Successfull':result}</div>
                                </form>
                            );
                    }   
                                break; 
        default: return null;                                               
                                      
    }
}

export default Form;
