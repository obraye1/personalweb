import './home.css';
import picture from '../assets/download.jpg';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <main className="mainPage">
      <div className="home">
        <div className="coin">
          <h2>
            Nice to meet you! I'm
            <span className="bryan-txt">Bryan Temple</span>
          </h2>
          <p className="p-coin">
            Based in Lagos,Ng. I'm a FrontEnd Developer passsionate about
            building accessible web apps that users love
          </p>
          <button type="button" className="btn">
            Contact Me
          </button>
        </div>
        <div>
          <img
            src={picture}
            className="profile-img"
            alt="Bryan in a gray background"
          />
        </div>
        <hr className="hr-home" />
        <div>
          <Skills />
          <Projects />
        </div>
      </div>
      <div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
