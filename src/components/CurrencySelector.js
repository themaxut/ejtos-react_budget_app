import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencySelector = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
    };

    return (
        <div className="alert alert-secondary">
            <span>
                <select
                    onChange={handleCurrencyChange}
                    style={{
                        backgroundColor: "lightgreen",
                        color: "white",
                        position: "relative",
                        zIndex: 1,
                    }}
                    value={currency}
                >
                    <option value="$">Currency($ Dollar)</option>
                    <option value="£">Currency(£ Pound)</option>
                    <option value="€">Currency(€ Euro)</option>
                    <option value="₹">Currency(₹ Rupee)</option>
                </select>
            </span>
        </div>
    );
};

export default CurrencySelector;
