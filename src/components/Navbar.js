import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiFrontendmentor, SiTwitter } from 'react-icons/si';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>bryantemple</h1>
      <div className="link">
        <a href="/">
          <AiFillGithub />
        </a>
        <a href="/">
          <SiFrontendmentor />
        </a>
        <a href="/">
          <AiFillLinkedin />
        </a>
        <a href="/">
          <SiTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
