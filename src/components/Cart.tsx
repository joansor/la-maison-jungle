function Cart():any{

    let priceMonstera : number = 8;
    let priceLierre : number = 10;
    let priceBDF : number = 15;
    return <ul><h4>Panier :</h4>
         <li>Monstera : {priceMonstera} </li>
         <li>Lierre : {priceLierre} </li>
         <li>Bouquet de fleur : {priceBDF} </li>
         <li>Total : {priceMonstera+priceLierre+priceBDF}</li>
         </ul>
}

export default Cart