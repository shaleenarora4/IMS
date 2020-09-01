import React from 'react';
import Category from './Category';
import Form from './Form';

function Main(props) {
    const activitySelected=props.getActivity;
    const [mainActivity,subActivity]=activitySelected.split('/');
debugger;
    return (
        <div>
            {subActivity === 'view' ? <Category/> : ''}
            {mainActivity === 'categories'  && subActivity!=='view'? 
            <Form mainActivity={mainActivity} subActivity={subActivity}/>: ''}
        </div>
    );
}

export default Main;