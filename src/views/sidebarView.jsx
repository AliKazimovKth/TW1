

import { sortDishes, menuPrice, dishType } from "../utilities.js";
import "/src/style.css"

function SidebarView(props) {
    // Function to increment the number of dishes
    function incrementingButtonACB() {
        props.onNumberChange(props.number + 1);
    }

    // Function to decrement the number of dishes
    function decrementingButtonACB() {
        props.onNumberChange(props.number - 1);
    }


    // Returning the SidebarView component
    return (
        <div>
            {/* Button to decrement the number of dishes */}
            <button onClick={decrementingButtonACB} disabled={props.number === 1}>-</button>
            {/* Display the number of dishes */}
            {props.number}
            {/* Button to increment the number of dishes */}
            <button onClick={incrementingButtonACB}>+</button>
            {/* Rendering the list of dishes */}
            {renderDishes(props.dishes, props.number)}
        </div>
    );

    // Function to render the list of dishes
    function renderDishes(dishArray, people) {
        // Callback function to construct rows for each dish
        function TableDishRowCB(dish) {
            return (
                <tr className="sidebarRow" key={dish.id}>
                    <td><button onClick={() => userRemoveDishACB(dish)}>x</button></td>
                    <td><a onClick={() => dishNameIsPressedACB(dish)} href="#details">{dish.title}</a></td>
                    <td className="dishType">{dishType(dish)}</td>
                    <td className="totalPrice">{(dish.pricePerServing * people).toFixed(2)}</td>
                </tr>
            );
        }

        // Callback function to remove a dish
        function userRemoveDishACB(dish) {
            props.removeDish(dish);
        }

        // Callback function when dish name is clicked
        function dishNameIsPressedACB(dish) {
            props.dishName(dish);
        }

        // Rendering the table with dishes and total
        return (
            <table>
                <tbody>
                    {/* Mapping each dish to a TableDishRowCB */}
                    {sortDishes(dishArray).map((dish) => TableDishRowCB(dish))}
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td className="totalPrice">{(menuPrice(dishArray) * people).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default SidebarView;