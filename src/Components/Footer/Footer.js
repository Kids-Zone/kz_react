import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-dark" style={{ height: "90px", padding: "16px" }}>
      <footer>
        <div className="container">
          <div className="col item social">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
            </a>
            <a href="https://twitter.com/techreturners">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            </a>
            <a href="https://www.snapchat.com/">
              <FontAwesomeIcon icon={["fab", "snapchat"]} size="lg" />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
            </a>
          </div>
          <p className="copyright">KidsZone © 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
