import article1 from './assets/article1.jpg'
import article2 from './assets/article2.png'
import article3 from './assets/article3.png'
function Article() {
    return (
        <section className="section">
            <div className="articles">
                {/*Article */}
                <div className="article">
                    <div className="article-info">
                        <img className="article-image" src={article1} alt="Article 1"/>
                        <h3>Amazon Project</h3>
                        <h4><strong>Description:</strong> Amazon clone using HTML/CSS</h4>
                        <p>eg. HTML/CSS</p>
                        <p>5 &#x2605; Aerin Saini</p>
                    </div>
                </div>
                <div className="article">
                    <div className="article-info">
                        <img className="article-image" src={article2} alt="Article 2"/>
                        <h3>Rock Paper Scissors</h3>
                        <h4><strong>Description:</strong> Mini Project using HTML/CSS & JavaScript</h4>
                        <p>eg. JavaScript</p>
                        <p>5 &#x2605; Aerin Saini</p>
                    </div>
                </div>
                <div className="article">
                    <div className="article-info">
                        <img className="article-image" src={article3} alt="Article 3"/>
                        <h3>DEV@Deakin</h3>
                        <h4><strong>Description:</strong>Deakin website</h4>
                        <p>eg. React</p>
                        <p>4 &#x2605; Aerin Saini</p>
                    </div>
                </div>
            </div>
            <button className="article-button">See all articles</button>
        </section>

    );
}

export default Article;