import { useNavigate } from "react-router-dom";


const Ended = () => {

  const navigate = useNavigate();

  const sendToEvents = () => {
      navigate("/events");
  }

  return <div>
    <p>This event has already ended.</p>
    <a onClick={sendToEvents} href="">Temporary Events Button</a>
  </div>;
};
  
  export default Ended;
  