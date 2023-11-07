import SummaryView from "../views/summaryView.jsx";s
import { shoppingList } from "../utilities.js";



export default            // needed for the presenter to update (its view) when relevant parts of the model change   

function Summary(props){
        return <SummaryView people={props.model.numberOfGuests} ingredients={[...shoppingList(props.model.dishes) ]/* empty array for starters */}/>;
    }
;
