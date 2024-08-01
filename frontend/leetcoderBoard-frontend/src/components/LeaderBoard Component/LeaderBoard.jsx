import React, { useState, useEffect } from "react";
import getLogicalProfiles from "./leaderBoardLogic"; // Ensure this path is correct

function LeaderBoard() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const data = await getLogicalProfiles();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        };

        fetchProfiles();
    }, []);

    return (
        <div className="w-10/12 h-5/6 border-2 rounded-3xl bg-gray-950 p-5 border-white mx-auto">
            <h1 className="w-72 border-b-4 border-yellow-500 text-white text-5xl mx-auto mb-4">LeaderBoard</h1>
            <div className="w-full h-5/6 overflow-y-auto">
                <table className="w-full text-white table-auto">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-2 text-center">Rank</th>
                            <th className="px-4 py-2 text-center">Username</th>
                            <th className="px-4 py-2 text-center">Score</th>
                            <th className="px-4 py-2 text-center">Easy</th>
                            <th className="px-4 py-2 text-center">Medium</th>
                            <th className="px-4 py-2 text-center">Hard</th>
                            <th className="px-4 py-2 text-center">Contest Rating</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-700">
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-600 ease-in-out duration-500">
                                <td className="px-4 py-2 text-center">{index + 1}</td>
                                <td className="px-4 py-2 text-center">{user.username}</td>
                                <td className="px-4 py-2 text-center">{user.score}</td>
                                <td className="px-4 py-2 text-center">{user.easySolved}</td>
                                <td className="px-4 py-2 text-center">{user.mediumSolved}</td>
                                <td className="px-4 py-2 text-center">{user.hardSolved}</td>
                                <td className="px-4 py-2 text-center">{user.contestRating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LeaderBoard;
