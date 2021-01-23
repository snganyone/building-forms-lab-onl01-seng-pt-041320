// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
    }
  }
  render() {
    return(
      <div>
        <form>
          <input type="text" 
          value={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default BandInput
