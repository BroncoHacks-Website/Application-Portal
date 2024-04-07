import { useState} from "react";
import '../styles/team.css';
import "../../../server/models/teams.js"

function Team () {
    const [teamName, setTeamName] = useState('');
    const [teamCode, setTeamCode] = useState('');

    const handleSubmitTeamName = async (e) => {
        e.preventDefault();
        try {
            const responseOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({teamName : teamName})
            }
    
            const response = await fetch('http://localhost:5173/teams/', responseOptions);
    
            if(response.ok) {
                console.log("Team creation successful");
            }
            else {
                console.log("Team creation failed");
            }
        }
        catch (e) {
            console.log('error: ', e);
        }
    }

    const handleSubmitTeamCode = async (e) => {
        e.preventDefault();
        try {
            const responseOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({teamCode : teamCode})
            }
    
            const response = await fetch('http://localhost:5173/teams/${teamCode}', responseOptions);
    
            if(response.ok) {
                console.log("Successfully joined team ", teamCode);
            }
            else {
                console.log("Failed to join a team");
            }
        }
        catch (e) {
            console.log('error: ', e);
        }
    }

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    }

    const handleTeamCodeChange = (event) => {
        setTeamCode(event.target.value);
    } 

    return <>
        <body>
            <div className="create-team-container">
                <h1 className="enter-team-name">Create Your Team</h1>
                <div className="team-name-container">
                    <p className="enter-team-name-prompt">Enter your team name: </p>
                    <input className="enter-team-name-input" type="text" placeholder="Team Name" value={teamName} onChange={handleTeamNameChange}/>
                </div>
                <input className="enter-team-name-submit" type="submit" value="Create New Team!" onClick={handleSubmitTeamName}/>
                <a className="create-team-go-back" href="/">Back to Main Menu</a>
            </div>
            <div className="join-team-container">
                <h1 className="join-team-name">Join a Team via Code</h1>
                <input className="join-team-name-input" type="text" placeholder="Example: ab12Cd3E" value={teamCode} onChange={handleTeamCodeChange}/>
                <input className="join-team-name-submit" type="submit" value="Join" onClick={handleSubmitTeamCode}/>
            </div>
        </body>
    </>;
  };
  
  export default Team;
  