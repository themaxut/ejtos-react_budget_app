import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const maxBudget = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // Function to handle updating the budget value
    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);

        // Ensure the new budget within bounds (totalExpenses - maxBudget)
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        if (newBudget <= maxBudget) {
            dispatch({ type: "SET_BUDGET", payload: newBudget });
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                max={maxBudget}
                value={budget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
