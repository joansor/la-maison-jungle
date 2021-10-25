import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'

type cartState = {
  cart: any,
  updateCart : any,
};

function ShoppingList({ cart, updateCart }:cartState) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories: any = plantList.reduce(
		(acc:any, plant:any) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addToCart(name:string, price:number) {
		const currentPlantSaved: any = cart.find((plant:any) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant : any = cart.filter(
				(plant:any) => plant.name !== name
			)
			console.log(cartFilteredCurrentPlant);
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
