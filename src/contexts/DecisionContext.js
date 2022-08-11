import React, {useState} from 'react';

const DecisionContext = React.createContext();

const DecisionProvider = ({children}) => {
    const [decision, setDecision] = useState();
    return (
        <DecisionContext.Provider value={{decision, setDecision}}>
            {children}
        </DecisionContext.Provider>
    );
}
 
export {DecisionContext, DecisionProvider};