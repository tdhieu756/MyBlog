import React, { Component, Fragment } from 'react'
import axios from 'axios';
import HomePage from './page/HomePage';
import Login from './components/Login';

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
      <Fragment>
        <HomePage/>
        <Login/>
      </Fragment>
    )
  }
}

export default App;