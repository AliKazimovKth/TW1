/* 
   The Model keeps only abstract data and has no notions of graphics or interaction
*/
export default {  // we export a JavaScript object: { p1:v1, p2:v2, method(param){ statements; }, }
        // other model properties will be initialized here in the coming lab steps
    numberOfGuests: 2,
    dishes: [],
    currentDish: null,
    
    setNumberOfGuests(nr){
       
            if (nr <= 0 || !Number.isInteger(nr)) {
              throw new Error ("number of guests not a positive integer");
            } else {
              this.numberOfGuests = nr;
            }
          
        
        
    },
    
    addToMenu(dishToAdd){
       this.dishes = [...this.dishes, dishToAdd];
    },
    
    removeFromMenu(dishToRemove){
        // callback exercise! Also return keyword exercise
        function shouldWeKeepDishCB(dish){
           if(dish.id !=dishToRemove.id){
            return true;
           }
        }
        this.dishes= this.dishes.filter(shouldWeKeepDishCB);
        // the test "can remove dishes" should pass
    },
    
    /* 
       setting the ID of dish currently checked by the user.
       A strict MVC/MVP Model would not keep such data, 
       but we take a more relaxed, "Application state" approach. 
       So we store also abstract data that will influence the application status.
     */
    setCurrentDish(id){
       this.currentDish = id;
    },
    // more methods will be added here, don't forget to separate them with comma!
}

