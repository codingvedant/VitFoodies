import {createContext,useReducer} from 'react'

export const RecipesContext = createContext()

export const recipesReducer = (state,action) => {
    switch(action.type){
        case 'SET_RECIPES':
            return{
                recipes:action.payload
            }
        case 'CREATE_RECIPE':
            return{
                recipes:[action.payload, ...state.recipes]
            }
        default:
            return state
    }
}

export const RecipesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipesReducer, { recipes:null });

    return (
        <RecipesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </RecipesContext.Provider>
    );
};
