import React from 'react';
import './_Compare.scss';

class Compare extends React.Component {
    render () {
        return (
        <>
            <section className="compare">
                <div className="one">
                    <h1>Handmade Soaps:</h1>
                    <br></br>
                    <p>
                    Ingredients:
                
                      
                         Natural glycerin
                        <br></br>
                        Not tested on animals
                        <br></br>
                         No unnecessary packaging 
                        <br></br>
                         Made in small batches to 
                        Insure no need to add chemicals 
                   
                    </p>
                </div>

                <div className="two">
                    <h1>Commercial Soap:</h1> 
                    <p>
                    <br></br>
                    Cons of commercial soap:
                    <br></br>
                        Petroleum - how is it used in soaps?why does it matter? 
                        <br></br>
                        Non-natural ingredients
                        <br></br>
                        Fragrances
                        <br></br>
                        Commercial soap manufacturers use a process called “getting” to remove the glycerin from the action of the soap.  

                    </p>
                </div>
            </section>
        </>
    )
    }
}
export default Compare;