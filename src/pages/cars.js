import React from 'react';

class Cars extends React.Component {  
    constructor(name) {
        super(name)
        this.brand = name;
    }

    render() {
         const mycar = new Cars("Toyota");

        return (
            <div>
                <p>My car is a {mycar.brand}</p>
            </div>
           
           )       
        
    }   

}

export default Cars;