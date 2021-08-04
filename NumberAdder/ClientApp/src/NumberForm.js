import React from 'react';

class NumberForm extends React.Component {
  
    
    render() { 
        return ( 
            <div className="row">
               <div className="col-md-8">
                   <button className="btn btn-success btn-lg"onClick={this.props.onClickAdd}>ADD</button>
                </div> 
            </div>
         );
    }
}
 
export default NumberForm;