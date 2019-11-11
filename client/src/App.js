import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      hello: null,
    }
  }
  componentDidMount(){
    axios.get('/hello')
    .then(res=>{
      console.log(res.data);
      this.setState({hello:res.data});
    })
    .catch(err=> console.log(err));
  }
  
  render() {
    return (
      <div>
        {this.state.hello?
          (<h1>Hello Bloger</h1>)
          : null
        }
      </div>
    )
  }
}

export default App;