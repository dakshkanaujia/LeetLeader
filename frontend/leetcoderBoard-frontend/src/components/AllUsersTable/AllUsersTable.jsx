import React, { useState, useEffect } from "react";
import { getAllProfiles } from '../../calls/profileCalls';
import Searchtablecomponent from './Searchtablecomponent.jsx';

function AllUsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const data = await getAllProfiles();
        // console.log(data); // This should log the resolved data
        setUsers(data); // Set the state with the resolved data
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchData();
    setUsers(users.sort((a, b) => a.ranking - b.ranking));
  }, []);
  
  return (
    <div>
      {users.map((user) => (
          <div key={user.username}>
            <Searchtablecomponent user={user} />
          </div>
      ))}
    </div>
  );
}

export default AllUsersTable;
