import React from 'react';
import gle from '../gle.jpg';



class Cars extends React.Component {  
    constructor(name) {
        super(name)
        this.brand = name;
    }




    render() {
         const mycar = new Cars("GLE");

         



        return (
            <div>
                <p>My car is a {mycar.brand}</p>
                <img src={gle}  alt="mercedes gle" width="20%"/>

            </div>
           
           
           )       
        
    }   

}

export default Cars;