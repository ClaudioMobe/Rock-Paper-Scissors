import React, { useContext } from 'react';
import styled from 'styled-components';
import GameContent from '../elements/GameContent';
import {ReactComponent as Icon} from '../assets/bg-triangle.svg';
import { UserSelectionContext } from '../contexts/UserSelectionContext';

const Game = () => {
    const {userSelection} = useContext(UserSelectionContext);
    console.log(userSelection);
    return (
        <MasterFlex>
            <GameContainer>
                <GameBackground userSelection={userSelection}/>
                <GameContent/>
            </GameContainer>
        </MasterFlex>
    );
};
const MasterFlex = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
const GameContainer = styled.div`
    display: flex;
    margin-top: 10vh;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 650px;
    height: 550px;
    position: relative;
    transition: ease all 1s;

    @media (max-width: 480px){
        width: 350px;
        height: 300px;
        margin-top: 0;
    }
`;

const GameBackground = styled(Icon)`
    scale: ${props => props.userSelection.length===0 ? '1.12' : '0.1'};
    position: absolute;
    align-self: center;
    transform: ${props => props.userSelection.length===0 ? 'rotate(0)' : 'rotate(360deg)'};
    opacity: ${props => props.userSelection.length===0 ? '1' : '0'};
    transition: linear all 0.5s;

    @media (max-width: 480px){
        scale: ${props => props.userSelection.length===0 ? '0.7' : '0.1'};
    }
`;
 
export default Game;