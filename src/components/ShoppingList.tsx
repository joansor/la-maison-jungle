import { plantList } from "../datas/plantList";

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
  const categories : any = plantList.reduce(
    (acc: any[], plant: any) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
    console.table(categories);
  return (
    <div>
      <ul>
        {categories.map((cat : string) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant : any) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList
