import React, {useState} from 'react';

const UserSelectionContext = React.createContext();

const UserSelectionProvider = ({children}) => {
    const [userSelection, setUserSelection] = useState();
    return (
        <UserSelectionContext.Provider value={{userSelection, setUserSelection}}>
            {children}
        </UserSelectionContext.Provider>
    );
}
 
export {UserSelectionContext, UserSelectionProvider};