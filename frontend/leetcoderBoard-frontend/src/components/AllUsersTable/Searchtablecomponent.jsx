function searchtablecomponent({user}) {
  return (
    <div className="flex w-11/12 border border-slate-800 p-1 m-5 rounded-xl bg-black justify-between">
        <div className="profilepic">
            <img src={user.avatar} alt="profilepic" className="rounded-full w-10 h-10" />
        </div>
        <div className="name w-9/12 p-2 text-white">{user.username}</div>
        <div className="ranking w-3/12 p-2 text-white">{user.ranking}</div>
    </div>
  );
}

export default searchtablecomponent;