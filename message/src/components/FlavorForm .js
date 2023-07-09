import React, {useState} from 'react';
class NameForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          mess : [] 
          
        }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    this.setState({mess: [...this.state.mess, event]})
      event.preventDefault();
    }
  text = this.state.data
    render() {
      return (<div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        </div>
      );
    }
  }
  export default NameForm;