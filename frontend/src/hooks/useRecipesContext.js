import { RecipesContext } from "../context/RecipesContext";
import { useContext } from "react";
export const useRecipesContext = () => {
    const context = useContext(RecipesContext).dispatch;

    if (!context) {
        throw new Error("useRecipesContext must be used within RecipesContextProvider");
    }

    return context;
}