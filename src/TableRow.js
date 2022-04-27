import React, {Component} from 'react';
import './Table.css';
class TableRow extends Component{
    
    constructor(props){ 
        super(props)
        this.state={
            data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]

        }
    }
    render() {
        return (
            <div className="App">
                 <table>
                    <thead>
                     <tr>
                      <th className="TitleTable">ID</th>
                      <th className="TitleTable">NAME</th>
                      <th className="TitleTable">AGE</th>
                     </tr>
                    </thead>
                        <tbody>{this.state.data.map(function(item, key) {
                          return (
                           <tr key = {key}>
                              <td className="DataTable">{item.id}</td>
                              <td className="DataTable">{item.name}</td>
                              <td className="DataTable">{item.age}</td> 
                           </tr>
                         )
                        })}          
                        </tbody>
                </table>
            </div>
            );
          }

}
export default TableRow;