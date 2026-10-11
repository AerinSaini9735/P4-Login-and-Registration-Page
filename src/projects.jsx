import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
function Project() {
    return (
        <>
          <div className="project1">
            <img className="amazon-project" src={project1} alt="Amazon-Project"/>
            <a href="https://uchihaitachi973.github.io/amazon-project-2/amazon.html" target="_blank" rel="noreferrer">My amazon project</a>
          </div>
          <div className="project2">
            <img className="rock-paper-scissors-project" src={project2} alt="Rock-Paper-Scissors-Project" />
            <a href="https://uchihaitachi973.github.io/Rock-Paper-Scissors-game/rock-paper-scissors.html" target="_blank" rel="noreferrer">My Rock Paper Scissors Game</a>
          </div>
        </>
    )
}

export default Project;