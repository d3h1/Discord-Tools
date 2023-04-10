import { useEffect, useState } from "react";

// WE need local storage to get our variables and their values in order to get dark mode to work based on our current classNames 
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // We are parsing our storage at that moment in order to get the values of the variables we are looking at for dark mode
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value; // If there is a value set value to the current stored value, if not, set a new value

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error)
        }
    };
    return [storedValue, setValue]
}

// Dark Mode works on stored values
const DarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme');
    const isEnabled = typeof enabledState === 'undefined' && enabled;

    // If enabled dark mode is switched over in the classNames, if not we go back to default classNames 
    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);

    return [enabled, setEnabled];
};

export default DarkMode;