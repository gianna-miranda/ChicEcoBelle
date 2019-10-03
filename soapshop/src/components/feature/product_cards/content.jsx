import React from 'react';
import './content.css';

import ProductCard from './ProductCard';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    ////filter A-Z
_AtoZfilter = () => {
    fetch('http://localhost:3002/api/productA-Z')
    .then(res => res.json())
    .then(products => this.setState({products : products}))
    console.log('Filter')
}
_ZtoAfilter = () => {
    fetch('http://localhost:3002/api/productZ-A')
    .then(res => res.json())
    .then(products => this.setState({products : products}))
    console.log('Filter')
}
_filterByLowest = () => {
    fetch('http://localhost:3002/api/lowtohigh')
        .then(res => res.json())
        .then(albums => this.setState({ products: albums }))
    console.log('working')
   
}
_filterByHighest = () => {
    fetch('http://localhost:3002/api/hightolow')
        .then(res => res.json())
        .then(albums => this.setState({ products: albums }))
    console.log('working')
    
}

    componentDidMount() {
        this.displayProducts();
    }

    displayProducts = () => {
        fetch('http://localhost:3002/api/products')
        .then(res => res.json())
        .then(soaps => this.setState({ products: soaps }))
    }

    

    render () {
        return (
        <>
        <div className="wrap">
            {this.state.products.map(p => <ProductCard id={p.products_class} key={p.product_id} title={p.product_title} Description={p.Description} price={p.price}/>)}
        </div>

        <div className="filter">
            <h3 >Filter Soaps</h3>
            <button onClick={this._AtoZfilter}>Name From A-Z</button>
            <button onClick={this._ZtoAfilter}className="filter__button">Name from Z-A</button>
            <button onClick={this._filterByLowest} className="filter__button">Price Low To High</button>
            <button onClick={this._filterByHighest}className="filter__button">Price High To Low</button>
        </div>
        </>
        )
    }
}
 
export default Content;