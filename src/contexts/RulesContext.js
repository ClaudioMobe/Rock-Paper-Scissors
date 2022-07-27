import React, { useState } from 'react';

const RulesContext = React.createContext();

const RulesProvider = ({children}) => {
    const [showMod, setShowMod] = useState(false);
    const openRules = () => setShowMod(true);
    const closeRules = () => setShowMod(false);

    return (
        <RulesContext.Provider value={{showMod, openRules, closeRules}}>
            {children}
        </RulesContext.Provider>
    );
}
 
export {RulesProvider, RulesContext};