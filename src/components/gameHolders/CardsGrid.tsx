
import { GameData, CardTypes } from "../../types"
import { CardTall } from "./CardTall"
import { CardThin } from "./CardThin"
import { CardWide } from "./CardWide"

export const CardsGrid = ( { title, cardType, games }: { title:string, cardType: CardType, games:GameData[] }) => {
  return (
  <div className="container">
    <h2 className="section-title text-white" >{ title }</h2>
    <div className="highlights-grid">
      {
        games.map( (game) => {
          switch (cardType) {
            case CardTypes.TALL:
                return <CardTall gameData={game} key={game.id} />
              break;
            case CardTypes.THIN:
                return <CardThin gameData={game} key={game.id} />
              break;
            case CardTypes.WIDE:
                return <CardWide gameData={game} key={game.id} />
              break;
            default:
                return <CardTall gameData={game} key={game.id} />
              break;
          }
        })
      }
    </div>
  </div>
  )
}
