import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'

function Photos() {
    return (
        <>
            <div className="info">
                <span>--------------------------------</span>
                <span>My photos</span>
            </div>
            <div className="my-photos">
                <img className="photo1" src={photo1} />
                <img className="photo2" src={photo2} />
                <img className="photo3" src={photo3} />
                <img className="photo4" src={photo4} />
            </div>
        </>
    )
}

export default Photos;