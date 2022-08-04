import React, {useContext} from 'react';
import styled from 'styled-components';
import { ReactComponent as Rock } from '../assets/icon-rock.svg';
import { ReactComponent as Paper } from '../assets/icon-paper.svg';
import { ReactComponent as Scissors } from '../assets/icon-scissors.svg';
import { UserSelectionContext } from '../contexts/UserSelectionContext';

const Choice = () => {
    const {userSelection, setUserSelection} = useContext(UserSelectionContext);
    
    const handleSelection = (e) => {
        // if
        const chosen = e.target.attributes.name.value;
        setUserSelection(chosen);
    };
    
    const options = [<Rock/>, <Paper/>, <Scissors/>];
    return (
        options.map((option, index) => {
            return (
                <Option key={index} name={index===0 ? 'rock' : (index===1 ? 'paper' : 'scissors')} userSelection={userSelection} onClick={(e) => handleSelection(e)}>
                    {option}
                </Option>
            )
        })
    )
};

const Option = styled.button`
    min-width: 220px;
    height: 220px;
    border-radius: 50%;
    display: ${props => props.userSelection.length===0 ? 'flex': (props.userSelection === props.name ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 200;
    margin-right: ${props => props.userSelection.length===0 ? '0': 'auto'};
    border: 30px solid ${props => props.name==='rock' ? "hsl(349, 71%, 52%)"  : (props.name==='paper'? "hsl(230, 89%, 62%)" : "hsl(40, 84%, 53%)")};
    box-shadow: inset 0 10px #ddd, 0 10px ${props => props.name==='rock' ? "hsl(349, 71%, 40%)"  : (props.name==='paper'? "hsl(230, 89%, 41%)" : "hsl(39, 89%, 40%)")};
    background: #eee;
    transition: ease-in-out scale 0.05s;

    :active{
        scale:0.9;
    }
    & svg {
        scale: 1.5;
    }

    

    @media (max-width: 480px){
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