const profileModel = require("../models/profileModel");
const userModel = require("../models/userModel");

exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await profileModel.find();
        return res.status(200).json(profiles);
    } catch (error) {
        console.error("Error in getting all profiles:", error);
        return res.status(500).json({ error: error.message });
    }
};

exports.createOrFetchProfile = async (leetcodeProfile, username) => {
    try {
        let profile = await profileModel.findOne({ leetcodeProfile });
        let user = await userModel.findOne({ leetcodeProfile });
        if(user){
            username = user.username;
        }
        
        if (profile) {
            return { success: true, profile };
        }

        const response = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${leetcodeProfile}`);
        const profileData = await response.json();

        const responseUser = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeProfile}`);
        const userData = await responseUser.json();

        const contestUserData = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeProfile}/contest`);
        const contestData = await contestUserData.json();

        if (profileData.errors) {
            return { success: false, message: "Invalid Username" };
        }

        const contestObj = {
            contestAttend: contestData.contestAttend,
            contestRating: contestData.contestRating,
            contestGlobalRanking: contestData.contestGlobalRanking,
        };

        const newProfile = new profileModel({
            username,
            leetcodeProfile,
            avatar: userData.avatar,
            country: userData.country,
            github: userData.gitHub,
            linkedin: userData.linkedIN,
            birthdate: userData.birthday,
            contest: contestObj,
            easySolved: profileData.easySolved,
            mediumSolved: profileData.mediumSolved,
            hardSolved: profileData.hardSolved,
            totalSolved: profileData.totalSolved,
            ranking: profileData.ranking
        });

        await newProfile.save();

        return { success: true, profile: newProfile };

    } catch (error) {
        console.error("Error in creating or fetching profile:", error);
        return { success: false, error: error.message };
    }
}