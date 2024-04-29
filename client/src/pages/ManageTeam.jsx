import '../styles/ManageTeam.css';
import Arrow from '../assets/dropdown-arrow2.png';

import { useState, useEffect } from 'react'

const TeamMember = ({nm, idnum}) => {

    const [memberName, setMemberName] = useState(nm)
    const [num, setNum] = useState(idnum)
    const [toggleBtns, setToggleBtns] = useState(false)

    // changes styling for smaller screen widths
    const toggleOptions = () => {
        const dummy = document.querySelectorAll("#options-dropdown");
        const drop = dummy[num];
        if (drop.style.animationName != "dropdown-vis") {
            drop.style.zIndex = 10;
            drop.style.animation = ".45s dropdown-vis forwards"
        } else {
            drop.style.animation = ".45s dropdown-invis forwards"
            drop.style.zIndex = -10;
        }

        const array = [];
        if (num == 2) {
            const buttons = document.querySelectorAll(".opt-btn");
            for (let i = num*3; i < buttons.length; i++) {
                array.push(buttons.item(i))
            }
        } else {
            const buttons = document.querySelectorAll(".opt-btn");
            for (let i = num * 3; i < num* 3 + 3; i++) {
                array.push(buttons.item(i))
            }
        }   
        if (toggleBtns == false) {
            for (let i = 0; i < array.length; i++) {
                array[i].style.display = "inline";
            }
            setToggleBtns(true)
        } else {
            for (let i = 0; i < array.length; i++) {
                array[i].style.display = "none";
            }
            setToggleBtns(false)
        }
        
    }

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
                <button className='member-btn' id='member-opt' onClick={toggleOptions}>Options<img src={Arrow}></img></button>
                <div className='opt' id='options-dropdown'>
                    <button className='opt-btn'>View Profile</button>
                    <button className='opt-btn'>Make Owner</button>
                    <button className='opt-btn'>Kick Member</button>
                </div>
            </div>
        )
    }
    
}

const ManageTeam = () => {

    // all the variables here are just filler
    const [teamName, setTeamName] = useState("quandavius winglebinglers")
    const [accessCode, setAccessCode] = useState("jAF75F1")
    const [owner, setOwner] = useState("lebrawn james")
    const [mem1, setMem1] = useState("street clothes")
    const [mem2, setMem2] = useState("hillbilly kobe")
    const [mem3, setMem3] = useState("dlo")

    return(<div className='page'>
        <div className='container'>
            <h1 id='team-name'>Team Name: {teamName}</h1>
            <h1 className='sm-team-name' id='sm-tn'>Team Name: </h1>
            <h1 className='sm-team-name' id='sm-nm'>{teamName}</h1>
            <p id='access-code'>Access Code: {accessCode}</p>
            <div id='owner'>Owner: {owner}</div>
            <TeamMember nm={mem1} idnum={0}></TeamMember>
            <TeamMember nm={mem2} idnum={1}></TeamMember>
            <TeamMember nm={mem3} idnum={2}></TeamMember>
            <button id='delete-team'>Delete Team</button>
        </div>
    </div>)
}

export default ManageTeam;