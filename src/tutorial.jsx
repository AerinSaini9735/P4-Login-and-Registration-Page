import tutorial1 from './assets/tutorial1.webp'
import tutorial2 from './assets/tutorial2.png'
import tutorial3 from './assets/tutorial3.webp'
function Tutorial() {
    return (
        <section>
            <div className="tutorials">
                <div className="tutorial">
                    <div className="tutorial-info">
                        <img className="tutorial-image" src={tutorial1} alt="tutorial 1" />
                        <h3>Node.js</h3>
                        <h4><strong>Description:</strong> Creating a Node.js Server</h4>
                        <p>eg. NodeJS </p>
                        <p>4 &#x2605; Pratyush</p>
                    </div>
                </div>
                <div className="tutorial">
                    <div className="tutorial-info">
                        <img className="tutorial-image" src={tutorial2} alt="tutorial 2" />
                        <h3>React Tutorial</h3>
                        <h4><strong>Description:</strong>React tutorial from Begineer to Pro</h4>
                        <p>eg. </p>
                        <p>rating</p>
                    </div>
                </div>
                <div className="tutorial">
                    <div className="tutorial-info">
                        <img className="tutorial-image" src={tutorial3} alt="tutorial 2" />
                        <h3>Javascript</h3>
                        <h4><strong>Description:</strong> Understanding JavaScript</h4>
                        <p>eg. JavaScript</p>
                        <p>4 &#x2605; Ansh</p>
                    </div>
                </div>
            </div>
            <button className="tutorial-button">See all tutorials</button>
        </section>

    )
}

export default Tutorial;