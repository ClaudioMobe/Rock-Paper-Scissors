import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as Rock } from '../assets/icon-rock.svg';
import { ReactComponent as Paper } from '../assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../assets/icon-scissors.svg';
import { UserSelectionContext } from '../contexts/UserSelectionContext';

const Choice = ({name}) => {
    const {setUserSelection} = useContext(UserSelectionContext);
    const handleSelection = (e) => {
        const chosen = e.target.attributes.name.value;
        setUserSelection(chosen);
    };

    const chooseOption = (identifier) => {
        switch (identifier){
            case 'rock': 
                return <Rock/>;
            case 'paper': 
                return <Paper/>;
            case 'scissors': 
                return <Scissors/>;
            default:
                break;
        }
    };

    return (
        <Option name={name} onClick={(e) => handleSelection(e)}>
            {chooseOption(name)}
        </Option>
    )
};

const Option = styled.button`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 30px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper' ? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
    box-shadow: inset 0 10px #ddd, 0 10px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper' ? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
    background: #eee;
    z-index: 100;
    transition: ease-out all 0.05s;
    :active{
        scale:0.9;
    }
    & svg {
        scale: 1.5;
    }

    

    @media (max-width: 480px){
        width: 130px;
        height: 130px;
        border: 15px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper' ? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
        box-shadow: inset 0 5px #ddd, 0 5px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper' ? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
        & svg {
            scale: 0.9;
        }
    }
`;

export default Choice;