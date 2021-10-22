import CareScale from "./CareScale";
import '../styles/PlantItem.css';


type plantItemprops = {
    cover: string,
    name : string,
    water : number,
    light : number,
  };
function PlantItem({ cover, name, water, light }:plantItemprops):JSX.Element{



	return (
            <li className='lmj-plant-item'>
                <img src={cover} alt={name} className='lmj-plant-item-cover'/>{name}
                <div>
                    {/* <div onClick={() => alert(infoCareScale(water, 'eau'))}> */}
                    <CareScale careType='water' scaleValue={water} />
                    {/* </div> */}
                    {/* <div onClick={() => alert(infoCareScale(light, 'lumière'))}> */}
                    <CareScale careType='light' scaleValue={light} />
                    {/* </div> */}
                </div>
            </li>
	)
}
// function infoCareScale(value:number, type:string):string{

//     let message : string = "";

//     switch(value){
//         case 1:
//             return message = "Peu "+type;
//             break;
//         case 2:
//             return message = "modérement "+type;
//             break;
//         case 3:
//             return message = "Beaucoup "+type;
//             break;
//         default:
//             return message = "Pas d'info "+type
//     }

// }

export default PlantItem