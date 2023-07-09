import React, { Component } from 'react'
let value = 0
function slider  (data)  {
    value = data;

}


console.log(slider)



   
  
export class Slider extends Component {
    render() {
        
        return (
          <div>
           
          
    
            
           






           
           <div class="slidecontainer">
    <form action="">
  <input type="range" name='slider' min="0" max="100"  class="sliders" id={'slider`s id 123   '} onChange={(el)=> {this.props.slider('value = '+ el.target.value +' '+ el.target.id); slider(el.target.value)}}/>
  <p>Temp      <img  id="img" alt=""/><span id="demo">{value}</span></p>
  </form>
  </div>
  

          
    
    
          
           
    
    
    
    
    
    
            
           
            
            
          
    
    
    
    
    
    
    
           
        </div>
    
    
                
           
            
            
        
        )
      }
    }


export default Slider
