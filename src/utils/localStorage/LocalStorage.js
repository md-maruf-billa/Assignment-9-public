// --------------Get Rent Value From Local Storage-----------

import { toast } from "react-toastify";

const rentFromLocalStorage = () => {
    const check = localStorage.getItem("rent");
    if (check) {
        return JSON.parse(localStorage.getItem("rent"))
    }
    else {
        return []
    }
}
// ------------Get sell value form local storage--------
const sellFromLocalStorage = () => {
    const check = localStorage.getItem("sell");
    if (check) {
        return JSON.parse(localStorage.getItem("sell"))
    }
    else {
        return []
    }
}

// -------------Set Rent value in Local Storage--------

const setInLocalStorage = (finder, value) => {
    if (finder == "rent") {
        const temp = [];
        const getValue = rentFromLocalStorage()
        const exist = getValue.find(id => id == value);
        if (!exist) {
            temp.push(...getValue, value);
            toast.success("Added to Rent Successfully")
            return localStorage.setItem("rent", JSON.stringify(temp));
        }
        else {
            toast.warn("Already added in Rent")
        }
    }
    if (finder == "sell") {
        const temp = [];
        const getValue = sellFromLocalStorage();
        const exist = getValue.find(id => id == value);
        if (!exist) {
            toast.success("Added to Sell Successfully")
            temp.push(...getValue, value)
            return localStorage.setItem("sell", JSON.stringify(temp))
        }
        else {
            toast.warn("Already added in Sell")
        }

    }
}



export { rentFromLocalStorage, setInLocalStorage, sellFromLocalStorage };