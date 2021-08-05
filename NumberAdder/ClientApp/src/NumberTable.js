import React from 'react';
import NumberForm from './NumberForm';
import NumberRow from './NumberRow';
import SelectedNumbers from './SelectedNumbers';

let id = 0

class NumberTable extends React.Component {
    state = {
        numbers: [],
       lockedNumbers: [],
        selectedNumbers: []
    }

    numberToAdd = () => Math.floor(Math.random() * 1000);

    onClickAddNumber = () => {
        const {numbers} = this.state;
const number = this.numberToAdd();
id++;
this.setState({numbers: [...numbers, {id, number}]});
    }

  onAddToSelected = number => {
      const {selectedNumbers} = this.state;
this.setState({selectedNumbers: [...selectedNumbers, number]});
  }  

  onRemoveFromSelected = ({id}) => {
      const {selectedNumbers} = this.state;
      this.setState({selectedNumbers: selectedNumbers.filter(n => n.id !== id)});
  }

  onLockChangeClick = id => {
      const {lockedNumbers} = this.state;
      if (lockedNumbers.includes(id)) {
          this.setState({lockedNumbers: lockedNumbers.filter(l => l !== id)});
      } else {
          this.setState({lockedNumbers: [...lockedNumbers, id]});
      }
  }
    
    render() { 
        const {numbers, selectedNumbers, lockedNumbers} = this.state;
        return (
            <div className="container" style={{marginTop: 60}}>
                 <NumberForm onClickAdd={this.onClickAddNumber}/>
           <div className="row">
               <div className="col-md-8">
               <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>ADD/REMOVE</th>
                    </tr>
                </thead>
                <tbody>
                    {numbers.map(obj => {
                        let {number, id} = obj;
                        let {lockedNumbers} = this.state;
                        return <NumberRow
                        key={id}
                        number={number}
                        locked={lockedNumbers.includes(id)}
                        isAdd={!selectedNumbers.map(s => s.id).includes(id)}
                        onAddClick={() => this.onAddToSelected(obj)}
                        onRemoveClick={() => this.onRemoveFromSelected(obj)}
                        />
                    })}
                </tbody>
                </table>
               </div>
           </div>
{!!selectedNumbers.length && <SelectedNumbers
numbers={selectedNumbers}
lockedNumbers={lockedNumbers}
onLockChangeClick={this.onLockChangeClick}
/>}
            </div>
           
            
          );
    }
}
 
export default NumberTable;