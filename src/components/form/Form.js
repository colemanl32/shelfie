import React, { Component } from 'react'




export default class Form extends Component{

    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''

            
        }
        
        this.handleImgChange = this.handleImgChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    
    }

    handleNameChange(event) {
        this.setState({name: event.target.name})
    }

    handleImgChange(event) {
        this.setState({imgurl: event.target.imgurl })
    }



    render(){
        return(
            <div>

            
            <form >
                <input type="text" name={this.state.name} onSubmit= {this.handleNameChange} placeholder = 'Input name' />
                <input type="image" alt='No Picture Yet' width="72" height="56" />
                <input type="text" price={this.state.price}/>
                <button onClick="handleCancel">Cancel</button>
                <button>Add to Inventory</button>
            </form>
            </div>
        )

}
}