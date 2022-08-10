import React, { useContext } from 'react';
import styled from 'styled-components';
import GameContent from '../elements/GameContent';
import {ReactComponent as Icon} from '../assets/bg-triangle.svg';
import { UserSelectionContext } from '../contexts/UserSelectionContext';

const Game = () => {
    const {userSelection} = useContext(UserSelectionContext);
    return (
        <MasterFlex>
            <GameContainer userselection={userSelection}>
                <GameBackground userselection={userSelection}/>
                <TextContainer userselection={userSelection}>
                    <div>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </TextContainer>
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
    flex-wrap: wrap;
`;
const GameContainer = styled.div`
    display: flex;
    margin-top: 10vh;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.userselection.length===0 ? '650px' : '750px'};
    height: max-content;
    position: relative;
    transition: ease all 1s;

    @media (max-width: 480px){
        width: 85vw;
        margin-top: 0;
    }
`;

const GameBackground = styled(Icon)`
    scale: ${props => props.userselection.length===0 ? '1.12' : '0.1'};
    position: absolute;
    align-self: center;
    transform: ${props => props.userselection.length===0 ? 'rotate(0)' : 'rotate(360deg)'};
    opacity: ${props => props.userselection.length===0 ? '1' : '0'};
    transition: linear all 0.5s;

    @media (max-width: 480px){
        scale: ${props => props.userselection.length===0 ? '0.7' : '0.1'};
    }
`;

const TextContainer = styled.div`
    width: 100%;
    padding-bottom: 7%;
    z-index:5000;
    color: #fff;
    opacity: 0.9;
    display: ${props => props.userselection.length===0 ? 'none' : 'flex'};
    justify-content: space-between;
    align-items: center;

    & div {
        width: 220px;
        text-align: center;
    }

    @media (max-width: 480px){
        & div {
            width: 130px;
            font-size: 12px;
        }
    }
`;
 
export default Game;