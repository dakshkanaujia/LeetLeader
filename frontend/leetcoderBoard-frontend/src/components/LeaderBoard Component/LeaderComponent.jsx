function LeaderComponent({ user }) {
  return (
    <div className="leaderboard__user">
      <div className="leaderboard__user__info">
        <div className="leaderboard__user__info__name">{user.name}</div>
        <div className="leaderboard__user__info__score">
          Score: {user.score}
        </div>
      </div>
    </div>
  );
}