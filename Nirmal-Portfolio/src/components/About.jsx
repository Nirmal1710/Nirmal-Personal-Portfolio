
import "./About.css"


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img
              src=""
              alt="About me"
              width={400}
              height={400}
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="about-description">
              I'm a passionate software developer with a strong foundation in web technologies and a keen eye for
              creating engaging user experiences. With a background in computer science and several years of hands-on
              experience, I specialize in building responsive, accessible, and performant web applications.
            </p>
            <p className="about-description">
              My journey in software development began during my university years, where I discovered my passion for
              turning ideas into functional and beautiful digital experiences. Since then, I've worked on various
              projects, from small business websites to complex enterprise applications.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Nirmal S Samson</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">nirmalsamson1017@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Alappuzha, Kerala</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

