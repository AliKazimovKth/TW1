

import "/src/style.css"
import { sortDishes, menuPrice, dishType } from "../utilities.js";



function SidebarView(props) {
    function increaseCountCB() {
        props.onNumberChange(props.number + 1);
    }

    function decreaseCountCB() {
        props.onNumberChange(props.number - 1);
    }

    function removeFromMenuCB(dish) {
        props.removeFromMenu(dish);
    }

    function onDishClickCB(dish) {
        props.dishName(dish);
    }

    function renderDishRow(dish, persons) {
        return (
            <tr className="SidebarRow" key={dish.id}>
                <td><button onClick={() => removeFromMenuCB(dish)}>x</button></td>
                <td><a onClick={() => onDishClickCB(dish)} href="#details">{dish.title}</a></td>
                <td className="DishType">{dishType(dish)}</td>
                <td className="totalPrice">{(dish.pricePerServing * persons).toFixed(2)}</td>
            </tr>
        );
    }

    return (
        <div>
            <button onClick={decreaseCountCB} disabled={props.number === 1}>-</button>
            {props.number}
            <button onClick={increaseCountCB}>+</button>
            <table>
                <tbody>
                    {sortDishes(props.dishes).map((dish) => renderDishRow(dish, props.number))}
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td className="totalPrice">{(menuPrice(props.dishes) * props.number).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SidebarView;








