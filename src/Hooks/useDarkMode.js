import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);
    useEffect(() => {
        if(values) {
            document.body.classList.add('dark-mode');        
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [values])

    return [values, setValues]
    
}