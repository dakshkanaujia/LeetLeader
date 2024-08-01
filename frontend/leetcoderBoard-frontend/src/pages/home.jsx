import React, { useState } from 'react';
// import allUsersTable from
// import leaderBoard from './UserList';
import AllUsersTable from '../components/AllUsersTable/AllUsersTable.jsx';
import LeaderBoard from '../components/LeaderBoard Component/LeaderBoard.jsx';

const Home = () => {
    

    return (
        <div className="flex flex-row">
            <div className='left-side w-3/12 h-screen bg-gray-950'>
                <AllUsersTable />
            </div>
            <div className="right-side w-9/12 h-screen flex justify-center items-center bg-black">
                <LeaderBoard/>
            </div>
        </div>
    );
};

export default Home;
