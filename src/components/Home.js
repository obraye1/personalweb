import './home.css';
import picture from "../assets/download.jpg";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <div className='coin'>
        <h2>
          Nice to meet you! I'm<span> <h2 className='bryan'>Bryan Temple.</h2></span>
        </h2>
        <p>
          Based in Lagos,Ng. I'm a FrontEnd Developer passsionate about building
          accessible web apps that users love
        </p>
        <button type='button' className='btn'>CONTACT ME</button>
      </div>
      <div>
       <img src={picture} className="rodrygo" alt="pic"/>
        </div>
        <hr className='hr-home'/>
        <div className='skills-div'>
          <Skills/>
        </div>
    </div>
  );
};

export default Home;
