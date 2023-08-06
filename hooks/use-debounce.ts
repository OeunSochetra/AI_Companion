// import { useState, useEffect } from "react";
 
// export function useDebounce<T>(value: T, dely?: number): T {
//     const [ debounceValue , setDebounceValuev] = useState<T>(value)

//     useEffect(() => {
//         const timer = setTimeout (() => setDebounceValuev(value),dely || 500);

//         return () => 
//             clearTimeout(timer);

//     },[value, dely]);

//     return debounceValue
// }

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay || 500);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceValue;
}
