import React, { createContext, useState } from 'react';

export const MasterContext = createContext();

const MasterLayout = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    return (
        <MasterContext.Provider value={{ name: 'MasterLayout', theme, setTheme }}>
            {children}
        </MasterContext.Provider>
    );
};

export default MasterLayout;