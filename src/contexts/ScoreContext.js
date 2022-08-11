import React, {useState, useEffect} from 'react';

const ScoreContext = React.createContext();

const ScoreProvider = ({children}) => {
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')));
    
    useEffect(()=>{
        localStorage.setItem('score', JSON.stringify(score));
    }, [score]);

    useEffect(()=>{
        const archivedScore = JSON.parse(localStorage.getItem('score'));
        if (!archivedScore){
            setScore(0);
        }
    },[]);

    return (
        <ScoreContext.Provider value={{score, setScore}}>
            {children}
        </ScoreContext.Provider>
    );
}
 
export {ScoreContext, ScoreProvider};