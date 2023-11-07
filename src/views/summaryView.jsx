
import {sortIngredients} from "/src/utilities.js";
import "/src/style.css"
//fråga kring vad table, thread,tbody osv egentligen och varför ; inte behövs efteråt?
function SummaryView(props){
    return (
            <div class="debug">
              Summary for <span title="nr guests">{props.people}</span> persons:    
              <table> 
                  {  
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>

                  }
                
                <tbody>
                  {  
                      // TODO: un-comment and pass the CB below for array rendering!
                     
                      sortIngredients(props.ingredients).map(ingredientTableRowCB) 

                      // TODO once the table rendering works, sort ingredients before mapping. Import the needed function from utilities.js  
                  }
                </tbody>
              </table>
            </div>
    );

    function ingredientTableRowCB(ingr){
        return <tr key={ /* TODO what's a key? */ingr.id } >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td class="totalQuantity"> {(ingr.amount * props.people).toFixed(2)}</td>
                 <td> {ingr.unit} </td>
               </tr>;
    }
}

export default SummaryView;
