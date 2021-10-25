import { useState } from 'react'
import '../styles/Footer.css'


export interface stateFooter {
    inputValue: string;
    setInputValue: string;
  }
  
function Footer() :JSX.Element {
	const [inputValue, setInputValue] = useState<string>("");

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <div>
            <input
				placeholder='Entrez votre mail'
				onChange={(e)=>setInputValue(e.target.value)}
				value={inputValue}
				onBlur={()=>checkValue}
			/>
                    
            </div>
		</footer>
	)
    function checkValue(value : string):any {
        if (!value.includes('@')) {
           return alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
        }
    }
}

export default Footer