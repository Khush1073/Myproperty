import  { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
    const [GlobalformData, setGlobalFormData] = useState({}); // Global formData

    return (
        <SearchContext.Provider value={{ GlobalformData, setGlobalFormData }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;