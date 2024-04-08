import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const sendToEvents = () => {
      navigate("/events");
  }
  return <div>
    <p>Home Page</p>

    <a onClick={sendToEvents} href="">Temporary Events Button</a>
    
  </div>;
};

export default Home;
