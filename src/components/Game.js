import React, { useContext } from 'react';
import styled from 'styled-components';
import Choice from '../elements/Choice';
import {ReactComponent as Icon} from '../assets/bg-triangle.svg';
import { UserSelectionContext } from '../contexts/UserSelectionContext';

const Game = () => {
    const {userSelection} = useContext(UserSelectionContext);
    console.log(userSelection);
    return (
        <MasterFlex>
            <GameContainer>
                <GameBackground/>
                <Choice name='rock'/>
                <Choice name='paper'/>
                <Choice name='scissors'/>
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
    transition: ease all 1s;

    @media (max-width: 480px){
        width: 350px;
        height: 300px;
        margin-top: 0;
    }
`;

const GameBackground = styled(Icon)`
    scale: 1.12;
    position: absolute;
    align-self: center;

    @media (max-width: 480px){
        scale: 0.7;
    }
`;
 
export default Game;