import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list-actions';

export const ADD_INGRIDIENT = "ADD_INGRIDIENT";

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGRIDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        default:
            return state;
    }

    return state;
}