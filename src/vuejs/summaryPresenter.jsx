import SummaryView from "../views/summaryView.jsx";
import { shoppingList} from "../utilities.js";

export default
function Summary(props){
    return <SummaryView people={props.model.numberOfGuests} ingredients={[...shoppingList(props.model.dishes) ]/* empty array for starters */}/>;
}
