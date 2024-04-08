import "../styles/Events.css";
import Logo from "../assets/logo.png";
import MiniHackLogo from "../assets/minihack_logo.png";
import { useNavigate } from "react-router-dom";

const Events = () => {
    const navigate = useNavigate();

    const sendToEnded = () => {
        navigate("/ended");
    }

    const sendToHome = () => {
        navigate("/");
    }
    return <div>
        <section>
            <figure class="card">

                <div class="card_image">
                    <img class="logo_image" src={Logo}/>
                </div>

                <div class="card_text"> 
                    <div class="card_info"> 
                        <b class="card_title">2nd Annual BroncoHacks</b>
                        <p class="card_date">Date: 10/31/2024</p>
                        <p class="card_description">A hackathon of all time</p>
                    </div>
                    <div class="card_button">
                        <a onClick={sendToHome} href="" class="button">Learn More</a>
                    </div>
                </div>

            </figure>


            <figure class="card">

                <div class="card_image">
                    <img class="logo_image" src={Logo}/>
                </div>

                <div class="card_text"> 
                    <div class="card_info"> 
                        <b class="card_title">1st Annual BroncoHacks</b>
                        <p class="card_date">Date: This Event Has Ended.</p>
                        <p class="card_description">More cash prizes!!!</p>
                    </div>
                    <div class="card_button">
                        <a onClick={sendToEnded} href="" class="button">Learn More</a>
                    </div>
                </div>

            </figure>

            <figure class="card">

                <div class="card_image">
                    <img class="logo_image" src={MiniHackLogo}/>
                </div>

                <div class="card_text"> 
                    <div class="card_info"> 
                        <b class="card_title">MiniHack</b>
                        <p class="card_date">Date: This Event Has Ended.</p>
                        <p class="card_description">Win stickers and candy!</p>
                    </div>
                    <div class="card_button">
                        <a onClick={sendToEnded} href="" class="button">Learn More</a>
                    </div>
                </div>

            </figure>
        </section>
    </div>;
  };
  
  export default Events;
  