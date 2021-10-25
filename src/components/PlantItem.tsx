import CareScale from './CareScale'
import '../styles/PlantItem.css'


type plantItemState = {
    cover: string,
    name : string,
    water : number,
    light : number,
    price : number,
  };
  
function PlantItem({ cover, name, water, light, price }:plantItemState) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
function handleClick(plantName:string) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem