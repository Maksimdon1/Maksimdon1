import React, { Component, startTransition } from 'react'
import { FaTintSlash } from 'react-icons/fa'

export class Categories extends Component {
  constructor(props){
    super(props)
    this.state ={
        categories:[
            {
                key: 'all',
                name:'Все'
            },
            {
                key: 'plants',
                name:'Растения'
            },
            {
                key: 'animals',
                name:'Животные'
            },
            {
                key: 'mushrooms',
                name:'Грибы'
            },
            {
                key: 'bacteria',
                name:'Бактерии'
            }
        ]

    }
  }
    render() {
    return (
      <center><div className='categories'>
        {this.state.categories.map(el =>(
            <div key = {el.key} onClick={() => this.props.choose(el.key)}>{el.name}</div>
        ))}
        
      </div></center>
    )
  }
}

export default Categories
