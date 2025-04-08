import '../styles/FooterComponentStyle.css'

function FooterComponent() {
    return (
        <>

            <footer className="footer">
                <div className="footer-content">
                    <h3 className="footer-heading">Let’s Build Something Amazing</h3>
                    <p className="footer-text">Connect with me:</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com" target="_blank" className="social-icon">LinkedIn</a>
                        <a href="https://github.com" target="_blank" className="social-icon">GitHub</a>
                        <a href="mailto:juan@example.com" className="social-icon">Email</a>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default FooterComponent;