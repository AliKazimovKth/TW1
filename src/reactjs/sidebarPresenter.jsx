import SidebarView from "../views/sidebarView.jsx";


export default function SideBar(props)
 {
        //fråga till presentation: hur den tar från dinermodel utan att riktigt importera den?

    function removeFromMenuCB(dish){ 
        props.model.removeFromMenu(dish);
    }

    function dishNameCB(dish) {
        props.model.setCurrentDish(dish.id)
    }
    
    function handleNumberChangeCB(number) {
        props.model.setNumberOfGuests(number)
    }

    return (
        <SidebarView
            number={props.model.numberOfGuests}  
            dishes={props.model.dishes}
            onNumberChange={handleNumberChangeCB}
            dishName={dishNameCB}
            removeFromMenu = {removeFromMenuCB}

        />
    );
}


