import { getAllProfiles } from "../../calls/profileCalls";

async function getLogicalProfiles() {
    try{

        const data = await getAllProfiles();
        const logicalUsers = data.map((user) => {
            const score = user.easySolved * 5 + user.mediumSolved * 10 + user.hardSolved * 20;
            
            return {
                username: user.username,
                score: score,
                easySolved: user.easySolved,
                mediumSolved: user.mediumSolved,
                hardSolved: user.hardSolved,
                ranking: user.ranking,
                contestRating: Math.round(user.contest.contestRating),
            };
        });
        logicalUsers.sort((a, b) => b.score - a.score);
        
        return logicalUsers;
    } catch (error) {
        console.error("Error fetching profiles:", error);
    }
}

export default getLogicalProfiles;
