import React from 'react'
import '../../feature/product_cards/modal.css'


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
             // console.log(this.state)
  
             // this.state.map((index, item) => {
             //     console.log(item)
             //     console.log(index)
             // })
             // .catch(err => err)
         })
        }
     render(){
     return (
         
         <div className= "main_grid">
         {this.state.items.map((item, index) => {
            console.log(item)
         //    console.log(index)
              
              return (
                 <div key={index} className= {item.image_id}>
                     <a href={item.hyperlink} target= "_blank" className="overlay">
                         <p>{item.original_price}</p>
                     </a>
                 </div>
                 )
             })
             }
         </div>      
     )
  }
 }
 export default Modal;