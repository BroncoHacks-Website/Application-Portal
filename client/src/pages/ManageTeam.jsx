import '../styles/ManageTeam.css'

import { useState, useEffect } from 'react'

const TeamMember = ({nm}) => {

    const [memberName, setMemberName] = useState(nm)

    if (memberName == "") {
        return(
            <div id='team-member'>
                <p>Member:</p>
            </div>
        )
    } else {
        return (
            <div id='team-member'>
                <p>Member: {memberName}</p>
                <button className='member-btn' id='view-profile'>View Profile</button>
                <button className='member-btn' id='make-owner'>Make Owner</button>
                <button className='member-btn' id='kick-member'>Kick Member</button>
            </div>
        )
    }
    
}

const ManageTeam = () => {

    // all the variables here are just filler
    const [teamName, setTeamName] = useState("quandavius winglebinglers")
    const [accessCode, setAccessCode] = useState("jAF75F1")
    const [owner, setOwner] = useState("lebrawn james")
    const [mem1, setMem1] = useState("anthony davis")
    const [mem2, setMem2] = useState("austin reaves")
    const [mem3, setMem3] = useState("dlo")

    useEffect(() => {
        
    }, [])

    return(<div className='page'>
        <div className='container'>
            <h1 id='team-name'>Team Name: {teamName}</h1>
            <p id='access-code'>Access Code: {accessCode}</p>
            <div id='owner'>Owner: {owner}</div>
            <TeamMember nm={mem1}></TeamMember>
            <TeamMember nm={mem2}></TeamMember>
            <TeamMember nm={mem3}></TeamMember>
            <button id='delete-team'>Delete Team</button>
        </div>
    </div>)
}

export default ManageTeam;