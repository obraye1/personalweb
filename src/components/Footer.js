import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiFrontendmentor, SiTwitter } from 'react-icons/si';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
