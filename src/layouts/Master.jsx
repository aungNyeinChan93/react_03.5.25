import React, { createContext, useState } from 'react';

export const MasterContext = createContext();

const MasterLayout = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const [user, setUser] = useState({})

    return (
        <MasterContext.Provider value={{ name: 'MasterLayout', theme, setTheme, setUser, user }}>
            {children}
        </MasterContext.Provider>
    );
};

export default MasterLayout;