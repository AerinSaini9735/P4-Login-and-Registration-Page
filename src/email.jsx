function Email() {
    return (
        <>
            <div className="sign-up-heading">
                <span>--------------------------------</span>
                <span>Sign-up</span>
            </div>
            <div className="sign-up-container">
                <span>SIGN UP FOR OUR DAILY INSIDER</span>
                <form className="subscribe-form">
                    <input className="search" type="email" placeholder="Enter your email" required />
                    <button className="subscribe" type="submit">Subscribe</button>
                </form>
            </div>
        </>

    )
}

export default Email;