import React, {useState} from 'react';

const IsChosenContext = React.createContext();

const IsChosenProvider = ({children}) => {
    const [isChosen, setIsChosen] = useState(false);
    return (
        <IsChosenContext.Provider value={{isChosen, setIsChosen}}>
            {children}
        </IsChosenContext.Provider>
    );
};
 
export {IsChosenContext, IsChosenProvider};