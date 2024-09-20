import "./contact.scss";
import SocialLink from "../../components/SocialLink";

const Contact = () => {
  return (
    <>
      <header>
        <div className="header-banner"></div>
      </header>

      <main>
        <h1>Get in Touch</h1>
        <p>Reach out with any questions. We are here to help.</p>
        <div className="social-links-page">
          <SocialLink />
        </div>
      </main>
    </>
  );
};

export default Contact;
