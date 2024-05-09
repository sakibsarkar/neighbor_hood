import Image from "next/image";
import "./index.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="sub-footer-container">
        <hr className="footer-separator" aria-orientation="horizontal" />
        <div className="copyright">
          Made by your neighbors in Santa Clara, CA. © Neighborhood Node 2023.
          <div className="splash-footer-logo-containers">
            <a
              href="https://www.linkedin.com/in/christopher-banas/"
              className="splash-footer-linkedin-logo"
            >
              <Image
                width={25}
                height={25}
                src="/images/linkedin.png"
                className="splash-footer-portfolio-logo"
                alt="LinkedIn logo"
              />
            </a>
            <a
              href="/images/linkedin.png"
              className="news-feed-nav-bar-github-logo"
            >
              <Image
                width={25}
                height={25}
                src={"/images/github.png"}
                className="splash-footer-portfolio-logo"
                alt="Github logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
