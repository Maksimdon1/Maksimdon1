import React, { Component } from 'react'

export class Swichs extends Component {
  render() {
    function sayHello(name) {
        console.log(name.target.value)
      }
    return (
      <div>
       
      {this.props.items.map(el =>(<div>

        
       <img src={"./img/" + el.img}></img>
       <h2>{el.title}</h2>
       <p>{el.description}</p>
       <b>{el.price}$</b>
      


      
       






        
        <label class="switch">
    <input    class="switch-toggle switch-toggle-round" type="checkbox" id = {el.id} onClick={(el)=> {this.props.swich(el.target.checked +' '+ el.target.id)}}/>
    <span class="slider round"></span>
</label>
        
        
      







       </div>
      ))}
    </div>


            
       
        
        
    
    )
  }
}

export default Swichs
