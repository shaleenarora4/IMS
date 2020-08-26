import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import {Switch,Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Entry from './Components/Entry';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Default from './Components/Default';

function App(){

    return (
        <div className='container'>
            <Nav/>
            <Switch>
                <Route path='/entry' component={Entry}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route component={Default}/>
            </Switch>   
        </div>
    );
}

export default App;