import React , {useState}from 'react'
import { FaShoppingBag} from "react-icons/fa";
import Order from './Order';


const showOrders = (props) =>{
    let summa = 0
    props.orders.forEach(el => summa += Number.parseInt(el.price)
        
    );
        return(<div>{props.orders.map(el =>(<Order onDelete={props.onDelete} key={el.id} item={el}/>))}
        <p className='summa'>Сумма:{summa}$</p>
        </div>)}

const showNothing = () =>{
    return(<div className='empty'><h2>Нет Товаров</h2></div>)
}





export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
        <FaShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`}/>
           
            <span className='logo'>house staff</span>
            
            <ul className='nav'>
                <li> про нас</li>
                <li>контакты</li>
                <li>кабинет</li>
               
            </ul>
            {cartOpen && (
                <div className='shop-card'>
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
      
    </header>
  )
}
