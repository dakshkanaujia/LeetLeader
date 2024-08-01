async function run(user){
    try{
        const checkUser = await fetch(`https://alfa-leetcode-api.onrender.com/${user}`)
        const data = await checkUser.json()
        console.log("success" + data);
    }catch (error){
        constole.log(error)
    }
}

run("DakshKanaujiavkjfndkvjdnfv")