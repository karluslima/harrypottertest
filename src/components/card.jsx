import { useHarryCharacters } from "../hooks/useHarryCharacters"
import "../assets/card.scss"
import "../assets/no-photo.png"


export default function Card() {
  const {data} = useHarryCharacters();
  const nophoto = "https://e7.pngegg.com/pngimages/536/147/png-clipart-logo-harry-potter-and-the-cursed-child-hogwarts-james-potter-fictional-universe-of-harry-potter-harry-potter-logo-magic.png"
  return (
  <div className="characters">
    {data?.map(card => {
      return(
        <div className="character" key={card.id}>
          <div className="character--photo">
            <div className="character--photo--gradient"></div>
            <div className="character--name"> {card.name} </div>
            <img src={card?.image ? card.image : '../assets/no-photo.png' } alt={card.name} />
          </div>
          <div className="character--birth"> <b>Data de Nascimento: </b> {card.dateOfBirth ? card.dateOfBirth : 'sem informção '} </div>
          <div className="character--house"> <b>Casa:</b> {card?.house ? card.house : 'casa desconhecida'} </div>
          <div className="character--patronus"> <b>Patrono:</b> {card.patronus ? card.patronus : 'sem informação'} </div>
          <div className="character--actor"> <b>Ator:</b> {card.actor ? card.actor : 'ator desconhecido'} </div>
          <div className="character--alive"> <b>Esta vivo?:</b> {card.alive == true ? 'Sim' : 'Não'} </div>
        </div>
        )
    })}
  </div>
)
}