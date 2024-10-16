import img1 from './assets/img-1.png'
import img2 from './assets/img-2.jpg'
import './App.css'

function App() {


  return (
    <>
        <section id="header">
          <div className="header container">
            <div className="nav-bar">
              <div className="brand">
                <a href="#hero">
                  <h1><span>Ma.</span>Hermosa <span>M</span>alapit</h1>
                </a>
              </div>
              <div className="nav-list">
                <div className="hamburger">
                  <div className="bar"></div>
                </div>
                <ul>
                  <li><a href="#hero" data-after="Home">Home</a></li>
                  <li><a href="#services" data-after="Service">Services</a></li>
                  <li><a href="#projects" data-after="Projects">Projects</a></li>
                  <li><a href="#about" data-after="About">About</a></li>
                  <li><a href="#contact" data-after="Contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End Header 


        {/* Hero Section  */}
        <section id="hero">
          <div className="hero container">
            <div>
              <h1>Hello, <span></span></h1>
              <h1>My Name is <span></span></h1>
              <h1>Mia<span></span></h1>
              <a href="#projects" type="button" className="cta">Portfolio</a>
            </div>f
          </div>
        </section>
        {/* End Hero Section  */}

        {/* Service Section */}
        <section id="services">
          <div className="services container">
            <div className="service-top">
              <h1 className="section-title">Serv<span>i</span>ces</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
                magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
                voluptatum explicabo!</p>
            </div>
            <div className="service-bottom">
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                  architecto placeat beatae tenetur officia quod</p>
              </div>
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                  architecto placeat beatae tenetur officia quod</p>
              </div>
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                  architecto placeat beatae tenetur officia quod</p>
              </div>
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                  architecto placeat beatae tenetur officia quod</p>
              </div>
            </div>
          </div>
        </section>
        {/* End Service Section */}

        {/* Projects Section */}
        <section id="projects">
          <div className="projects container">
            <div className="projects-header">
              <h1 className="section-title">Recent <span>Projects</span></h1>
            </div>
            <div className="all-projects">
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 1</h1>
                  <h2>Coding is Love</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                    rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                    harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
                </div>
                <div className="project-img">
                  <img src={img1} alt="img"/>
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 2</h1>
                  <h2>Coding is Love</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                    rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                    harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
                </div>
                <div className="project-img">
                  <img src={img1} alt="img"/>
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 3</h1>
                  <h2>Coding is Love</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                    rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                    harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
                </div>
                <div className="project-img">
                  <img src={img1} alt="img"/>
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 4</h1>
                  <h2>Coding is Love</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                    rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                    harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
                </div>
                <div className="project-img">
                  <img src={img1} alt="img"/>
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 5</h1>
                  <h2>Coding is Love</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                    rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                    harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
                </div>
                <div className="project-img">
                  <img src= {img1} alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Projects Section */}

        {/* About Section */}
        <section id="about">
          <div className="about container">
            <div className="col-left">ss
              <div className="about-img">
                <img src={img2} alt="img"/>
              </div>
            </div>
            <div className="col-right">
              <h1 className="section-title">About <span>me</span></h1>
              <h2>Front End Developer</h2>
              <p>I'm a passionate front-end developer with a knack for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I thrive on turning design concepts into functional and aesthetically pleasing websites. I enjoy staying updated on the latest trends and technologies in the industry, ensuring my projects are not only visually appealing but also optimized for performance and accessibility. Whether collaborating with designers or working independently, I love the challenge of solving problems and enhancing user experience</p>
              <a href="./assets/resume.pdf" download = "ma.hermosa_cv.pdf"className="cta">Download CV</a>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* Contact Section */}
        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">Contact <span>info</span></h1>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>0922suk</h2>
                  
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <h2>mahermosamaganda@gmail.com</h2>
                  <h2>mahermosamalapit@student.laverdad.edu.ph</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                <div className="contact-info">
                  <h1>Address</h1>
                  <h2>San Jose Del Monte Bulacan</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}

        {/* Footer */}
        <section id="footer">
          <div className="footer container">
            <div className="brand">
              <h1><span>Ma.</span>Hermosa <span>M</span>alapit</h1>
            </div>
            <h2>Your Complete Web Solution</h2>
            <div className="social-icon">
              <div className="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
              </div>
              <div className="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
              </div>
            </div>
            <p>All rights reserved</p>
          </div>
        </section>
    </>
  )
}

export default App
