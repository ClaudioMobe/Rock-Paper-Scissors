import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { DecisionContext } from '../contexts/DecisionContext';
import { HouseSelectionContext } from '../contexts/HouseSelectionContext';
import { IsChosenContext } from '../contexts/IsChosenContext';
import { UserSelectionContext } from '../contexts/UserSelectionContext';

const MessageAndPlayAgainButton = ({setWhoWon}) => {
    const {setUserSelection} = useContext(UserSelectionContext);
    const {setWinnerID} = useContext(HouseSelectionContext);
    const {decision, setDecision} = useContext(DecisionContext);
    const {setIsChosen} = useContext(IsChosenContext);

    const handleClick = () => {
        setUserSelection('');
        setWinnerID('');
        setDecision('');
        setIsChosen(false);
        setWhoWon('');
    }

    return (
        <Container decision={decision}>
            <Message>{decision}</Message>
            <PlayAgainButton onClick={() => handleClick()}>PLAY AGAIN</PlayAgainButton>
        </Container>
    );
}

const Container = styled.div`
    display: ${props => props.decision ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 5000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: max-content;
    height: 120px;
    text-align: center;

    @media (max-width: 480px){
        height: 55vh;
    }
`;

const Message = styled.h2`
    text-transform: uppercase;
    font-size: 40px;
    color: #fff;
`;
 
const PlayAgainButton = styled.button`
    color: #dedede;
    font-family: 'Barlow Semi Condensed';
    font-size: 20px;
    letter-spacing: 2.7px;
    padding: 10px 20px;
    background: transparent;
    border: 3px solid hsl(217, 16%, 70%);
    border-radius: 15px;
    :hover{
        color: #fff;
        border: 3px solid hsl(217, 16%, 90%);
    }
`;

export default MessageAndPlayAgainButton;