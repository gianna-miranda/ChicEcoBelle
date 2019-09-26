import React from 'react';
import AppNav from '../components/core/AppNav/AppNav';

class Products extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3002/')
                .then(res => res.json())
                .then(ish => this.setState({ products: ish }))
      }
    render () {
        return (
        <>
       <AppNav />
       
           
        </>
    )
    }
}
export default Products;