import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';


function Home() {
    const [activitySelected, setActivity] = useState('');

    return (
        <div className='home'>
            <Sidebar updateActivity={setActivity} />
            <Main getActivity={activitySelected}/>            
        </div>
    );

}

export default Home;