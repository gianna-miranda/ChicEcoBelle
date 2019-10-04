import React from 'react'
import '../../feature/product_cards/modal.css'
import"./modal.css"


class Modal extends React.Component {
    state = {
        items:[],
        search : []
    }
    
    componentDidMount(){
        fetch('http://localhost:3002/api/products')
        .then(res => res.json())
        .then(product => {
            console.log(product)
             this.setState({items: product})
         })
        }

        render(){
            return (
                    <>
                
                    <section className="search">
                        <label className="search__title">Search For Product</label>
                        <input className="search__input" type="text" placeholder="Title" onChange={this.handleSearch} value={this.state.search} ></input>
                    </section>
                
                {/* Grids for my products  */}
                    <div className= "main_grid">
                
                        {this.state.items.map((item, index) => {
                        
                        return (
                            
                            <div key={index} className= {item.image_id}>
                                <a href={item.hyperlink} target= "_blank">
                                    <div className="overlay">
                                        <p className="price">{item.original_price}</p>
                                        <p className="name">{item.ProductName}</p> 
                                    </div>
                                </a>
                            </div>
                        
                            )})
                        }
                    
                    </div>
        
                    </>
                
                     
            )
         }
        }

 export default Modal;