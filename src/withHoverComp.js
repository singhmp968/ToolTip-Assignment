import { render } from '@testing-library/react';
import React from 'react';



function withHoverComp(component) {
    class withHoverComp extends React.Component{
        constructor(props){
            super(props);
            this.state = {hovering:false}
        }
    
    render(){
        return (
            <div className="App">
                <h1>Higer oeder component</h1>
                
            </div>
          );
    }
}
}

export default withHoverComp;
