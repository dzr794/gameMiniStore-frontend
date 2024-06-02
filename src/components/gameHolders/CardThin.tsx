import { Link } from "react-router-dom"
import { GameData } from "../../types/"

export const CardThin = ({ gameData } : { gameData:GameData }) => {
  return (
    <Link to={"/game/"+ gameData.id } className="game gameCardThin text-decoration-none">
      <div className="banner" >
        <img src={ gameData.image } alt={ gameData.title + "banner"} />
      </div>
      <div className="info">
        <div className="title text-white">
          <span>{ gameData.title }</span>
        </div>
        <div className="deal">
            <span className="price">
              ${ (gameData.price > 0) ? gameData.price : "Free to Play" }
            </span>
        </div>
      </div>
    </Link>
  )
}
