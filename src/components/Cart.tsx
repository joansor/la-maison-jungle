import "../styles/Cart.css";

function Cart(): any {
  let priceMonstera: number = 8;
  let priceLierre: number = 10;
  let priceBDF: number = 15;
  return (
    <div className="lmj-cart">
      <ul>
        <h4>Panier :</h4>
        <li>Monstera : {priceMonstera} </li>
        <li>Lierre : {priceLierre} </li>
        <li>Bouquet de fleur : {priceBDF} </li>
      </ul>
      <p>Total : {priceMonstera + priceLierre + priceBDF}€</p>
    </div>
  );
}

export default Cart;
