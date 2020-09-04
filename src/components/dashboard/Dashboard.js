import React, {Component} from 'react'
import Product from '../product/Product'



export default class Dashboard extends Component{
    render(){
        return(
            <div className = "dashboard">
                <Product 
                {this.props.inventory.map(() => {
                    return(
                        <Product
                            name= {props.inventory.name}

                }
                )}

                />
            </div>
        )

}
}