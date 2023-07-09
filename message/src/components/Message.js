import React, {useState} from 'react'
import Categories from './Categories'







const Message = (props) =>{
    

    const posts = props.states
   
    
    
    console.log(posts)
    
   
     

     
    
                
    

    
    
    
    return(<div >
        <h1>МАКСимум знаний</h1>
       
              <form>
  <label>
    Name:
    <input type="text" name="name"onChange={(event)=> {props.add(event.target.value); }} />
  </label>
  <input type="submit" value="Submit" />
  <input type="file" />
</form>
             
       
        


        
        
        
        
          
                    {posts}
                
               
            
      





        
    </div>
        
        
       
        
      
            
        



























    )








}
export default Message