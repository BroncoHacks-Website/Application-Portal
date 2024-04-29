import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ManageTeam");
  };

  return (
    <div className="container">
      <div className="teamPageHeader">
        <h1>Team Page</h1>
      </div>
      <div className="manageTeamButton">
        <button onClick={handleClick}>Manage Team</button>
      </div>
    </div>
  );
};

export default Team;
