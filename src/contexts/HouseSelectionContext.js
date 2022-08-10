import React, {useState} from 'react';

const HouseSelectionContext = React.createContext();

const HouseSelectionProvider = ({children}) => {
    const [winnerID, setWinnerID] = useState();
    return (
        <HouseSelectionContext.Provider value={{winnerID, setWinnerID}}>
            {children}
        </HouseSelectionContext.Provider>
    );
}
 
export {HouseSelectionContext, HouseSelectionProvider};