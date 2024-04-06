import { useState} from "react";
import './team.css';

function Team() {
    return <>
        <body>
            <div className="create-team-container">
                <h1 className="enter-team-name">Create Your Team</h1>
                <div className="team-name-container">
                    <p className="enter-team-name-prompt">Enter your team name: </p>
                    <input className="enter-team-name-input" type="text" placeholder="Team Name"/>
                </div>
                <input className="enter-team-name-submit" type="submit" value="Create New Team!"/>
                <a className="create-team-go-back" href="/">Back to Main Menu</a>
            </div>
            <div className="join-team-container">
                <h1 className="join-team-name">Join a Team via Code</h1>
                <input className="join-team-name-input" type="text" placeholder="Example: ab12Cd3E"/>
                <input className="join-team-name-submit" type="submit" value="Join" />
            </div>
        </body>
    </>
}

export default Team;