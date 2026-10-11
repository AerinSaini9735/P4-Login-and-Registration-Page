import logo from './assets/Deakin.png'
function Footer() {
    return (
        <footer>
            <div className="footer-column">
                <div className="footer-column1">
                    <h3 style={{ fontWeight: "bolder" }}>Explore</h3>
                    <p>About Deakin</p>
                    <p>Careers</p>
                    <p>Articles</p>
                    <p>Tutorials</p>
                </div>

                <div className="footer-column2">
                    <h3>Connect With Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-column3">
                    <h3>Let Us Help You</h3>
                    <p>Your Account</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Help</p>
                </div>
            </div>

            <div className="legal-block">
                <img className="legal" src={logo} alt="Deakin logo" />
                <div className="footer-language-block">
                    <span className="language-footer">English</span>
                    <span className="footer-scroll">&#9662;</span>
                </div>
            </div>

            <div className="legal-block2">
                <div className="legal-links">
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Code of Conduct</p>
                </div>

                <div className="copyright">
                    <span>&#169;</span>
                    <span>2026 DEV@Deakin</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;