import React from 'react';

class App extends React.Component {
 
  constructor(){
    super()
    this.state = {
     firstName:'',
     lastnName:'',
     age:'',
     gender:'',
     location:'',  
    isVegan:false,
    isKosher:false,
    isLactoseFree:false
     
    }
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
   const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
  handleSubmit(event){
    event.preventDefault();
  }

 render(){
    return (
      <main>
      <form onChange={this.handleSubmit}>
        <label>First Name: </label>
          <input 
            type='text' 
            placeholder='First name' 
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange} 
          /><br/>

          <label>Last Name: </label>
          <input 
            type='text' 
            placeholder='Last name' 
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange} 
        /><br/>

        <label> Age: </label>
          <input 
            type='number' 
            placeholder='Age' 
            name='age'
            value={this.state.age}
            onChange={this.handleChange} 
        /><br/>

        <label>
          <input 
            type='radio'  
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
        /> Male 
        </label><br/>
        <label>
          <input 
            type='radio'  
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
        /> Female 
        </label><br/>
        <select 
        name='location'
        value={this.state.location}
        onChange={this.handleChange}
        >
          <option value=''>-- Please Choose a destination --</option>
          <option value='paris'>Paris</option>
          <option value='milano'>Milano</option>
          <option value='berlin'>Berlin</option>
        </select><br/>
        <label> 
          <input 
          type='checkbox' 
          name='isVegan' 
          onChange={this.handleChange}
          checked={this.state.isVegan}
        />Vegetarian</label><br/>
        <label> 
          <input 
          type='checkbox' 
          name='isKosher'
          onChange={this.handleChange}
          checked={this.state.isKosher}
        />Kosher</label><br/>
        <label> 
          <input 
          type='checkbox' 
          name='lactose' 
          onChange={this.handleChange}
          checked={this.state.lactose}
        />Lactose free</label><br/>
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {this.state.firstName} {this.state.lastName}</p>
      <p>Your age: {this.state.age}</p>
      <p>Your gender: {this.state.gender}</p>
      <p>Your destination: {this.state.location}</p>
      <p>Your dietary restrictions:</p>
      <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
      <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
     </main>
    )
  }
}

export default App;
