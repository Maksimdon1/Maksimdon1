import React, {useState} from 'react'
import Categories from './Categories'
import User_interface from './User_interface'






const Articles = (props) =>{
    

    const posts = props.states
   
    
    
    const[loading, setLoding] = useState(true)
    

    
    
   
        

    





    let end_data = {
        "plants": [
            
        ],
        "animals": [
            
        ],
        "mushrooms": [
                
        ],
        "bacteria": [
                
        ],
        
    }
    const category_filter = () => {
         end_data.plants = posts.filter(el => (el.kingdom === 'plants'
        ))
        end_data.animals = posts.filter(el => (el.kingdom === 'animals'
        ))
        end_data.bacteria = posts.filter(el => (el.kingdom === 'bacteria'
        ))
        end_data.mushrooms = posts.filter(el => (el.kingdom === 'mushrooms'
        ))
    
      }
      category_filter()

    const[value, setValue]= useState('')
    const filter = () => {
        if (value) {
        end_data.mushrooms = end_data.mushrooms.filter(el => (el.title.toLowerCase().includes(value.toLowerCase())
        ))
        end_data.animals = end_data.animals.filter(el => (el.title.toLowerCase().includes(value.toLowerCase())
            ))
        end_data.bacteria = end_data.bacteria.filter(el => (el.title.toLowerCase().includes(value.toLowerCase())
            ))
        end_data.plants = end_data.plants.filter(el => (el.title.toLowerCase().includes(value.toLowerCase())
            ))}
        else{
        
        }
       
   
     }
     filter()

     
    
                
    

    
    
    
    return(<div className='main'>
        <h1>МАКСимум знаний</h1>
        <div className='serch'>
        <form action="" method="get">
                <input name="serch" placeholder="Введите название" type="search" value={value} onChange={(event)=> {setValue(event.target.value); }}/>
                
      
              </form>
              </div>
        <div className='filter'> 
            <Categories choose={props.chooseCategory}/>
           
            
        </div>
        


        
        
        <div className='wrappers'>
            {end_data.animals.map(post => (
                
                
                
                    <a className='card_animals' href={post.title} >
                        
                       
                        <h4 >{post.kingdom}</h4> <h1>{post.title}</h1>
                    
                    </a >
                ))}
                {end_data.plants.map(post => (
                    <div className='card_plants' >
                            <h4>{post.kingdom}</h4>
                            <h1>{post.title}</h1>
                    </div>
                ))}
                {end_data.bacteria.map(post => (
                    <div className='card_bacteria' >
                            <h4>{post.kingdom}</h4>
                            <h1>{post.title}</h1>
                    </div>
                ))}
                {end_data.mushrooms.map(post => (
                    <div className='card_mushroom' >
                            <h4>{post.kingdom}</h4>
                            <h1>{post.title}</h1>
                    </div>
                   
                ))}
        </div>





        
    </div>
        
        
       
        
      
            
        



























    )








}
export default Articles