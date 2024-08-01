const profileModel = require("../../models/profileModel");
exports.updateHourly = async () => {
    console.log("Updating Profiles")
    const allProfiles = await profileModel.find();
    allProfiles.forEach(async (profile) => {
        const data = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${profile.leetcodeProfile}`)
        const profileData = await data.json();
        if(profileData.errors){
            return;
        }
        profile.easySolved = profileData.easySolved;
        profile.mediumSolved = profileData.mediumSolved;
        profile.hardSolved = profileData.hardSolved;
        profile.totalSolved = profileData.totalSolved;
        profile.ranking = profileData.ranking;
        await profile.updateOne(profile);
    })
}