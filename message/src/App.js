import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Swichs from './components/Swichs';
import Slider from './components/Slider';
import Json from './Json.json';
import Articles from './components/Articles';
import Message from './components/Message';
import FlavorForm from './components/FlavorForm ';

  // And now you can use hooks
  // But only inside your functional component's
  // body


  
    

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message :[],
      data : Json,
      states : Json,
     
      orders: [],
      
      items:[
        {
          id:1,
          "img": "chair_1.jfif",
          "title": "chair",
          "price": "100",
          "description": "chair chair chair chair chair",
       
        },
        {
          id:2,
          "img": "chair_2.jfif",
          "title": "chair",
          "price": "100",
          "description": "chair chair chair chair chair",
        },
        {
          id:3,
          "img": "table_1.jfif",
          "title": "table",
          "price": "100",
          "description": "table table table table",
        },
        {
          id:4,
          "img": "table_2.jfif",
          "title": "table",
          "price": "100",
          "description": "table table table table",

        },
        {
          id:4,
          "img": "table_2.jfif",
          "title": "table",
          "price": "100",
          "description": "table table table table",

        },
        
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.swich = this.swich.bind(this)
    this.slider = this.slider.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.add = this.add.bind(this)
    


  }
  chooseCategory(category){
    if(category === 'all'){
      this.setState({states : this.state.data})

    }
    else{
    this.setState({states: this.state.data.filter(el => el.kingdom === category)})}
    
    
  }
 
  render(){
    
    
    
    return (
    
    <div className='wrapper'>
        
        <FlavorForm/>
       
    </div>
     );

   
  
  } 
  add(text){
    
    this.setState({message: [...this.state.message, text]})

  }
  
  deleteOrder(id){
    this.setState({ orders: this.state.orders.filter(el => (el.id !== id
    ))})

  }
  swich(el){
    
    
 
    this.setState({data: [...this.state.data  , el]})
  }
  slider(el){
    alert(el)
    
    console.log(this.state.data)
    console.log(el)
    this.setState({data: [...this.state.data, el]},() => {console.log(this.state.data)})
  }
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
        isInArray = true

    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]},() => {console.log(this.state.orders)})
  }
}

export default App;
