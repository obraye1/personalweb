import './projects.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

const Projects = () => {
  return (
    <main>
      <div className="project-body">
        <h2>Projects</h2>
        <div className="pro-div">
          <button type="button" className="btn">
            Contact Me
          </button>
        </div>
      </div>
      <div className="project">
        <div>
          <div className="proj-con">
            {/* image div */}
            <picture className="proj-img">
              <div className="img-link">
                <button className="btn">VIEW PRODUCT</button>
                <button className="btn">VIEW CODE</button>
              </div>
              <img
                src={img1}
                height={350}
                width={475}
                alt="project screenshoot 2"
              />
            </picture>
            <div>
              <h5>Design Portfolio</h5>
              <div className="para">
                <p>HTML</p>
                <p>CSS</p>
              </div>
            </div>
          </div>

          <div>
            <div className="proj-con">
              {/* image div */}
              <picture className="proj-img">
                <div className="img-link">
                  <button className="btn">VIEW PRODUCT</button>
                  <button className="btn">VIEW CODE</button>
                </div>
                <img
                  src={img2}
                  height={350}
                  width={475}
                  sizes="(max-width: 640px) 400px,
            800px"
                  loading="lazy"
                  alt="project screenshoot 2"
                />
              </picture>
              <div>
                <h5>OpenWeatherApi</h5>
                <div className="para">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>ReactJS</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="proj-con">
              {/* image div */}
              <picture className="proj-img">
                <div className="img-link">
                  <button className="btn">VIEW PRODUCT</button>
                  <button className="btn">VIEW CODE</button>
                </div>
                <img
                  src={img3}
                  height={350}
                  width={475}
                  sizes="(max-width: 640px) 400px,
            800px"
                  loading="lazy"
                  alt="project screenshoot 3"
                />
              </picture>
              <div>
                <h5>Personal Portfolio website</h5>
                <div className="para">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>ReactJS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="proj-con">
              {/* image div */}
              <picture className="proj-img">
                <div className="img-link">
                  <button className="btn">VIEW PRODUCT</button>
                  <button className="btn">VIEW CODE</button>
                </div>
                <img
                  src={img4}
                  height={350}
                  width={475}
                  sizes="(max-width: 640px) 400px,
            800px"
                  loading="lazy"
                  alt="project screenshoot 4"
                />
              </picture>
              <div>
                <h5>Design </h5>
                <div className="para">
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="proj-con">
              {/* image div */}
              <picture className="proj-img">
                <div className="img-link">
                  <button className="btn">VIEW PRODUCT</button>
                  <button className="btn">VIEW CODE</button>
                </div>
                <img
                  src={img5}
                  height={350}
                  width={475}
                  sizes="(max-width: 640px) 400px,
            800px"
                  loading="lazy"
                  alt="project screenshoot 5"
                />
              </picture>
              <div>
                <h5> Portfolio</h5>
                <div className="para">
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="proj-con">
              {/* image div */}
              <picture className="proj-img">
                <div className="img-link">
                  <button className="btn">VIEW PRODUCT</button>
                  <button className="btn">VIEW CODE</button>
                </div>
                <img
                  src={img6}
                  height={350}
                  width={475}
                  sizes="(max-width: 640px) 400px,
            800px"
                  loading="lazy"
                  alt="project screenshoot 6"
                />
              </picture>
              <div>
                <h5>Design Portfolio</h5>
                <div className="para">
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
