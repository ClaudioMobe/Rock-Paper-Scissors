import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import MessageAndPlayAgainButton from './MessageAndPlayAgainButton';
import { ReactComponent as Rock } from '../assets/icon-rock.svg';
import { ReactComponent as Paper } from '../assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../assets/icon-scissors.svg';
import { UserSelectionContext } from '../contexts/UserSelectionContext';
import { HouseSelectionContext } from '../contexts/HouseSelectionContext';
import { ScoreContext } from '../contexts/ScoreContext';
import { useEffect } from 'react';
import { IsChosenContext } from '../contexts/IsChosenContext';
import { DecisionContext } from '../contexts/DecisionContext';

const Choice = () => {
    const {userSelection, setUserSelection} = useContext(UserSelectionContext);
    const {winnerID, setWinnerID} = useContext(HouseSelectionContext);
    const {score, setScore} = useContext(ScoreContext);
    const {isChosen, setIsChosen} = useContext(IsChosenContext);
    const {setDecision} = useContext(DecisionContext);
    
    const [isComplete, setIsComplete] = useState(false);
    const [whoWon, setWhoWon] = useState('');
    
    //This function transforms a number between 0 and 2 to string
    const numberToText = (number) => {
        return number===0 ? 'rock' : (number===1 ? 'paper' : 'scissors')
    }

    const handleSelection = (e) => {
        if (!isChosen){
            const chosen = e.target.attributes.name.value;
            setUserSelection(chosen);
            setIsChosen(true); //This allows that this function is executed only once, when the choice is made
            winnerEmotion();
        }
    };
    
    //The Promise 'wait' will allow to make a pause in the loop of winnerEmotion
    const wait = (ms) => new Promise (resolve => setTimeout(resolve, ms));
    const winnerEmotion = async () =>{
        var i=0;
        while (i < 30){
            setWinnerID(Math.trunc(Math.random()*3));
            await wait(20);
            i++;
            if (i===30){
                setIsComplete(true);
            }
        }
    };

    useEffect(()=>{
        if (isComplete){
            if (userSelection === numberToText(winnerID)){
                setDecision("It's a tie");
            } else if (userSelection==='rock'){
                if (numberToText(winnerID)==='paper'){
                    setDecision('You lost');
                    setWhoWon('computer');
                } else {
                    setDecision('You won');
                    setWhoWon('user');
                    setScore(score+1);
                }
            } else if (userSelection==='paper'){
                if (numberToText(winnerID)==='scissors'){
                    setDecision('You lost');
                    setWhoWon('computer');
                } else {
                    setDecision('You won');
                    setWhoWon('user');
                    setScore(score+1);
                }
            } else if (numberToText(winnerID)==='rock'){
                setDecision('You lost');
                setWhoWon('computer');
            } else {
                setDecision('You won');
                setWhoWon('user');
                setScore(score+1);
            }
        setIsComplete(false);
        };
    }, [isComplete, userSelection, winnerID, setDecision, setScore, score]);


    const options = [<Rock/>, <Paper/>, <Scissors/>];
    
    return (
        <>
        {options.map((option, index) => {
            return (
                <Option key={index} name={numberToText(index)} userselection={userSelection} onClick={(e) => handleSelection(e)} winner={whoWon}>
                    {option}
                </Option>
            )
        })}
        <WinnerOption name={numberToText(winnerID)} userselection={userSelection} winner={whoWon}>{options[winnerID]}</WinnerOption>
        <MessageAndPlayAgainButton setWhoWon={setWhoWon}/>
        </>
    )
};

const Option = styled.button`
    min-width: 220px;
    height: 220px;
    border-radius: 50%;
    display: ${props => props.userselection.length===0 ? 'flex': (props.userselection === props.name ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 200;
    margin-right: ${props => props.userselection.length===0 ? '0': 'auto'};
    border: 30px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper'? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
    box-shadow: inset 0 10px #ddd, 0 10px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper'? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
    background: #eee;
    transition: ease-in-out scale 0.05s, ease margin-right 2s;
    scale: ${props => props.userselection.length===0 ? '1': '1.2'};
    animation: ${props => props.winner==='user' ? 'winner-border 0.3s ease-out forwards' : 'none'};

    :active{
        scale: ${props => props.userselection.length===0 ? '0.9': '1.2'};
    }
    & svg {
        scale: 1.5;
    }

    @media (max-width: 480px){
        scale: ${props => props.userselection.length===0 ? '1': '1.1'};
        min-width: 130px;
        height: 130px;
        border: 15px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper' ? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
        box-shadow: inset 0 5px #ddd, 0 5px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper' ? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
        
        :active{
            scale: 1;
        }
        & svg {
            scale: 0.9;
        }
    }

    @keyframes winner-border {
        25% {
            box-shadow: 
                        0 0 0 60px rgba(255,255,255,0.25),
                        0 0 0 85px rgba(255,255,255,0.2),
                        0 0 0 105px rgba(255,255,255,0.1);
        }

        50% {
            box-shadow: 
                        0 0 0 55px rgba(255,255,255,0.25),
                        0 0 0 140px rgba(255,255,255,0.2),
                        0 0 0 200px rgba(255,255,255,0.1);
        }

        75% {
            box-shadow: 
                        0 0 0 55px rgba(255,255,255,0.25),
                        0 0 0 130px rgba(255,255,255,0.2),
                        0 0 0 260px rgba(255,255,255,0.1);
        }

        100% {
            box-shadow: 
                        0 0 0 50px rgba(255,255,255,0.25),
                        0 0 0 125px rgba(255,255,255,0.2),
                        0 0 0 250px rgba(255,255,255,0.1);
        } 
    }
`;

const WinnerOption = styled.button`
    min-width: 220px;
    height: 220px;
    border-radius: 50%;
    display: ${props => props.userselection.length===0 ? 'none': 'flex'};
    justify-content: center;
    align-items: center;
    z-index: 200;
    margin-left: auto;
    border: 30px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper'? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
    box-shadow: inset 0 10px #ddd, 0 10px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper'? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
    background: #eee;
    transition: ease-in-out scale 0.05s, ease-in visibility 5s;
    scale: ${props => props.userselection.length===0 ? '1': '1.2'};
    animation: ${props => props.winner==='computer' ? 'winner-border 0.3s ease-out forwards' : 'none'};
    
    & svg {
        scale: 1.5;
    }

    @media (max-width: 480px){
        scale: 1.1;
        min-width: 130px;
        height: 130px;
        border: 15px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper' ? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
        box-shadow: inset 0 5px #ddd, 0 5px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper' ? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
        & svg {
            scale: 0.9;
        }
    }
`;

export default Choice;