import React, {Component} from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form'
import Header from './components/header/Header'


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [
        {
          name: "Shirt",
          price: 25,
          image: ""
        },
        {
          name: "Hoodie",
          price: 55,
          image: ""
        },
        {
          name: "Hat",
          price: 20,
          image: ""
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    )
  }
}