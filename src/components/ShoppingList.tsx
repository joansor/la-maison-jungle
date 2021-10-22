import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
// import CareScale from './CareScale';
import PlantItem from './PlantItem';
// const plantList : Array<string> = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]
// function ShoppingList():any {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (
//                 <li key={`${plant}-${index}`}>{plant}</li>
//             ))}
//         </ul>
//     )
// }

function ShoppingList(): JSX.Element {
	const categories = plantList.reduce(
		(acc : any[], plant : any) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	
	return (
		<div>
			<ul>
				{categories.map((cat : any) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
			{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						key ={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
				{/* {plantList.map((plant : any) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
                        {plant.isSpecialOffer && <div className="lmj-sales">Solde</div>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
						<PlantItem plantName={plant.name} plantCover={plant.image} plantId={plant.id}/>
					</li>
				))} */}
			</ul>
		</div>
	)
}

export default ShoppingList
