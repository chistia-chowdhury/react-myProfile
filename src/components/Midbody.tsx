import "./Midbody.css"
import pic from "../assets/chistia.jpg"
import gitlogo from "../assets/git.png";
import linklogo from "../assets/linkedin.png";
import dalogo from "../assets/icon-logo-erp++.png"

function Midbody() {

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/md-chistia-chowdhury-2b8038a", "_blank");
    };

    const openGithub = () => {
        window.open("https://github.com/chistia-chowdhury", "_blank");
    };
  return (
    <div className="midbody">
      <div className="intro">
        <img src={pic} alt="Md Chistia Chowdhury" className="profile-pic" />
        <h2>Md Chistia Chowdhury</h2>
        <h4>Enterprise Software Architect & Business Analyst</h4>
        <div className="logo-expert">
            <a href="http://www.dreamapps.com/da/portal?id=200&site=WebSite" target="_blank" rel="noopener noreferrer">
                <img src={dalogo} alt='DreamApps Logo' className="da-logo" />
            </a>
            <span className="expert-text">Expert</span>
        </div>
        <div className="social-buttons">
          <button className="icon-btn" onClick={openLinkedIn} aria-label="LinkedIn">
            <img src={linklogo} alt="LinkedIn" />
          </button>
          <button className="icon-btn" onClick={openGithub} aria-label="GitHub">
            <img src={gitlogo} alt="GitHub" />
          </button>
        </div>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I’m a seasoned software engineer and system analyst with over 20 years of experience in enterprise application development, ERP implementation, and technical support leadership. My career spans full-stack development, mobile app integration, and business intelligence—leveraging tools like Java/J2EE, Python, Django, SQL, and Power BI to drive operational efficiency and customer satisfaction.
        </p>
        <p>
          I’ve led cross-functional teams to deliver scalable solutions for sales automation, HR systems, and supply chain management, with a strong focus on agile methodologies and RESTful API integration. My background also includes hands-on experience in project management, data analysis, and stakeholder collaboration across diverse industries.
        </p>
        <p>
          Currently pursuing a Master’s in Computing and Data Analytics at Saint Mary’s University in Halifax, I’m passionate about bridging technical innovation with real-world impact—especially in education, healthcare, and workflow optimization.
        </p>
      </div>
    </div>
  )
}

export default Midbody
