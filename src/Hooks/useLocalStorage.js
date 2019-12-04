import {useState} from 'react';
// set a unique key
export const useLocalStorage = (key, initialValue) => {
// set state property 
    const [storedValue, setStoredValue] = useState(() => {
        // if local data use that, else use initial data
        const item = window.localStorage.getItem(key);
            //capture the values 
            return item ? JSON.parse(item) : initialValue;
          
        });
        
       //  parse data from localStorage, and stringify new data getting stored 
    
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return[storedValue, setValue];
};